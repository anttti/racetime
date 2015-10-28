import "../scss/entry.scss";

import React from "react";

const Entry = ({ time, name }) => {
    return (
        <div className="entry">
            <div className="entry__time">{time}:</div>
            <div className="entry__name">{name}</div>
        </div>
    );
};

export default Entry;
