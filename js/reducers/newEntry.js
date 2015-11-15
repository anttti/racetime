import Immutable from "immutable";

import {
    UPDATE_ENTRY_LOCALLY,
    SAVING_ENTRY,
    ENTRY_SAVED,
    ERROR_SAVING_ENTRY
} from "constants/types";

const defaultState = Immutable.fromJS({
    entryData: {
        time: null,
        name: ""
    },
    isFetching: false,
    isError: false,
    isValid: false,
    errorMessage: null
});

export default function newEntry(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_ENTRY_LOCALLY:
            let time = parseInt(action.payload.get("time"), 10);
            let isValid = (time > 0 && action.payload.get("name").trim().length > 0);
            return state.merge({
                isValid: isValid,
                entryData: action.payload
            });
        case SAVING_ENTRY:
            return state.set("isFetching", true);
        case ENTRY_SAVED:
            return defaultState;
        case ERROR_SAVING_ENTRY:
            return state.merge({
                isFetching: true,
                errorMessage: action.payload
            });
        default:
            return state;
    }
}
