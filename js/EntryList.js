import React from "react";
import Entry from "./Entry";

const EntryList = ({ entries }) => {
    return (
        <ul>
            {entries.map(entry =>
                <Entry key={entry[".key"]} name={entry.name} time={entry.time} />
            )}
        </ul>
    );
};

export default EntryList;
