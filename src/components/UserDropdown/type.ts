// local imports
import { userI } from "../../types/auth/user";

interface sizingI {
    dropdown: string;
    button: string;
    opened: string;
}

export interface userDropdownI {
    theme: string;
    user: userI;
    sizing: sizingI;
}