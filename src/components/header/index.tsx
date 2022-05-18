// hooks
import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// local imports
import style from "./style.module.scss";
import Navbar from "./Navbar/index";
import BurgerMenu from "./BurgerMenu/index";
import SignInLinks from "./SignInLinks/index";
import { UserDropdown } from "../UserDropdown";


const Header: React.FC = (props) => {

    const [isNavigationOpened, toggleNav] = useState(false);
    const { user } = useTypedSelector(state => state.user);

    const toggleMenu = (): void => toggleNav(!isNavigationOpened);

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.inner}>
                    {user === null ? <SignInLinks/> : 
                        <UserDropdown 
                            className={style["user-dropdown"]}
                            theme="white" 
                            user={user}/>}
                    <BurgerMenu 
                        isNavOpened={isNavigationOpened}
                        toggleMenu={toggleMenu}/>
                    <Navbar
                        isNavOpened={isNavigationOpened}
                        toggleNav={toggleNav}/>
                </div>
            </div>
        </header>
    )
}

export default Header