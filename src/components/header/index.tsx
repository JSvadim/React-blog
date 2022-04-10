// hooks
import { useState } from "react";

// local imports
import style from "./style.module.scss";
import Navbar from "./Navbar/index";
import BurgerMenu from "./BurgerMenu/index";
import SignInLinks from "./SignInLinks/index";


const Header: React.FC = () => {

    const [isNavigationOpened, toggleNav] = useState(false);
    const toggleMenu = (): void => toggleNav(!isNavigationOpened);

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.inner}>
                    <SignInLinks/>
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