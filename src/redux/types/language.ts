// local imports
import { AppLanguageType } from "../../types/app-language";

export interface LanguageDefaultStateI {
    language: AppLanguageType;
}

export enum LanguageActions {
    change = "LANGUAGE_CHANGE"
}
export interface ChangeLanguageCreatorI {
    language: AppLanguageType;
}

interface LanguageChangeActionI {
    type: LanguageActions.change;
    payload: LanguageDefaultStateI;
}

export type LanguageActionType = LanguageChangeActionI;