import { BlogStateI, BlogAction, BlogActions } from "../types/blog";

const defaultState: BlogStateI = {
    blog: null
}

export const blogReducer = (state = defaultState, action: BlogAction): BlogStateI => {
    switch (action.type) {

        case BlogActions.add: 
            return {blog: action.payload}
        case BlogActions.remove: 
            return {blog: null}

        default: 
            return state;
    }
}