// local imports
import { UserI } from "../../types/auth/user";

interface sizingI {
    dropdown: string;
    button: string;
    opened: string;
}

export interface userDropdownI {
    theme: string;
    user: UserI;
    className?: string
}