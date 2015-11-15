import "scss/app.scss";

import React from "react";

const MainApp = React.createClass({
    render() {
        return (
            <div>
                {this.props.children}
                <footer className="footer">
                    <img src="/images/tammerforce.png" className="logo" />
                </footer>
            </div>
        );
    }
});

export default MainApp;
