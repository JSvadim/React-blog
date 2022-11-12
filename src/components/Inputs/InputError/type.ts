export type InputErrorType = "input" | "form" | "textarea";

export interface InputErrorI {
    message: string,
    errorType?: InputErrorType,
}