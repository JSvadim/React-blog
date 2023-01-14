//third-party
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//local imports
import { rootReducer } from "./reducers";
import { localStorageLanguage } from "../constants/local-storage";


const persistConfig = {
    key: localStorageLanguage,
    storage,
    whitelist: ["language"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore( persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);