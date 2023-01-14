// local imports
import { LanguageActions, LanguageActionType, LanguageDefaultStateI } from "../types/language";


const defaultState: LanguageDefaultStateI = {
    language: "eng",
};


export const languageReducer = (state = defaultState, action: LanguageActionType) => {
    switch (action.type) {
        case LanguageActions.change: 
            return action.payload
    
        default:
            return state
    }
}