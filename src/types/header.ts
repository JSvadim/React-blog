export interface NavI {
    isNavOpened: boolean;
    toggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BurgerPropsI {
    isNavOpened: boolean;
    toggleMenu: Function;
}