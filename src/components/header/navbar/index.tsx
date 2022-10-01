// third-party
import classNames from "classnames";
import { NavLink } from "react-router-dom";

// local imports
import style from "./style.module.scss";
import { navItems } from "../../../constants/navbar";
import { NavI } from "../../../types/header";
import { setActiveLinkStyle } from "../helpers";

const Navbar: React.FC<NavI> = (props) => {

    const navClassName = props.isNavOpened ?
        classNames(style.nav, style['nav-opened']) :
        style.nav;

    return (
        <div className={navClassName}>
            <nav className={style.inner}>
                <ul className={style.list}>
                    {navItems.map( (item: {title: string, path: string}, index: number) => {
                        return (
                            <li className={style["list-item"]} key={index}>
                                <NavLink className={style.link} 
                                    onClick={() => {props.toggleNav(false)}}
                                    style={setActiveLinkStyle} 
                                    to={item.path}>
                                        {item.title}
                                </NavLink>
                            </li>
                        )})
                    }
                </ul>
            </nav>
        </div>
    )
}


export default Navbar