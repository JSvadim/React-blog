// local imports
import { UserDatabaseSelector } from "../controllers/user";
import { UserResponseI } from "../server-responses/user";


export interface UseGetUserHookI {
    initialValue: UserResponseI | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserResponseI | null>>;
    databaseSelector?: UserDatabaseSelector,
    dbSelectorValue?: number | string
}