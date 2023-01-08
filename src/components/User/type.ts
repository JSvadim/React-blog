// local imports
import { UserDatabaseSelector } from "../../types/controllers/user";
import { UserResponseI } from "../../types/server-responses/user";


export interface userProps {
    theme: "white" | "black";
    isFake: boolean;
    userProp?: UserResponseI;
    databaseSelector?: UserDatabaseSelector;
    dbSelectorValue?: number | string;
    className: string;
}