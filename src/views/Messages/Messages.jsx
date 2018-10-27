import React, { Component, Fragment } from "react";
import AddMessageForm from "../../components/Message/AddMessageForm";
import MessageList from "../../components/Message/MessageList";
import MessageItem from "../../components/Message/MessageItem";

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            selectedMessage: undefined,
            isAlertShow: true,
            groupName: ""
        };
    }

    onSelecMessage = message => {
        this.setState({ selectedMessage: message });
    };
    onDeleteMessage = message => {
        //this.setState({ selectedMessage: message });
    };
    onSendMessage = message => {
        this.props.onSendMessage(message);
    };
    onToggleAlert = () => {
        this.setState({ isAlertShow: !this.state.isAlertShow });
    };
    onHandleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    };
    onResetForm = () => {
        this.setState({ groupName: "" });
    };

    validateInput() {
        let { groupName } = this.state;
        if (groupName) return true;
        return false;
    }

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            let { groupName } = this.state;
            this.props.onSendGroupName(groupName);
            this.onResetForm();
        }
    };
    componentDidMount() {}
    render() {
        const { messages, isAlertShow, groupName } = this.state;
        const { listMessage, user } = this.props;
        return (
            <Fragment>
                <div className="col-md-6 border-left">
                    <div className="scrollbar" id="style-1">
                        <div style={{ height: 530 }}>
                            <MessageList>
                                <MessageItems
                                    user={user}
                                    messages={listMessage}
                                    onDeleteMessage={this.onDeleteMessage}
                                />
                            </MessageList>
                        </div>
                    </div>
                    <AddMessageForm onSendMessage={this.onSendMessage} />
                </div>
                <div className="col-md-3 border-left" style={{ marginTop: 10 }}>
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="form-group col-md-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Group name"
                                    name="groupName"
                                    value={groupName}
                                    onChange={this.onHandleChange}
                                />{" "}
                            </div>
                            <div className="col-md-1">
                                <button
                                    type="submit"
                                    className="btn btn-default"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className="col-md-2 border-left">
                    <div
                        className="container alert alert-default alert-dismissible fade show"
                        role="alert"
                        style={{
                            display: isAlertShow ? "block" : "none"
                        }}
                    >
                        <span className="alert-inner--icon">
                            <i className="ni ni-like-2" />
                        </span>
                        <span className="alert-inner--text">
                            <strong>Default!</strong> This is a default
                            alert—check it out!
                        </span>
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={this.onToggleAlert}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                </div> */}
            </Fragment>
        );
    }
}

const MessageItems = props =>
    props.messages.map((message, index) => {
        return (
            <MessageItem
                key={index}
                user={props.user}
                message={message}
                onDeleteMessage={props.onDeleteMessage}
            />
        );
    });

export default Messages;
