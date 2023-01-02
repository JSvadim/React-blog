// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { userDatabaseSelector } from "../types/controllers/user";
import { UserResponseI } from "../types/server-responses/user";

export class UserService {

    static async getUsers(): Promise<AxiosResponse<UserResponseI[]>> {
        return $api.get<UserResponseI[]>("/user/all");
    }

    static async getUser(databaseFieldName: userDatabaseSelector, value: number | string): Promise<AxiosResponse<UserResponseI>> {
        return $api.get<UserResponseI>("/user", { params: { selector: databaseFieldName, value } });
    }

}