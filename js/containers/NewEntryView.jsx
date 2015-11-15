import "scss/new-entry-view.scss";

import React from "react";

import { connect } from "react-redux";
import * as NewEntryActions from "actions/newEntry";

const NewEntryView = React.createClass({
    onClickLeaderboard(id) {
        this.props.dispatch(NewEntryActions.cancelEntry());
        this.props.history.pushState(null, `/${id}/add`);
    },
    render() {
        return (
            <div>
                <header className="leaderboard-header">
                    <h1 className="leaderboard-header__title">Leaderboard</h1>
                </header>
                <ul className="select-leaderboard-list">
                    {this.props.leaderboards.map(leaderboard =>
                        <li className="select-leaderboard-list__item"
                            key={leaderboard.get("id")}
                            onClick={this.onClickLeaderboard.bind(null, leaderboard.get("id"))}>
                            <div className="select-leaderboard-list__item-track">
                                {leaderboard.get("track")}
                            </div>
                            <div className="select-leaderboard-list__item-car">
                                {leaderboard.get("car")}, {leaderboard.get("game")}
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
        leaderboards: state.leaderboards.get("list")
    };
};

export default connect(select)(NewEntryView);
