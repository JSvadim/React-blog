// local imports
import InputError from "../Inputs/InputError"
import { InputErrorI } from "../Inputs/InputError/type"

export const showInputError = (params: InputErrorI) => {
    return (
        <InputError 
            message={params.message}
            errorType={params.errorType ? params.errorType : "input"}
        />
    ) 
}