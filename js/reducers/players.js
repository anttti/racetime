import Immutable from "immutable";

import {
    REQUEST_PLAYERS,
    RECEIVE_PLAYERS,
    ERROR_RECEIVING_PLAYERS
} from "../constants/types";

const defaultState = Immutable.fromJS({
    list: [],
    isFetching: false,
    isError: true,
    errorMessage: null
});

export default function players(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_PLAYERS:
            return state.set("isFetching", true);
        case RECEIVE_PLAYERS:
            return state.merge({
                isFetching: false,
                isError: false,
                list: Immutable.fromJS(action.payload)
            });
        case ERROR_RECEIVING_PLAYERS:
            return state.merge({
                isFetching: false,
                isError: true,
                errorMessage: action.payload
            });
        default:
            return state;
    }
}
