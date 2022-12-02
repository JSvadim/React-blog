import { UserI } from "../../types/auth/user";

export interface userProps {
    theme: "white" | "black";
    userNickname: string;
    sizingClass?: string;
}