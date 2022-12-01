import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>