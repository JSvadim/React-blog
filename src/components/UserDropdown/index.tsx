// hooks
import { useEffect, useState } from "react"

// third-party
import classNames from "classnames";

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


    const watchClickOutOfDropdown = (e: MouseEvent) => {
        // if dropdown is opened and user clicks out of dropdown it closes
        const element = e.target as HTMLElement;
        if(element && isOpened) {

            const isClickInsideDropdown = 
                element.classList.contains(props.dropdownClassName) ||
                element.closest(`.${props.dropdownClassName}`) ?
                true : 
                false;

            if(!isClickInsideDropdown) {
                setIsOpened(false);
            }
        }
    }

    useEffect(() => {
        if(isOpened) {
            document.addEventListener("click", watchClickOutOfDropdown);
        }
        return () => {document.removeEventListener("click", watchClickOutOfDropdown)}
    }, [isOpened]);

    
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
                    className={classNames([style["toggle-btn"], "unselectable"])}
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