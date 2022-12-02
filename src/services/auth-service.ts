// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { LogInResponseI, RefreshResponseI, SignInResponseI } from "../types/server-responses/auth";
import { SignInFormDataI } from "../components/forms/SignInForm/type";
import { LogInFormDataI } from "../components/forms/LogInForm/type";


export class AuthService {

    static async signIn(data: SignInFormDataI): Promise<SignInResponseI | string> {
        const response = await $api.post<SignInResponseI | string>("/auth/signin", data);
        if(response.data === "activation mail has been sent") {
            return "activation mail has been sent"
        }
        return response.data
    }

    static async logIn(data: LogInFormDataI): Promise<LogInResponseI> {
        const response = await $api.post<LogInResponseI>("/auth/login", data);
        return response.data
    }

    static async logOut(): Promise<void> {
        return $api.post("/auth/logout");
    }

    static async (): Promise<void> {
        return $api.post("/auth/refresh");
    }
    static async refresh(): Promise<RefreshResponseI> {
        const response = await $api.post<RefreshResponseI>("/auth/refresh");
        return response.data
    }

}