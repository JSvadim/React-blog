// hooks
import { useState } from "react"

// local imports
import { User } from "../User"
import { userDropdownI } from "./type";
import { getColors } from "./helpers";
import { userDropdownItems } from "../../constants/user-dropdown";
import style from "./style.module.scss";

const DropdownNav : React.FC = (props) => {

    const menuItem = (item: { name: string, link: string }) => {
        return (
            <li className={style["menu-item"]} key={item.name}>
                <a className={style["menu-link"]} href={item.link}>{item.name}</a>
            </li>
        )
    }
    const menuItems = userDropdownItems.map( item => menuItem(item) );

    return (
        <nav className={style["nav"]}>
            <ul className={style.menu}>
                {menuItems}
            </ul>
        </nav>
    );
}

export const UserDropdown: React.FC<userDropdownI> = (props) => {

    const [ isOpened, setIsOpened ] = useState(false);

    const { firstColor, secondColor } = getColors(props.theme);
    return (
        <div className={`
            whithout-highlight 
            ${props.className}
            ${style["user-dropdown"]}
            ${style[`user-dropdown--theme-${props.theme}`]}
            ${isOpened ? style["user-dropdown--opened"] : ""}
        `}>
            <User 
                sizingClass={style.user}
                user={props.user}
                theme={isOpened ? secondColor : props.theme}/>

            <svg className={style.decor} viewBox="0 0 5 4" fill="none">
                <path d="M5 3.5L2.5 0.5L0 3.5L5 3.5Z" fill={
                    isOpened ? secondColor : firstColor
                }/>
            </svg>

            <button 
                className={style["toggle-btn"]}
                onClick={() => {setIsOpened(!isOpened)}}
                type="button"
                >
                {isOpened ? "Close dropdown" : "Open dropdown"} 
            </button>

            <div className={style.body}>
                <div className={style["body-inner"]}>
                    <DropdownNav/>
                </div>
            </div>
        </div>
    )
}