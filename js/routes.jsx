import React from "react";
import { Route, IndexRoute } from "react-router";
import { ReduxRouter } from "redux-router";

import MainApp from "containers/MainApp";
import CarouselView from "containers/CarouselView";
import SingleView from "containers/SingleView";
import NewEntryView from "containers/NewEntryView";
import InputView from "containers/InputView";
import LeaderboardsActions from "actions/leaderboards";

let carouselInterval;

export default store => {
    const onLoadApp = () => {
        store.dispatch(LeaderboardsActions.fetchLeaderboards());
    };

    const onStartCarousel = () => {
        carouselInterval = setInterval(() => store.dispatch(LeaderboardsActions.nextLeaderboard()), 5000);
    };

    const onLeaveCarousel = () => {
        clearInterval(carouselInterval);
    };

    return (
        <ReduxRouter>
            <Route path="/" component={MainApp} onEnter={onLoadApp}>
                <IndexRoute component={CarouselView} onEnter={onStartCarousel} onLeave={onLeaveCarousel} />
                <Route path="add" component={NewEntryView} />
                <Route path=":id" component={SingleView} />
                <Route path=":id/add" component={InputView} />
            </Route>
        </ReduxRouter>
    );
};
