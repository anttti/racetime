import "scss/new-entry-view.scss";

import React from "react";

import { connect } from "react-redux";

const NewEntryView = React.createClass({
    onClickContest(id) {
        this.props.history.pushState(null, `/${id}/add`);
    },
    render() {
        return (
            <div>
                <header className="contest-header">
                    <h1 className="contest-header__title">Leaderboard</h1>
                </header>
                <ul className="select-contest-list">
                    {this.props.contests.map(contest =>
                        <li className="select-contest-list__item"
                            key={contest.get("contestid")}
                            onClick={this.onClickContest.bind(null, contest.get("contestid"))}>
                            <div className="select-contest-list__item-track">
                                {contest.get("track")}
                            </div>
                            <div className="select-contest-list__item-car">
                                {contest.get("car")}, {contest.get("game")}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
});

const select = state => {
    return {
        contests: state.contests.get("list")
    };
};

export default connect(select)(NewEntryView);
