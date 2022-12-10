// third party
import classNames from "classnames";

// local imports
import { BasicInputComponentI } from "./type";
import style from "./style.module.scss";


export const BasicInput: React.FC<BasicInputComponentI> = (props) => {
    const { register, validation, registerName, placeholder, type } = props;

    return (
        <input
            className={classNames([
                style["input"],
                style[`input--theme-${props.theme}`],
                props.className ? props.className : ""
            ])}
            type={type}
            placeholder={placeholder}
            {...register(registerName, validation)}
        />
    )
}