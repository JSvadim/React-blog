// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { UserI } from "../types/auth/user";

export class UserService {

    static async getUsers(): Promise<AxiosResponse<UserI[]>> {
        return $api.get<UserI[]>("/user/all");
    }

}