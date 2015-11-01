import { combineReducers } from "redux";
import { routerStateReducer } from "redux-router";

import track from "./track";
import trackList from "./trackList";

const rootReducer = combineReducers({
    router: routerStateReducer,
    track,
    trackList
});

export default rootReducer;
