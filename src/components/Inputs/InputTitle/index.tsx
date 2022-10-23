// third party
import classNames from "classnames"

// local imports
import { InputTitleI } from "./type";
import style from "./style.module.scss";


const InputTitle: React.FC<InputTitleI> = (props) => {
    return (
        <span className={
            classNames([
            style["input-title"],
            props.sizesClass ?
                props.sizesClass :
                style["default-sizes-class"]])
        }>
            {props.title}
        </span>
    )
}

export default InputTitle