import React, { Component } from "react";

class MessageList extends Component {
    render() {
        return (
            <table className="table table-borderless">
                <tbody>{this.props.children}</tbody>
            </table>
        );
    }
}

export default MessageList;
