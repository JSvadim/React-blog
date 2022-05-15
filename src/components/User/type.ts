import { UserI } from "../../types/auth/user";

export interface userProps {
    theme: string;
    user: UserI;
    sizingClass?: string;
}