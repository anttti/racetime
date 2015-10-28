import "../scss/entry-list.scss";

import React from "react";
import Entry from "./Entry";

const EntryList = ({ entries, onRemoveEntry }) => {
    if (entries.length === 0) {
        return <div className="loading">Loading...</div>;
    }
    return (
        <ol className="entry-list">
            {entries.map(entry =>
                <Entry key={entry.key}
                    name={entry.name}
                    time={entry.time}
                    onClick={onRemoveEntry.bind(null, entry.key)} />
            )}
        </ol>
    );
};

export default EntryList;
