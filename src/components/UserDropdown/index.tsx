// hooks
import { useState } from "react"

// local imports
import { User } from "../User"
import { userDropdownI } from "./type";
import { getColors } from "./helpers";
import { userDropdownItems } from "../../constants/user-dropdown";

const DropdownNav : React.FC = (props) => {

    const menuItem = (item: { name: string, link: string }) => {
        return (
            <li className="user-dropdown__menu-item" key={item.name}>
                <a className="user-dropdown__menu-link" href={item.link}>{item.name}</a>
            </li>
        )
    }
    const menuItems = userDropdownItems.map( item => menuItem(item) );

    return (
        <nav className="user-dropdown__nav">
            <ul className="user-dropdown__menu">
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
            user-dropdown
            user-dropdown--theme-${props.theme}
            ${isOpened ? ("user-dropdown--opened" + " " + props.sizing.opened) : ""}
            ${props.sizing.dropdown}    
        `}>
            <User 
                user={props.user} 
                theme={isOpened ? secondColor : props.theme} 
                inDropdown={true}/>
            <svg className="user-dropdown__decor" viewBox="0 0 5 4" fill="none">
                <path d="M5 3.5L2.5 0.5L0 3.5L5 3.5Z" fill={
                    isOpened ? secondColor : firstColor
                }/>
            </svg>
            <button 
                className={`user-dropdown__toggle-btn
                    ${props.sizing.button}`}
                onClick={() => {setIsOpened(!isOpened)}}
                type="button"
                >
                {isOpened ? "Close dropdown" : "Open dropdown"} 
            </button>
            <DropdownNav/>
        </div>
    )
}