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
    onChangeField(e) {
        const updatedEntry = this.props.entry.set(e.target.name, e.target.value);
        this.props.dispatch(NewEntryActions.updateEntryLocally(updatedEntry));
    },
    getError() {
        if (this.props.errorMessage) {
            return <p className="error">{this.props.errorMessage}</p>;
        }
    },
    render() {
        return (
            <div>
                <Link to={`/add`} className="contest-header__title">
                    <header className="contest-header">
                        ←
                    </header>
                </Link>
                {this.getError()}
                <Input time={this.props.entry.get("time")}
                    name={this.props.entry.get("name")}
                    onChangeTime={this.onChangeField}
                    onChangeName={this.onChangeField}
                    onSubmit={this.onSubmit}
                    isValid={this.props.isValid}/>
            </div>
        );
    }
});

const select = state => {
    return {
        entry: state.newEntry.get("entryData"),
        isValid: state.newEntry.get("isValid"),
        isFetching: state.newEntry.get("isFetching"),
        isError: state.newEntry.get("isError"),
        errorMessage: state.newEntry.get("errorMessage")
    };
};

export default connect(select)(InputView);
