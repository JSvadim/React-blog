// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { UserResponseI } from "../types/server-responses/user";

export class UserService {

    static async getUsers(): Promise<AxiosResponse<UserResponseI[]>> {
        return $api.get<UserResponseI[]>("/user/all");
    }

}