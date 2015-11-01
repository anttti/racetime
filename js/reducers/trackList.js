import Immutable from "immutable";

import {
    REQUEST_TRACKLIST,
    RECEIVE_TRACKLIST
} from "../constants/types";

const defaultState = Immutable.Map({
    trackList: Immutable.List()
});

export default function trackList(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_TRACKLIST:
            return state;
        case RECEIVE_TRACKLIST:
            return state.set("trackList", action.payload.get("trackList"));
        default:
            return state;
    }
}
