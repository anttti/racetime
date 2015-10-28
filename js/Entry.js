import "../scss/entry.scss";

import React from "react";

const Entry = ({ time, name, onClick }) => {
    return (
        <li className="entry" onClick={onClick}>
            <span className="entry__time">{time.format("mm:ss.SS")}:</span>
            <span className="entry__name">{name}</span>
        </li>
    );
};

export default Entry;
