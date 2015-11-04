import { combineReducers } from "redux";
import { routerStateReducer } from "redux-router";

import tracks from "./tracks";
import trackList from "./trackList";

const rootReducer = combineReducers({
    router: routerStateReducer,
    tracks,
    trackList
});

export default rootReducer;
