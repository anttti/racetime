import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

const MainApp = React.createClass({
    render() {
        if (!this.props.trackList) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <header className="header">
                    <img src="images/tammerforce.png" className="logo" />
                    <h1>Top 10</h1>
                </header>
                <ul>
                {this.props.trackList.map(track => 
                    <li key={track.get("id")}>
                        <Link to={"/track/" + track.get("id")}>
                            {track.get("name")} {track.get("carName")} {track.get("gameName")}
                        </Link>
                    </li>
                )}
                </ul>
            </div>
        );
    }
});

const select = state => {
    return {
        trackList: state.trackList.get("trackList")
    };
};

export default connect(select)(MainApp);
