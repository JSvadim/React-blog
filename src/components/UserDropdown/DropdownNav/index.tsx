// third-party 
import { Link } from "react-router-dom";

// local imports
import style from "./style.module.scss";
import { DropdownNavI } from "./type";
import { simpleClick, logoutClick } from "./click-handlers";


export const DropdownNav : React.FC<DropdownNavI> = (props) => {
    
    const toggle = props.toggleDropdown;
    const menuItems = () => {
        return (
            <>
                <li className={style["menu-item"]} key="My profile">
                    <Link className={style["menu-link"]} to="/profile" onClick={() => {simpleClick(toggle)}}>
                        My profile
                    </Link>
                </li>
                <li className={style["menu-item"]} key="Log out">
                    <Link className={style["menu-link"]} to="/" onClick={() => {logoutClick(toggle)}}>
                        Log out
                    </Link>
                </li>
                <li className={style["menu-item"]} key="My blogs">
                    <Link className={style["menu-link"]} to="/my-blogs" onClick={() => {simpleClick(toggle)}}>
                        My blogs
                    </Link>
                </li>
            </>
        )

    }

    return (
        <nav className={style["nav"]}>
            <ul className={style.menu}>
                {menuItems()}
            </ul>
        </nav>
    );
}