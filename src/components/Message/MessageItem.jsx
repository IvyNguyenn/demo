import React, { Component } from "react";

class MessageItem extends Component {
    render() {
        const { isUser, message } = this.props;
        return (
            <tr>
                <td>
                    <div
                        className={`card balloon-message black-text ${
                            isUser ? "float-right" : ""
                        }`}
                    >
                        <span>
                            <span
                                className="btn-control"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                ...
                            </span>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <span className="dropdown-item">Update</span>
                                <span className="dropdown-item">Delete</span>
                            </div>
                        </span>
                        <small className="float-left">{message.content}</small>
                    </div>
                </td>
            </tr>
        );
    }
}

export default MessageItem;
