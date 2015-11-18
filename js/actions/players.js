import fetch from "isomorphic-fetch";

import {
    REQUEST_PLAYERS,
    RECEIVE_PLAYERS,
    ERROR_RECEIVING_PLAYERS
} from "constants/types";
import endpoints from "constants/endpoints";

const fetchPlayers = () => {
    return dispatch => {
        dispatch({ type: REQUEST_PLAYERS });
        return fetch(endpoints.players())
            .then(req => req.json())
            .then(result => dispatch({ type: RECEIVE_PLAYERS, payload: result.players }))
            .catch(e => dispatch({ type: ERROR_RECEIVING_PLAYERS, error: true, payload: e.message }));
    };
};

export default {
    fetchPlayers
};
