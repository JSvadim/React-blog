// local imports
import { UserService } from "../services/user-service";
import { userDatabaseSelector } from "../types/controllers/user";


export class UserController {
    static async getUser(userDatabaseSelector: userDatabaseSelector, value: string | number) {
        try {
            const user = await UserService.getUser(userDatabaseSelector, value);
            return user;
        } catch (e) {
            console.log("Error: can't get the user.");
        }
    }
}

