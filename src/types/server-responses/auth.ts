// local imports
import { UserResponseI } from "./user";


export interface LogInResponseI {
    user: UserResponseI;
    token: string;
}

export interface SignInResponseI {
    user: UserResponseI;
    token: string;
}

export interface RefreshResponseI {
    user: UserResponseI;
    token: string;
}