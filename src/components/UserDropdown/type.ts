// local imports
import { UserResponseI } from "../../types/server-responses/user";


export type UserDropdownThemeType = "black" | "white";

export interface UserDropdownComponentI {
    theme: UserDropdownThemeType;
    user: UserResponseI;
    dropdownClassName: string;
    userClassName: string;
}