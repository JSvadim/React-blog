// local imports 
import { AuthService } from "../services/auth-service";
import { loginUserCreator, loadingUserCreator, logoutUserCreator } from "../redux/action-creators/user";
import { LogInSignInResponseI } from "../types/auth/response";
import { localStorageAccessToken } from "../constants/local-storage";
import { store } from "../redux/store";
import { LoginControllerI, SignInControllerI } from "../types/auth/controller";
import { UserActions } from "../redux/types/user";

export class AuthController {
    static async refresh () {
          try {
            store.dispatch({type: UserActions.loading})
            const { user, token } = await AuthService.refresh();
            
            localStorage.setItem(localStorageAccessToken, token);
            store.dispatch(loginUserCreator(user));

          } catch(e) {
            console.log("authorization error:");
            console.log(e);
          }
    }
    static async login (params: LoginControllerI) {
        try { 
            params.setFormError('');
            params.setLoading(true);

            const response: LogInSignInResponseI = await AuthService.logIn(params.data);
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

            const response: LogInSignInResponseI | string = await AuthService.signIn(params.data);
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