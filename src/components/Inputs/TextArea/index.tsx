// third party
import classNames from "classnames";

// local imports
import { TextAreaComponentI } from "./type";
import style from "./style.module.scss";


export const TextArea: React.FC<TextAreaComponentI> = (props) => {
    const { register, validation, registerName, placeholder } = props;

    return (
        <textarea
            className={classNames([
                style["text-area"],
                style[`text-area--theme-${props.theme}`],
                props.className ? props.className : ""
            ])}
            placeholder={`${placeholder}`}
            {...register(registerName, validation)}
        />
    )
}