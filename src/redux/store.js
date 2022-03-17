import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {rootReducer,retReducer} from "./reducers";

export const rootStore = createStore(rootReducer, applyMiddleware(thunk));
export const retStore = createStore(retReducer, applyMiddleware(thunk));
