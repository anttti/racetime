import { combineReducers } from "redux";
import { routerStateReducer } from "redux-router";

import contests from "reducers/contests";
import newEntry from "reducers/newEntry";

const rootReducer = combineReducers({
    router: routerStateReducer,
    contests,
    newEntry
});

export default rootReducer;
