// hooks
import { useEffect, useState } from "react";

// local imports
import classNames from "classnames";
import style from "./style.module.scss";
import { ButtonBasicComponentI } from "./type";


const ButtonBasic: React.FC<ButtonBasicComponentI> = (props) => {

    // isClicked and useEffect are for adding click animation for mobile devices.
    const [ isClicked, setIsClicked ] = useState<boolean>(false);
    useEffect(() => {

        if(!isClicked) return

        const clickedTimer = setTimeout(() => {
            setIsClicked(false);
        }, 500);

        return () => {clearTimeout(clickedTimer)}

    })

    const clickHandler = () => {
        props.onClick();
        setIsClicked(true);
    }


    return (
        <button
            className={
                classNames([
                    style.button,
                    isClicked ? style.clicked : '',
                    style[props.theme],
                    props.positioning  ? props.positioning : '',
                    "unselectable"
                ])
            }
            type={props.type}
            onClick={clickHandler}>
                {props.text}
        </button>
    )
}


export default ButtonBasic