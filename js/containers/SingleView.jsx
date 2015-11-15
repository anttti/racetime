import React from "react";
import { connect } from "react-redux";

import Leaderboard from "components/Leaderboard";

const SingleView = React.createClass({
    render() {
        const leaderboard = this.props.leaderboard;
        if (!leaderboard) {
            return <div>404!</div>;
        }
        return <Leaderboard leaderboard={this.props.leaderboard.toJS()} />;
    }
});

const select = state => {
    const id = parseInt(state.router.params.id, 10);
    const leaderboard = state.leaderboards.get("list").find(leaderboard => leaderboard.get("id") === id);
    return { leaderboard };
};

export default connect(select)(SingleView);
