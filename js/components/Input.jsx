import "scss/input.scss";

import React from "react";
import Time from "utils/time";

const Input = props => {
    const previewStr = Time.toString(Time.fromString(props.time));

    return (
        <div>
            <p className="preview">{previewStr}</p>
            <form className="form" onSubmit={props.onSubmit}>
                <input name="time" className="input" type="number" min="1" max="9999999"
                    placeholder="time" onChange={props.onChangeTime} value={props.time} />
                <input name="name" className="input" type="text" placeholder="name"
                    onChange={props.onChangeName} value={props.name} />
                <input className="input__submit" type="submit"
                    onClick={props.onSubmit} disabled={!props.isValid} />
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
