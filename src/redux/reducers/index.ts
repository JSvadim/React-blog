import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    blog: blogReducer,
    theme: themeReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>