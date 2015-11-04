import Immutable from "immutable";

import {
    REQUEST_TRACKLIST,
    RECEIVE_TRACKLIST,
    NEXT_TRACK
} from "../constants/types";

const defaultState = Immutable.fromJS({
    trackList: [],
    currentlyShowingTrackIndex: 0
});

export default function trackList(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_TRACKLIST:
            return state;
        case RECEIVE_TRACKLIST:
            return state.set("trackList", action.payload.trackList);
        case NEXT_TRACK:
            const trackListSize = state.get("trackList").size;
            if (trackListSize === 0) {
                return state;
            }

            const currentIndex = state.get("currentlyShowingTrackIndex");
            const nextIndex = currentIndex < trackListSize - 1 ? currentIndex + 1 : 0;

            return state.set("currentlyShowingTrackIndex", nextIndex);
        default:
            return state;
    }
}
