import React from "react";
import { connect } from "react-redux";

import ContestsActions from "../actions/contests";
import Contest from "../components/Contest";

const CarouselView = React.createClass({
    render() {
        if (!this.props.currentContest) {
            return <h1>Loading...</h1>;
        }
        return <Contest contest={this.props.currentContest} />;
    }
});

const select = state => {
    const currentIndex = state.contests.get("currentIndex");
    const contests = state.contests.get("list");
    let currentContest;
    if (contests.size > 0) {
        currentContest = contests.get(currentIndex).toJS();
    }
    return {
        currentContest: currentContest
    };
};

export default connect(select)(CarouselView);
