// local imports
import { UserI } from "../../types/auth/user"
import { UserActions } from "../types/user"

export const loginUserCreator = (payload: UserI) => ({
    type: UserActions.login,
    payload: payload
})
export const logoutUserCreator = () => ({
    type: UserActions.logout
})
export const loadingUserCreator = () => ({
    type: UserActions.loading
})