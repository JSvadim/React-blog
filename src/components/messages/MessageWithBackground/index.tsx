// third party
import classNames from "classnames";

// local imports
import { MessageWithBackgroundComponentI } from "./type";
import style from "./style.module.scss";


export const MessageWithBackground: React.FC<MessageWithBackgroundComponentI> = (props) => {

    const textClassName = classNames([
        style.text, 
        style[`text__${props.position}`], 
        props.textClassName,
        style[`text--theme-${props.theme}`]]);
        

    const backgroundClassName = classNames([
        style.background,
        style[`background__${props.position}`],
        props.backgroundClassName,
        style[`background--theme-${props.theme}`]]);

        
    return (
        <div className={backgroundClassName}>
            <p className={textClassName}>
                {props.text}
            </p>
        </div>
    )
}