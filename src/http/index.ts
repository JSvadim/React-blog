//third party
import axios from "axios";

//local imports 
import { localStorageAccessToken } from "../constants/local-storage";
import { serverURL } from "../constants/server-url";
import { loginUserCreator } from "../redux/action-creators/user";
import { store } from "../redux/store";
import { UserActions } from "../redux/types/user";
import { RefreshResponseI } from "../types/server-responses/auth";

export const $api = axios.create({
    baseURL: serverURL,
    withCredentials: true, // to tie cookies up to request
    params: {
        sameSite: "none",
        secure: true
    }
})


$api.interceptors.request.use(config => {
    // if condition is here because of typescript error :)
    if(config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(localStorageAccessToken)}`;
    }
    return config
})

$api.interceptors.response.use(
    response => {
        return response
    }, 
    async error => {
        const originalConfig = error.config;
        const noRetryHeader = 'x-no-retry'

        if(error.response.status === 401 && !error.config.headers[noRetryHeader]) {

            // attempt to refresh expired access token
            const response = await $api.post<RefreshResponseI>("/auth/refresh", {}, {
                headers: {
                    [noRetryHeader]: "true",
                },
            });
            const { user, token } = response.data;
            localStorage.setItem(localStorageAccessToken, token);
            store.dispatch(loginUserCreator(user));

            // re-sending first failed request if access token has been refreshed
            $api.defaults.headers.common["Authorization"] = `Bearer ${localStorageAccessToken}`;
            return $api(originalConfig);

            
        } else if(error.response.status === 401 && error.config.headers[noRetryHeader]) {
            // access token has not been refreshed 
            // this means refresh token expired and user needs to log in again
            localStorage.removeItem(localStorageAccessToken);
            return store.dispatch({type: UserActions.logout});
        }
        return Promise.reject(error);
    }
)