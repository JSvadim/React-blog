//third party
import axios from "axios";

//local imports 
import { serverURL } from "../constants/server-url";
import { localStorageAccessToken } from "../constants/local-storage";


export const $api = axios.create({
    baseURL: serverURL,
    withCredentials: true, // to tie cookies up to request
})

$api.interceptors.request.use(config => {
    // if condition is here because of typescript error :)
    if(config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(localStorageAccessToken)}`;
    }
    return config
})