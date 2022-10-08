// local imports
import InputError from "../InputError"

export const showInputError = (message: string, positioning: string) => {
    return (
        <InputError 
            message={message}
            positioning={positioning}
        />
    )
}