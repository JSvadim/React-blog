import { burgerPropsI } from "../../../types/header";
import style from "./style.module.scss";
import classNames from "classnames";


const BurgerMenu: React.FC<burgerPropsI> = (props) => {

    const burgerClassName = props.isNavOpened ?
        classNames(style.burger, style['burger-opened']) :
        style['burger'];

    return (
        <div className={burgerClassName}>
            <div className={style.inner}>
                <div className={style.decor}></div>
                <div className={style.decor}></div>
                <div className={style.decor}></div>
            </div>
            <button 
                className={style.button} 
                onClick={() => props.toggleMenu()}>
                Open menu
            </button>
        </div>
    )

}

export default BurgerMenu