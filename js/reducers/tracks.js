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
            return state.set(action.payload.id, Immutable.fromJS(action.payload.track));
        default:
            return state;
    }
}
