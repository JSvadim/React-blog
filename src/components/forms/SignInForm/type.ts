export interface SignInDataI {
    nickname: string;
    email: string;
    password: string;
    gender: string;
    otherGender?: string;
    activationCode?: string;
}