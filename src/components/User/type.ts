// local imports
import { userDatabaseSelector } from "../../types/controllers/user";
import { UserResponseI } from "../../types/server-responses/user";


export interface userProps {
    theme: "white" | "black";
    isFake: boolean;
    userProp?: UserResponseI;
    databaseSelector?: userDatabaseSelector;
    dbSelectorValue?: number | string;
    className: string;
}