// third party
import classNames from "classnames";

// local imports
import { MessageBasicComponentI } from "./type";
import style from "./style.module.scss";


export const MessageBasic: React.FC<MessageBasicComponentI> = (props) => {

    const messageClassName = classNames([style.message, style[props.position], props.className]);


    return (
        <p className={messageClassName}>
            {props.text}
        </p>
    )
}