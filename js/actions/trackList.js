import Immutable from "immutable";
import fetch from "isomorphic-fetch";

import * as types from "../constants/types";
import endpoints from "../constants/endpoints";

const requestTrackList = () => {
    return { type: types.REQUEST_TRACKLIST };
};

const receiveTrackList = trackList => {
    return {
        type: types.RECEIVE_TRACKLIST,
        payload: {
            trackList: trackList
        }
    };
};

const fetchTrackList = () => {
    return (dispatch, getState) => {
        dispatch(requestTrackList());
        return fetch(endpoints.trackList())
            .then(req => req.json())
            .then(result => dispatch(receiveTrackList(result.tracks)))
            .catch(e => {
                console.error(e);
            });
    };
};

const nextTrack = () => {
    return { type: types.NEXT_TRACK };
};

export default {
    fetchTrackList,
    nextTrack
};
