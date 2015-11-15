import { combineReducers } from "redux";
import { routerStateReducer } from "redux-router";

import leaderboards from "reducers/leaderboards";
import newEntry from "reducers/newEntry";

const rootReducer = combineReducers({
    router: routerStateReducer,
    leaderboards,
    newEntry
});

export default rootReducer;
