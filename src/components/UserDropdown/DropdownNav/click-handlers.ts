// local imports
import { localStorageAccessToken } from "../../../constants/local-storage";
import { store } from "../../../redux/store";
import { UserActions } from "../../../redux/types/user";
import { AuthService } from "../../../services/auth-service";
import { DNLogoutClickI, DNSimpleClickI } from "./type";

export const simpleClick = (params: DNSimpleClickI) => {
    params.toggleDropdown(false);
}
export const logoutClick = (params: DNLogoutClickI) => {

    localStorage.removeItem(localStorageAccessToken);
    params.toggleIsClickable(false);
    params.toggleDropdown(false);

    setTimeout(() => {
        store.dispatch({type: UserActions.logout});
        AuthService.logOut();
    }, 600);
}