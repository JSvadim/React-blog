// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { InputErrorI } from "./type";

const InputError: React.FC<InputErrorI> = (props) => {
    return (
        <p className={
                classNames(
                    style["input-error"],
                    props.positioning
                )
            }>
            {props.message} 
        </p>)
}

export default InputError