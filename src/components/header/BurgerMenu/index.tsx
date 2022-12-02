// third-party
import classNames from "classnames";

// local imports
import { BurgerMenuComponentI } from "../type";
import style from "./style.module.scss";


const BurgerMenu: React.FC<BurgerMenuComponentI> = (props) => {

    const burgerClassName = props.isNavOpened ?
        classNames(style.burger, style['burger-opened']) :
        style['burger'];

    return (
        <div className={burgerClassName}>
            <button 
                className={style.button} 
                onClick={() => props.toggleMenu()}>
                Open menu
            </button>
            <div className={style.decor}></div>
            <div className={style.decor}></div>
            <div className={style.decor}></div>
        </div>
    )

}

export default BurgerMenu