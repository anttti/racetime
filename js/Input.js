import React from "react";

const Input = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" placeholder="time" onChange={props.onChangeTime} value={props.time} />
            <input type="text" placeholder="name" onChange={props.onChangeName} value={props.name} />
            <input type="submit" onClick={props.onSubmit} />
        </form>
    );
};

export default Input;
