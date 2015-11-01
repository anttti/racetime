import Immutable from "immutable";
import fetch from "isomorphic-fetch";

import * as types from "../constants/types";
import endpoints from "../constants/endpoints";

const requestTrack = () => {
    return { type: types.REQUEST_TRACK };
};

const receiveTrack = track => {
    return {
        type: types.RECEIVE_TRACK,
        payload: Immutable.fromJS({
            id: track.id,
            track: track
        })
    };
};

const shouldFetchTrack = id => {
    return true;
};

const fetchTrack = id => {
    return (dispatch, getState) => {
        dispatch(requestTrack());

        if (shouldFetchTrack(id, getState())) {
            return fetch(endpoints.track(id))
                .then(req => req.json())
                .then(result => dispatch(receiveTrack(result)))
                .catch(e => {
                    console.error(e);
                });
        } else {
            // TODO: Return from state
        }
    };
};

export default {
    fetchTrack
};
