// local imports
import { UserResponseI } from "../../types/server-responses/user";
import { UserActions } from "../types/user"

export const loginUserCreator = (payload: UserResponseI) => ({
    type: UserActions.login,
    payload
});
export const logoutUserCreator = () => ({
    type: UserActions.logout,
});
export const loadingUserCreator = () => ({
    type: UserActions.loading,
});