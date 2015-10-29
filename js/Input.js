import "../scss/input.scss";

import React from "react";
import moment from "moment";

const isValidInput = (t, n) => {
    const time = moment(t, "mm:ss:SS");
    const name = n.trim();

    return (time.isValid() && name.length > 0);
}

const Input = props => {
    let timeStr = "00:00.00";
    if (props.time !== "") {
        const time = moment(props.time, "mm:ss:SS");
        if (!time.isValid()) {
            timeStr = "Invalid time!";
        } else {
            timeStr = time.format("mm:ss.SS");
        }
    }

    let previewStr = timeStr;
    if (props.name.length > 0) {
        previewStr += ": " + props.name;
    }

    return (
        <div>
            <p className="preview">{previewStr}</p>
            <form className="form" onSubmit={props.onSubmit}>
                <input className="input" type="number" placeholder="time" onChange={props.onChangeTime} value={props.time} />
                <input className="input" type="text" placeholder="name" onChange={props.onChangeName} value={props.name} />
                <input className="input__submit" type="submit" onClick={props.onSubmit} disabled={!isValidInput(props.time, props.name)} />
            </form>
        </div>
    );
};

export default Input;
