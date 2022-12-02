// local imports
import { InputErrorType } from "../InputError/type";
import { labelType } from "../InputLabel/type";

export interface InputWrapperI {
    sizesClass: string;
    registerName: string;
    errors: object;
    errorType?: InputErrorType;
    labelType: labelType | "no-label";
}