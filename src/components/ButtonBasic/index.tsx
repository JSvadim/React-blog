// local imports
import classNames from "classnames";
import style from "./style.module.scss";
import { ButtonBasicPropsI } from "./type";


const ButtonBasic: React.FC<ButtonBasicPropsI> = (props) => {
    return (
        <button
            className={
                classNames([
                    style.button,
                    style[props.theme],
                    props.positioning  ? props.positioning : '',
                ])
            }
            type={props.type}
            onClick={props.onClick}>
                {props.text}
        </button>
    )
}


export default ButtonBasic