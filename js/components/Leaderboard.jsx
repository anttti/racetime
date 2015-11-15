import "scss/leaderboard.scss";

import React from "react";

import EntryList from "components/EntryList";

const Leaderboard = ({ leaderboard }) => {
    if (!leaderboard) {
        return <div>Loading...</div>;
    }

    return (
        <section className="leaderboard">
            <header className="leaderboard-header">
                <h1 className="leaderboard-header__title">
                    {leaderboard.track} <span className="leaderboard-header__subtitle">
                        ({leaderboard.car} - {leaderboard.game})</span>
                </h1>
            </header>

            <EntryList entries={leaderboard.records} />
        </section>
    );
};

export default Leaderboard;
