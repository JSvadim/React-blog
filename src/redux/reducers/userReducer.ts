import { UserStateI, UserAction, UserActions } from "../types/user";

const defaultState: UserStateI = {
    user: null,
    loading: false
}

export const userReducer = (state = defaultState, action: UserAction): UserStateI => {
    switch (action.type) {

        case UserActions.loading: 
            return {user: null, loading: true}
        case UserActions.login: 
            return {user: action.payload, loading: false}
        case UserActions.loading: 
            return {user: null, loading: false}

        default: 
            return state;
    }
}