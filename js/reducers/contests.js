import Immutable from "immutable";
import _ from "lodash";

import {
    REQUEST_CONTESTS,
    RECEIVE_CONTESTS,
    NEXT_CONTEST
} from "../constants/types";

const defaultState = Immutable.fromJS({
    list: [],
    currentIndex: 0
});

export default function contests(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_CONTESTS:
            return state;
        case RECEIVE_CONTESTS:
            return state.merge({
                list: Immutable.fromJS(action.payload)
            });
        case NEXT_CONTEST:
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
