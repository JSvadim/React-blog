// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { LogInSignInResponseI } from "../types/auth/response";
import { SignInDataI } from "../types/auth/sign-in-data";
import { LogInDataI } from "../types/auth/log-in-data";


export class AuthService {

    static async signIn(data: SignInDataI): Promise<LogInSignInResponseI | string> {
        const response = await $api.post<LogInSignInResponseI | string>("/auth/signin", data);
        if(response.data === "activation mail has been sent") {
            return "activation mail has been sent"
        }
        return response.data
    }

    static async logIn(data: LogInDataI): Promise<LogInSignInResponseI> {
        const response = await $api.post<LogInSignInResponseI>("/auth/login", data);
        return response.data
    }

    static async logOut(): Promise<void> {
        return $api.post("/auth/logout");
    }

    static async (): Promise<void> {
        return $api.post("/auth/refresh");
    }
    static async refresh(): Promise<LogInSignInResponseI> {
        const response = await $api.post<LogInSignInResponseI>("/auth/refresh");
        return response.data
    }

}