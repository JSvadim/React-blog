// hooks
import { useState } from "react"

// local imports
import { User } from "../User"
import { UserDropdownComponentI } from "./type";
import style from "./style.module.scss";
import { DropdownNav } from "./DropdownNav";

// props.dropdownClassName should contain width in px,
// this will be max-width of dropdown

// props.userClassName should contain max-width: in px,  
// it will be max width of User component in UserDropdown


export const UserDropdown: React.FC<UserDropdownComponentI> = (props) => {

    const [ isOpened, setIsOpened ] = useState(false);
    const [ isClickable, setIsClickable ] = useState(true);
    
    const firstColor = props.theme === "white" ? "white" : "black";
    const secondColor = props.theme === "white" ? "black" : "white";

    return (
        <div className={props.dropdownClassName}>
            <div 
                className={`
                    whithout-highlight 
                    ${style["user-dropdown"]}
                    ${style[`user-dropdown--theme-${props.theme}`]}
                    ${isOpened ? style["user-dropdown--opened"] : ""}`}
                style={ isClickable ? {} : {pointerEvents: "none"} }>
                <User 
                    className={props.userClassName}
                    userNickname={props.user.nickname}
                    theme={isOpened ? secondColor : props.theme}/>

                <svg className={style.decor} viewBox="0 0 5 4">
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
                        <DropdownNav 
                            toggleDropdown={setIsOpened}
                            toggleIsClickable={setIsClickable}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}