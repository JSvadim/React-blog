// local imports
import { InputWrapperI } from "./type"
import style from "./style.module.scss"
import { ErrorMessage } from "@hookform/error-message";
import { showInputError } from "../../forms/helpers";
import InputLabel from "../InputLabel";


const InputWrapper: React.FC<InputWrapperI> = (props) => {
    return (
        <div className={props.sizesClass}>
            {props.labelType !== "no-label" && 
                <InputLabel labelType={props.labelType}>
                    {props.children}
                </InputLabel>
            }
            {props.labelType === "no-label" &&
                props.children
            }
            <ErrorMessage
                errors={props.errors || {}}
                name={props.registerName || ''}
                render={data => showInputError({
                    message: data.message,
                    errorType: props.errorType ?
                        props.errorType :
                        'input',
                })}
            /> 
        </div>
    );
}
export default InputWrapper