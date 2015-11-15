import Immutable from "immutable";

import {
    REQUEST_LEADERBOARDS,
    RECEIVE_LEADERBOARDS,
    NEXT_LEADERBOARD
} from "../constants/types";

const defaultState = Immutable.fromJS({
    list: [],
    currentIndex: 0
});

export default function leaderboards(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_LEADERBOARDS:
            return state;
        case RECEIVE_LEADERBOARDS:
            return state.merge({
                list: Immutable.fromJS(action.payload)
            });
        case NEXT_LEADERBOARD:
            const listSize = state.get("list").size;
            if (listSize === 0) {
                return state;
            }

            const currentIndex = state.get("currentIndex");
            const nextIndex = currentIndex < listSize - 1 ? currentIndex + 1 : 0;

            return state.set("currentIndex", nextIndex);
        default:
            return state;
    }
}
