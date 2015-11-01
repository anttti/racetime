import React from "react";
import { connect } from "react-redux";

import TrackActions from "../actions/track";
import EntryList from "../components/EntryList";

const Track = React.createClass({
    componentWillMount() {
        this.fetchTrack();
    },
    fetchTrack() {
        this.props.dispatch(TrackActions.fetchTrack(this.props.params.id));
    },
    render() {
        const track = this.props.tracks.find(track => track.get("id") === parseInt(this.props.params.id, 10));
        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div className="block">
                <EntryList entries={track.get("times").toJS()} />
            </div>
        );
    }
});

const select = state => {
    return {
        tracks: state.track.get("tracks")
    };
};

export default connect(select)(Track);
