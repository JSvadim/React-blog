//third-party
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//local imports
import { rootReducer } from "./reducers";

export const store = createStore( rootReducer, applyMiddleware(thunk))