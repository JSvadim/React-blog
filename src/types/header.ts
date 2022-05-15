import { UserI } from "./auth/user";

export interface NavI {
    isNavOpened: boolean;
}

export interface BurgerPropsI {
    isNavOpened: boolean;
    toggleMenu: Function;
}