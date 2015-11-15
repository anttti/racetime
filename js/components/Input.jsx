import "scss/input.scss";

import React from "react";
import Time from "utils/time";

const Input = props => {
    const previewStr = `${Time.toString(Time.fromString(props.time))} ${props.name}`;

    return (
        <div className="input">
            <p className="entry entry--preview">{previewStr}</p>
            <form className="input__form" onSubmit={props.onSubmit}>
                <label className="input__label">Time:</label>
                <input name="time" className="input__field" type="number" min="1" max="9999999"
                    placeholder="time" onChange={props.onChangeTime} value={props.time} />
                <label className="input__label">Name:</label>
                <input name="name" className="input__field" type="text" placeholder="name"
                    onChange={props.onChangeName} value={props.name} />
                <button className="pure-button input__button" onClick={props.onSubmit} disabled={!props.isValid}>
                    Submit time
                </button>
            </form>
        </div>
    );
};

Input.propTypes = {
    time: React.PropTypes.string,
    name: React.PropTypes.string,
    onChangeTime: React.PropTypes.func,
    onChangeName: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    isValid: React.PropTypes.bool
};

export default Input;
