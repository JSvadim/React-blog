// hooks
import { useState } from "react";

// local imports
import style from "./style.module.scss";
import Navbar from "./Navbar/index";
import BurgerMenu from "./BurgerMenu/index";
import SignInLinks from "./SignInLinks/index";
import { headerPropsI } from "../../types/header";
import { UserDropdown } from "../UserDropdown";


const Header: React.FC<headerPropsI> = (props) => {

    const [isNavigationOpened, toggleNav] = useState(false);

    const toggleMenu = (): void => toggleNav(!isNavigationOpened);
    const dropdownClasses = {
        dropdown: style["user-dropdown"],
        button: style["user-dropdown-btn"],
        opened: style["user-dropdown-opened"]
    }

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.inner}>
                    {props.user === null ? <SignInLinks/> : 
                        <UserDropdown 
                            theme="white" 
                            user={props.user}
                            sizing={dropdownClasses}/>}
                    <BurgerMenu 
                        isNavOpened={isNavigationOpened}
                        toggleMenu={toggleMenu}/>
                    <Navbar
                        isNavOpened={isNavigationOpened}/>
                </div>
            </div>
        </header>
    )
}

export default Header