import "../../scss/entry.scss";

import React from "react";

const Entry = ({ time, name }) => {
    return (
        <li className="entry">
            <span className="entry__time">{time}</span>
            <span className="entry__name">{name}</span>
        </li>
    );
};

export default Entry;
