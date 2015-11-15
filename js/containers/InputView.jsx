import "scss/error.scss";

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import Input from "components/Input";
import * as NewEntryActions from "actions/newEntry";

const InputView = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(NewEntryActions.saveEntry(
            this.props.routeParams.id,
            this.props.entry
        ));
    },
    onChangeTime(e) {
        const updatedEntry = this.props.entry.set("time", e.target.value);
        this.props.dispatch(NewEntryActions.updateEntryLocally(updatedEntry));
    },
    onChangeName(name) {
        const updatedEntry = this.props.entry.set("name", name);
        this.props.dispatch(NewEntryActions.updateEntryLocally(updatedEntry));
    },
    getError() {
        if (this.props.errorMessage) {
            return <p className="error">{this.props.errorMessage}</p>;
        }
    },
    render() {
        if (!this.props.leaderboard) {
            return <div></div>;
        }
        return (
            <div>
                <Link to={`/add`} className="leaderboard-header__title">
                    <header className="leaderboard-header">
                        ← {this.props.leaderboard.get("track")}
                    </header>
                </Link>
                {this.getError()}
                <Input time={this.props.entry.get("time")}
                    name={this.props.entry.get("name")}
                    onChangeTime={this.onChangeTime}
                    onChangeName={this.onChangeName}
                    onSubmit={this.onSubmit}
                    isValid={this.props.isValid}/>
            </div>
        );
    }
});

const select = state => {
    const id = parseInt(state.router.params.id, 10);
    const leaderboard = state.leaderboards.get("list").find(leaderboard => leaderboard.get("id") === id);
    return {
        leaderboard,
        entry: state.newEntry.get("entryData"),
        isValid: state.newEntry.get("isValid"),
        isFetching: state.newEntry.get("isFetching"),
        isError: state.newEntry.get("isError"),
        errorMessage: state.newEntry.get("errorMessage")
    };
};

export default connect(select)(InputView);
