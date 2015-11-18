import fetch from "isomorphic-fetch";

import endpoints from "constants/endpoints";
import {
    UPDATE_ENTRY_LOCALLY,
    SAVING_ENTRY,
    ENTRY_SAVED,
    ERROR_SAVING_ENTRY,
    CANCEL_ENTRY
} from "constants/types";

const updateEntryLocally = props => {
    return { type: UPDATE_ENTRY_LOCALLY, payload: props };
};

const saveEntry = (entryData) => {
    return dispatch => {
        dispatch({ type: SAVING_ENTRY });

        fetch(endpoints.entry(), {
                method: "post",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify(entryData)
            })
            .then(res => res.json())
            .then(() => dispatch({ type: ENTRY_SAVED }))
            .catch(e => dispatch({ type: ERROR_SAVING_ENTRY, payload: e.message, error: true }));
    };
};

const cancelEntry = () => {
    return { type: CANCEL_ENTRY };
};

export default {
    updateEntryLocally,
    saveEntry,
    cancelEntry
};
