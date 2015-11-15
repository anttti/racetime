import React from "react";
import { connect } from "react-redux";

import Leaderboard from "components/Leaderboard";

const CarouselView = React.createClass({
    render() {
        if (!this.props.currentLeaderboard) {
            return <h1>Loading...</h1>;
        }
        return <Leaderboard leaderboard={this.props.currentLeaderboard} />;
    }
});

const select = state => {
    const currentIndex = state.leaderboards.get("currentIndex");
    const leaderboards = state.leaderboards.get("list");
    let currentLeaderboard;
    if (leaderboards.size > 0) {
        currentLeaderboard = leaderboards.get(currentIndex).toJS();
    }
    return {
        currentLeaderboard: currentLeaderboard
    };
};

export default connect(select)(CarouselView);
