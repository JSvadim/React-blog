import { InputLabelI } from "./type";
import style from "./style.module.scss";

const InputLabel: React.FC<InputLabelI> = (props) => {
    return (
        <label className={style[props.labelType]}>
            {props.children}
        </label>
    )
}

export default InputLabel;