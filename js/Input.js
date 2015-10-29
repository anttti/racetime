import "../scss/input.scss";

import React from "react";
import moment from "moment";

const isValidInput = (t, n) => {
    const time = moment(t, "mm:ss:SS");
    const name = n.trim();

    return (time.isValid() && name.length > 0);
}

const Input = props => {
    return (
        <form className="form" onSubmit={props.onSubmit}>
            <input className="input" type="text" placeholder="time" onChange={props.onChangeTime} value={props.time} />
            <input className="input" type="text" placeholder="name" onChange={props.onChangeName} value={props.name} />
            <input className="input__submit" type="submit" onClick={props.onSubmit} disabled={!isValidInput(props.time, props.name)} />
        </form>
    );
};

export default Input;
