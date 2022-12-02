// local imports
import { UserResponseI } from "../../types/server-responses/user";


export interface UserStateI {
    user: UserResponseI | null;
    loading: boolean;
}

export enum UserActions {
    loading = "USER_LOADING",
    login = "USER_LOGGED",
    logout = "USER_LOGOUT"
}

interface UserLoadingActionI {
    type: UserActions.loading;
}

interface UserLoginActionI {
    type: UserActions.login;
    payload: UserResponseI;
}

interface UserLogoutActionI {
    type: UserActions.logout;
}

export type UserAction = UserLoadingActionI | UserLoginActionI | UserLogoutActionI;