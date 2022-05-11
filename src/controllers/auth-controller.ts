// local imports 
import { AuthService } from "../services/auth-service";
import { loginUserCreator } from "../redux/action-creators/user";
import { logInDataI } from "../types/auth/log-in-data";
import { LogInSignInResponseI } from "../types/auth/response";
import { localStorageAccessToken } from "../constants/local-storage";
import { store } from "../redux/store";
import { signInDataI } from "../types/auth/sign-in-data";


export class AuthController {
    static async refresh () {
        try {
            const { user, token } = await AuthService.refresh();
           /*  console.log('returned user');
            console.log(user);
            console.log('returned token');
            console.log(token); */
            localStorage.setItem(localStorageAccessToken, token);
            store.dispatch(loginUserCreator(user));

          } catch(e) {
            console.log("authorization error:");
            console.log(e);
          }
    }
    static async login (data: logInDataI) {
        try { 
            const response: LogInSignInResponseI = await AuthService.logIn(data);
            const { user, token } = response;

            localStorage.setItem(localStorageAccessToken, token);
            store.dispatch(loginUserCreator(user));
            
            return null;
          } catch(e: any) {
            console.log(e);
            if(e.response.data.message) {
               return e.response.data.message 
            }
            return "login error"
          }
    }
    static async signin (data: signInDataI, setIsActivationCodeSent: React.Dispatch<React.SetStateAction<boolean>>) {
        try { 
            const response: LogInSignInResponseI | string = await AuthService.signIn(data);
            if(typeof response === 'string') {
                setIsActivationCodeSent(true);
                return null;
            }
            const { user, token } = response;

            localStorage.setItem(localStorageAccessToken, token);
            store.dispatch(loginUserCreator(user));
            
            return null;
          } catch(e: any) {
            console.log(e);
            if(e.response.data.message) {
               return e.response.data.message 
            }
            return "login error"
          }
    }
}