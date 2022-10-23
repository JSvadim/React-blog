// local imports
import { InputErrorType } from "../InputError/type";

export interface InputWrapperI {
    sizesClass: string;
    registerName: string;
    errors: object;
    errorType?: InputErrorType;
}