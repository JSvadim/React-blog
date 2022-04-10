// third-party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { navItems } from "../../../constants/navbar";
import { navI } from "../../../types/header";

const Navbar: React.FC<navI> = (props) => {

    const navClassName = props.isNavOpened ?
        classNames(style.nav, style['nav-opened']) :
        style.nav;

    return (
        <div className={navClassName}>
            <nav className={style.inner}>
                <ul className={style.list}>
                    {navItems.map( (item: {title: string}, index: number) => {
                        return (
                            <li className={style["list-item"]} key={index}>
                                <a className={style.link} href="/">
                                    {item.title}
                                </a>
                            </li>
                        )})
                    }
                </ul>
            </nav>
        </div>
    )
}


export default Navbar