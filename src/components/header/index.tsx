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


const Header: React.FC = (props) => {

    const [isNavigationOpened, toggleNav] = useState(false);
    const { user } = useTypedSelector(state => state.user);

    const toggleMenu = (): void => handleNavToggling(isNavigationOpened, toggleNav);

    return (
        <header className={style.header}>
            <Container>
                <div className={style.inner}>
                    {user === null ? <SignInLinks/> : 
                        <UserDropdown
                            userClassName={style.user} 
                            dropdownClassName={style["user-dropdown"]}
                            theme="white" 
                            user={user}/>}
                    <BurgerMenu 
                        isNavOpened={isNavigationOpened}
                        toggleMenu={toggleMenu}/>
                    <Navbar
                        isNavOpened={isNavigationOpened}
                        toggleMenu={toggleMenu}/>
                </div>
            </Container>
        </header>
    )
}

export default Header