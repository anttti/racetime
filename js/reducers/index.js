import { combineReducers } from "redux";
import { routerStateReducer } from "redux-router";

import leaderboards from "reducers/leaderboards";
import newEntry from "reducers/newEntry";
import players from "reducers/players";

const rootReducer = combineReducers({
    router: routerStateReducer,
    leaderboards,
    newEntry,
    players
});

export default rootReducer;
