import "../../scss/app.scss";

import React from "react";

const MainApp = React.createClass({
    render() {
        return (
            <div>
                <header className="header">
                    <img src="images/tammerforce.png" className="logo" />
                    <h1>Top 10</h1>
                </header>
                {this.props.children}
            </div>
        );
    }
});

export default MainApp;
