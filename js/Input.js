import "../scss/input.scss";

import React from "react";

const Input = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input className="input" type="text" placeholder="time" onChange={props.onChangeTime} value={props.time} />
            <input className="input" type="text" placeholder="name" onChange={props.onChangeName} value={props.name} />
            <input className="input__submit" type="submit" onClick={props.onSubmit} />
        </form>
    );
};

export default Input;
