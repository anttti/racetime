import Immutable from "immutable";

import {
    REQUEST_TRACK,
    RECEIVE_TRACK
} from "../constants/types";

const defaultState = Immutable.fromJS({});

export default function track(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_TRACK:
            return state;
        case RECEIVE_TRACK:
            const trackId = action.payload.get("id");
            const track = action.payload.get("track");
            return state.set(trackId, track);
        default:
            return state;
    }
}
