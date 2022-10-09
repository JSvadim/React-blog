// local imports
import { ThemeReducerStateI, ThemeAction, ThemeActions } from "../types/theme";

const defaultState: ThemeReducerStateI = {
    theme: "light"
}

export const themeReducer = (state = defaultState, action: ThemeAction):ThemeReducerStateI => {
    switch(action.type) {
        case ThemeActions.darkTheme:
            return {theme: "dark"}
        case ThemeActions.lightTheme:
            return {theme: "light"}

        default: 
            return state;
    }
}