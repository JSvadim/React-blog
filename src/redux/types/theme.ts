export interface ThemeReducerStateI {
    theme: "light" | "dark";
}

export enum ThemeActions {
    darkTheme = "SWITCH_TO_DARK_THEME",
    lightTheme = "SWITCH_TO_LIGHT_THEME",
}

interface ToDarkThemeActionI {
    type: ThemeActions.darkTheme;
}

interface ToLightThemeActionI {
    type: ThemeActions.lightTheme;
}

export type ThemeAction = ToDarkThemeActionI | ToLightThemeActionI;