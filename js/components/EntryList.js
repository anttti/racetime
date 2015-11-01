import "../../scss/entry-list.scss";

import React from "react";
import Entry from "./Entry";

const EntryList = ({ entries }) => {
    if (entries.length === 0) {
        return <div className="loading">Loading...</div>;
    }
    return (
        <ol className="entry-list">
            {entries.map(entry =>
                <Entry key={entry.id}
                    name={entry.name}
                    time={entry.time} />
            )}
        </ol>
    );
};

export default EntryList;
