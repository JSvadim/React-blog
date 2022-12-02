export interface SignInFormDataI {
    nickname: string;
    email: string;
    password: string;
    gender: string;
    otherGender?: string;
    activationCode?: string;
}