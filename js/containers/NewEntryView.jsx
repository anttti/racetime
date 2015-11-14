import "scss/new-entry-view.scss";

import React from "react";

import { connect } from "react-redux";

const InputView = React.createClass({
    render() {
        return (
            <ul className="select-contest-list">
                {this.props.contests.map(contest =>
                    <li className="select-contest-list__item" key={contest.get("contestid")}>
                        {contest.get("name")}
                    </li>
                )}
            </ul>
        );
    }
});

const select = state => {
    return {
        contests: state.contests.get("list")
    };
};

export default connect(select)(InputView);
