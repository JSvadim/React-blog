// third party
import { combineReducers } from "redux";
// local imports
import { languageReducer } from "./languageReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    language: languageReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>