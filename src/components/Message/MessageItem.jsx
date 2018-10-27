import React, { Component } from "react";

class MessageItem extends Component {
    onDeleteMessage = () => {
        this.props.onDeleteMessage(this.props.message);
    };
    render() {
        const { user, message } = this.props;
        const isUser = user.email === message.email;
        return (
            <tr>
                <td>
                    {isUser ? (
                        <div className="balloon-message balloon-message-primary max-width-balloon-message">
                            <small>{message.message}</small>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start ">
                            <div className="d-flex align-items-end">
                                <img
                                    style={{
                                        width: 35,
                                        height: 35,
                                        marginRight: 10,
                                        backgroundColor: "pink"
                                    }}
                                    className="img-fluid rounded-circle"
                                    alt=""
                                    src="../assets/img/brand/default-avatar.png"
                                />
                            </div>
                            <div className="max-width-balloon-message">
                                <small>{message.username}</small>
                                <div className="balloon-message balloon-message-default">
                                    <small>{message.message}</small>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* {isUser ? (
                        <div className="card balloon-message balloon-message-primary">
                            <small>{message.message}</small>
                        </div>
                    ) : (
                        <div>
                            <small className="float-left">{message.user}</small>
                            <div className="card balloon-message balloon-message-default">
                                <small>{message.message}</small>
                            </div>
                        </div>
                    )} */}
                </td>
            </tr>
        );
    }
}

export default MessageItem;
