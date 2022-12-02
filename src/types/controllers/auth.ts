// local imports
import { LogInFormDataI } from "../../components/forms/LogInForm/type";
import { SignInFormDataI } from "../../components/forms/SignInForm/type";

export interface LogInControllerI {
    data: LogInFormDataI;
    setFormError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignInControllerI {
    data: SignInFormDataI;
    setIsActivationCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
    setFormError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}