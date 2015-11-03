import Immutable from "immutable";
import fetch from "isomorphic-fetch";

import * as types from "../constants/types";
import endpoints from "../constants/endpoints";

const requestTrack = id => {
    return {
        type: types.REQUEST_TRACK,
        payload: Immutable.fromJS({
            id: id
        })
    };
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

const fetchTrack = id => {
    return (dispatch, getState) => {
        dispatch(requestTrack());
        return fetch(endpoints.track(id))
            .then(req => req.json())
            .then(result => dispatch(receiveTrack(result)))
            .catch(e => {
                console.error(e);
            });
    };
};

export default {
    fetchTrack
};
