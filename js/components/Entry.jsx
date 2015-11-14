import "scss/entry.scss";

import React from "react";
import Time from "utils/time";

const Entry = ({ time, name }) => {
    return (
        <li className="entry">
            <span className="entry__time">{Time.toString(time)}</span>
            <span className="entry__name">{name}</span>
        </li>
    );
};

export default Entry;
