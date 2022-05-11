import { UserI } from "../../types/auth/user";


export interface UserStateI {
    user: UserI | null;
    loading: boolean;
}

export enum UserActions {
    loading = "USER_LOADING",
    login = "USER_LOGGED",
    logout = "USER_LOGOUT"
}

interface UserLoadingActionI {
    type: UserActions.loading
}

interface UserLoginActionI {
    type: UserActions.login,
    payload: UserI
}

interface UserLogoutActionI {
    type: UserActions.logout
}

export type UserAction = UserLoadingActionI | UserLoginActionI | UserLogoutActionI;