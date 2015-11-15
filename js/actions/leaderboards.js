import fetch from "isomorphic-fetch";

import {
    REQUEST_LEADERBOARDS,
    RECEIVE_LEADERBOARDS,
    ERROR_RECEIVING_LEADERBOARDS,
    NEXT_LEADERBOARD
} from "constants/types";
import endpoints from "constants/endpoints";

const fetchLeaderboards = () => {
    return dispatch => {
        dispatch({ type: REQUEST_LEADERBOARDS });
        return fetch(endpoints.leaderboards())
            .then(req => req.json())
            .then(result => dispatch({ type: RECEIVE_LEADERBOARDS, payload: result.leaderboards }))
            .catch(e => dispatch({ type: ERROR_RECEIVING_LEADERBOARDS, error: true, payload: e.message }));
    };
};

const nextLeaderboard = () => {
    return { type: NEXT_LEADERBOARD };
};

export default {
    fetchLeaderboards,
    nextLeaderboard
};
