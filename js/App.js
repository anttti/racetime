import "../scss/app.scss";

import React from "react";
import Firebase from "firebase";
import ReactFireMixin from "reactfire";

import EntryList from "./EntryList";
import Input from "./Input";
import Sort from "./utils/sort";
import Time from "./utils/time";

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
        this.setProp("time", e.target.value.substr(0,7));
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
        
        if (!Time.isValid(this.state.newEntry.time)) {
            alert("Not a valid time!");
            return;
        }
        const newEntry = {
            name: this.state.newEntry.name,
            time: Time.fromString(this.state.newEntry.time)
        }

        this.firebaseRefs["entries"].push(newEntry);
        this.setState({ newEntry: this.getInitialNewEntryState() });
    },
    onRemoveEntry(e) {
        if (confirm("Remove entry?")) {
            this.firebaseRefs["entries"].child(e).remove();
        }
    },
    render() {
        const entries = Sort.desc(this.state.entries);

        return (
            <div>
                <header className="header">
                    <img src="images/tammerforce.png" className="logo" />
                    <h1>Top 10</h1>
                </header>
                <div className="block">
                    <EntryList entries={entries} onRemoveEntry={this.onRemoveEntry} />
                </div>
                <div className="block">
                    <Input
                        onChangeTime={this.onChangeTime}
                        onChangeName={this.onChangeName}
                        onSubmit={this.onSubmit}
                        time={this.state.newEntry.time}
                        name={this.state.newEntry.name} />
                </div>
            </div>
        );
    }
});

export default App;
