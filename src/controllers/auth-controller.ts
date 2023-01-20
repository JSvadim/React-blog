// local imports 
import { AuthService } from "../services/auth-service";
import { loginUserCreator } from "../redux/action-creators/user";
import { LogInResponseI, SignInResponseI } from "../types/server-responses/auth";
import { localStorageAccessToken } from "../constants/local-storage";
import { store } from "../redux/store";
import { UserActions } from "../redux/types/user";
import { LogInControllerI, SignInControllerI } from "../types/controllers/auth";

export class AuthController {
    static async refresh () {
          try {
            const { user, token } = await AuthService.refresh();
            
            localStorage.setItem(localStorageAccessToken, token);
            store.dispatch(loginUserCreator(user));
            

          } catch(e) {
            console.log("authorization error:");
            console.log(e);
          }
    }
    static async login (params: LogInControllerI) {
        try { 
            params.setFormError('');
            params.setLoading(true);

            const response: LogInResponseI = await AuthService.logIn(params.data);
            const { user, token } = response;

            localStorage.setItem(localStorageAccessToken, token);
            store.dispatch(loginUserCreator(user));
            
            params.setLoading(false);
            return null;

          } catch(e: any) {

            console.log(e);
            params.setLoading(false);

            if(e.response.data.message) {
              params.setFormError(e.response.data.message);
              return 
            }
            return params.setFormError("login error");
          }
    }
    static async signin (params: SignInControllerI) {
        try { 
            params.setFormError('');
            params.setLoading(true);

            const response: SignInResponseI | string = await AuthService.signIn(params.data);
            if(typeof response === 'string') {
                params.setIsActivationCodeSent(true);
                return params.setLoading(false);
            }

            const { user, token } = response;
            localStorage.setItem(localStorageAccessToken, token);
            
            store.dispatch(loginUserCreator(user));
            return params.setLoading(false);

          } catch(e: any) {

            params.setLoading(false);
            console.log(e);

            if(e.response.data.message) {
                return params.setFormError(e.response.data.message );
            }
            return params.setFormError("login error");
          }
    }
    static async logout () {
      try {
        await AuthService.logOut();
        localStorage.removeItem(localStorageAccessToken);
        store.dispatch({type: UserActions.logout});
      } catch(e) {
        console.log("logout error:");
        console.log(e);
      }
    }
}