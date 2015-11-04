import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";

import TrackListActions from "../actions/trackList";
import TrackActions from "../actions/track";
import Track from "../components/Track";

const MainApp = React.createClass({
    componentWillMount() {
        this.interval = setInterval(() => this.props.dispatch(TrackListActions.nextTrack()), 5000);
    },
    componentWillUnmount() {
        clearInterval(this.interval);
    },
    render() {
        if (!this.props.trackList) {
            return <div></div>;
        }

        const onRefresh = bindActionCreators(TrackActions.fetchTrack, this.props.dispatch);
        let track = this.props.trackList.get(this.props.currentIndex);
        if (track && this.props.tracks.get(track.get("id"))) {
            track = this.props.tracks.get(track.get("id"));
        }

        return (
            <div>
                <header className="header">
                    <img src="images/tammerforce.png" className="logo" />
                    <h1>Top 10</h1>
                </header>
                <Track track={track} onRefresh={onRefresh} />
            </div>
        );
    }
});

const select = state => {
    return {
        trackList: state.trackList.get("trackList"),
        currentIndex: state.trackList.get("currentlyShowingTrackIndex"),
        tracks: state.track
    };
};

export default connect(select)(MainApp);
