import "../../scss/contest.scss";

import React from "react";

import EntryList from "../components/EntryList";

const Contest = ({ contest }) => {
    if (!contest) {
        return <div>Loading...</div>;
    }

    return (
        <div className="block contest">
            <h1 className="contest__title">{contest.track}</h1>
            <h2 className="contest__subtitle">{contest.car} - {contest.game}</h2>
            <EntryList entries={contest.records} />
        </div>
    );
};

export default Contest;
