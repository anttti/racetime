import "../scss/app.scss";

import React from "react";
import Firebase from "firebase";
import ReactFireMixin from "reactfire";

import EntryList from "./EntryList";
import Input from "./Input";

const App = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount() {
        this.bindAsArray(new Firebase("https://brilliant-torch-3113.firebaseio.com/entries/"), "entries");
    },
    getInitialState() {
        return {
            entries: [],
            newEntry: this.getInitialNewEntryState()
        };
    },
    getInitialNewEntryState() {
        return { name: "", time: "" };
    },
    onChangeTime(e) {
        this.setProp("time", e.target.value);
    },
    onChangeName(e) {
        this.setProp("name", e.target.value);
    },
    setProp(name, val) {
        const newEntry = Object.assign({}, this.state.newEntry, { [name]: val });
        const newState = Object.assign({}, this.state, { newEntry: newEntry });
        this.setState(newState);
    },
    onSubmit(e) {
        e.preventDefault();
        this.firebaseRefs["entries"].push(this.state.newEntry);
        this.setState({ newEntry: this.getInitialNewEntryState() });
    },
    render() {
        return (
            <div>
                <EntryList entries={this.state.entries} />
                <Input
                    onChangeTime={this.onChangeTime}
                    onChangeName={this.onChangeName}
                    onSubmit={this.onSubmit}
                    time={this.state.newEntry.time}
                    name={this.state.newEntry.name} />
            </div>
        );
    }
});

export default App;
