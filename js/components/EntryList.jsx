import "scss/entry-list.scss";

import React from "react";
import Entry from "./Entry";

const EntryList = ({ entries }) => {
    if (entries.length === 0) {
        return <div className="loading">Loading...</div>;
    }
    return (
        <div className="entry-list">
            <h1 className="entry-list__title">Lap Times</h1>
            <ol className="entry-list__entries">
                {entries.map((entry, index) =>
                    <Entry key={index}
                        name={entry.name}
                        time={entry.time} />
                )}
            </ol>
        </div>
    );
};

export default EntryList;
