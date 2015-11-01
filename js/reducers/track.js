import Immutable from "immutable";

import {
    REQUEST_TRACK,
    RECEIVE_TRACK
} from "../constants/types";

const defaultState = Immutable.Map({
    tracks: Immutable.List()
});

export default function track(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_TRACK:
            return state;
        case RECEIVE_TRACK:
            const trackId = action.payload.get("id");
            const trackToUpdateIndex = state
                .get("tracks")
                .findIndex(track => track.get("id") === trackId, 10);

            if (trackToUpdateIndex === -1) {
                return state.set("tracks", state.get("tracks").push(action.payload.get("track")));
            } else {
                return state.set("tracks", state.get("tracks").set(trackToUpdateIndex, action.payload.get("track")));
            }
        default:
            return state;
    }
}
