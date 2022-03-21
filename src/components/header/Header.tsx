import { useState } from "react";

//styles
import style from "./header.module.scss";

//components
import Navbar from "./navbar/Navbar";
import BurgerMenu from "./burger-menu/Burger-menu";


const Header: React.FC = () => {

    const [isNavigationOpened, toggleNav] = useState(false);

    const toggleMenu = (): void => toggleNav(!isNavigationOpened);


    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.inner}>
                    <nav>
                        <ul className={style["login-link__list"]}>
                            <li>
                                <a className={style["login-link"]} href="/">Log in </a> 
                                <span className={style["login-link__decor"]}>/</span>
                            </li>
                            <li>
                                <a className={style["login-link"]} href="/"> Sign in</a>
                            </li>
                        </ul>
                    </nav>
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