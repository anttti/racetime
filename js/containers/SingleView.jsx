import React from "react";
import { connect } from "react-redux";

const SingleView = React.createClass({
    render() {
        return <div>SingleView</div>;
    }
});

const select = state => {
    return state;
};

export default connect(select)(SingleView);
