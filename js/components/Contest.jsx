import "scss/contest.scss";

import React from "react";

import EntryList from "components/EntryList";

const Contest = ({ contest }) => {
    if (!contest) {
        return <div>Loading...</div>;
    }

    return (
        <section className="contest">
            <header className="contest-header">
                <h1 className="contest-header__title">
                    {contest.track} <span className="contest-header__subtitle">({contest.car} - {contest.game})</span>
                </h1>
            </header>

            <EntryList entries={contest.records} />
        </section>
    );
};

export default Contest;
