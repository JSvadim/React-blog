// local imports
import { UserI } from "../../types/auth/user";

export type UserDropdownThemeType = "black" | "white";

export interface userDropdownI {
    theme: UserDropdownThemeType;
    user: UserI;
    className?: string
}