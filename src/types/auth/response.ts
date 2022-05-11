// local imports
import { UserI } from "./user";

export interface LogInSignInResponseI {
    user: UserI;
    token: string;
}