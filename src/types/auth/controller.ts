// local imports
import { LogInDataI } from "./log-in-data";
import { SignInDataI } from "./sign-in-data";

export interface LoginControllerI {
    data: LogInDataI;
    setFormError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignInControllerI {
    data: SignInDataI;
    setIsActivationCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
    setFormError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}