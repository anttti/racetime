import React from "react";
import { Route, IndexRoute } from "react-router";
import { ReduxRouter } from "redux-router";

import MainApp from "./containers/MainApp";
import TrackListActions from "./actions/trackList";

export default store => {
    const onLoadApp = () => {
        store.dispatch(TrackListActions.fetchTrackList());
    };

    return (
        <ReduxRouter>
            <Route path="/" component={MainApp} onEnter={onLoadApp} />
        </ReduxRouter>
    );
};
