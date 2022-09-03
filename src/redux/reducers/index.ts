import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    blog: blogReducer
})

export type RootStateType = ReturnType<typeof rootReducer>