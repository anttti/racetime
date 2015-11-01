import "../../scss/input.scss";

import React from "react";
import Time from "../utils/time";

const Input = props => {
    const previewStr = Time.toString(Time.fromString(props.time));

    return (
        <div>
            <p className="preview">{previewStr}</p>
            <form className="form" onSubmit={props.onSubmit}>
                <input className="input" type="number" min="1" max="9999999" placeholder="time" onChange={props.onChangeTime} value={props.time} />
                <input className="input" type="text" placeholder="name" onChange={props.onChangeName} value={props.name} />
                <input className="input__submit" type="submit" onClick={props.onSubmit} />
            </form>
        </div>
    );
};

export default Input;
