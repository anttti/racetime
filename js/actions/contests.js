import fetch from "isomorphic-fetch";

import {
    REQUEST_CONTESTS,
    RECEIVE_CONTESTS,
    ERROR_RECEIVING_CONTESTS,
    NEXT_CONTEST
} from "constants/types";
import endpoints from "constants/endpoints";

const fetchContests = () => {
    return dispatch => {
        dispatch({ type: REQUEST_CONTESTS });
        return fetch(endpoints.leaderboards())
            .then(req => req.json())
            .then(result => dispatch({ type: RECEIVE_CONTESTS, payload: result.leaderboards }))
            .catch(e => dispatch({ type: ERROR_RECEIVING_CONTESTS, error: true, payload: e.message }));
    };
};

const nextContest = () => {
    return { type: NEXT_CONTEST };
};

export default {
    fetchContests,
    nextContest
};
