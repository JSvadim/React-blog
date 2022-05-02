import { userI } from "../../types/auth/user";

export interface userProps {
    theme: string;
    user: userI;
    inDropdown: boolean;
}