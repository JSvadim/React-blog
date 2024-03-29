// hooks
import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// local imports
import style from "./style.module.scss";
import Navbar from "./Navbar/index";
import BurgerMenu from "./BurgerMenu/index";
import SignInLinks from "./SignInLinks/index";
import { UserDropdown } from "../UserDropdown";
import Container from "../Container";
import { handleNavToggling } from "./helpers";
import { LanguageSwitch } from "./LanguageSwitch";


const Header: React.FC = (props) => {

    const [isNavigationOpened, toggleNav] = useState(false);
    const { user } = useTypedSelector(state => state.user);

    const toggleMenu = (): void => handleNavToggling(isNavigationOpened, toggleNav);
    const closeMenu = (): void => handleNavToggling(isNavigationOpened, toggleNav, true);

    return (
        <header className={style.header}>
            <Container>
                <div className={style.inner}>
                    {user === null ? <SignInLinks closeMenu={closeMenu}/> : 
                        <UserDropdown
                            userClassName={style.user} 
                            dropdownClassName={style["user-dropdown"]}
                            theme="white" 
                            user={user}/>}
                    <BurgerMenu 
                        className={style.burger}
                        isNavOpened={isNavigationOpened}
                        toggleMenu={toggleMenu}/>
                    <div className={style["navbar-language-container"]}>
                        <Navbar
                            isNavOpened={isNavigationOpened}
                            toggleMenu={closeMenu}/>
                        <LanguageSwitch className={style.language}/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header