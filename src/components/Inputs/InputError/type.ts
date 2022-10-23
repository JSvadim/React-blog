export type InputErrorType = "input" | "form";

export interface InputErrorI {
    message: string,
    errorType?: InputErrorType,
}