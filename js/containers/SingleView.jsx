import React from "react";
import { connect } from "react-redux";

import Contest from "components/Contest";

const SingleView = React.createClass({
    render() {
        const contest = this.props.contest;
        if (!contest) {
            return <div>404!</div>;
        }
        return <Contest contest={this.props.contest.toJS()} />;
    }
});

const select = state => {
    const id = parseInt(state.router.params.id, 10);
    const contest = state.contests.get("list").find(contest => contest.get("contestid") === id);
    return { contest };
};

export default connect(select)(SingleView);
