// local imports
import { ChangeLanguageCreatorI, LanguageActions } from "../types/language";


export const changeLanguageCreator = (payload: ChangeLanguageCreatorI) => ({
    type: LanguageActions.change,
    payload
});