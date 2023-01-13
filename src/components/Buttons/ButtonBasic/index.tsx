// hooks


// local imports
import classNames from "classnames";
import { useIsClicked } from "../../../hooks/useIsClicked";
import style from "./style.module.scss";
import { ButtonBasicComponentI } from "./type";


const ButtonBasic: React.FC<ButtonBasicComponentI> = (props) => {

    const [ isClicked, setIsClicked ] = useIsClicked(500);

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