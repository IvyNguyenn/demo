import React, { Component } from "react";
import AddMessageForm from "../../components/Message/AddMessageForm";
import MessageList from "../../components/Message/MessageList";
import MessageItem from "../../components/Message/MessageItem";
import { firebaseApp } from "../../constrains/firebaseConfig";

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            selectedMessage: undefined,
            isAlertShow: true
        };
        this.itemRef = firebaseApp.database();
    }
    addDB = message => {
        this.itemRef.ref("messages").push({
            message,
            userId: ["LLFoZtONkupawYqMsUF", "LLGAjB4B8rLSUxbHdHl"]
        });
    };
    removeDB = message => {
        this.itemRef
            .ref("messages")
            .child(message.id)
            .remove();
        this.listenForItems();
    };
    updateDB = message => {
        this.itemRef
            .ref("messages")
            .child(message.id)
            .update({
                title: message.title,
                content: message.content,
                status: message.status
            });
        this.listenForItems();
    };
    listenForItems = () => {
        let messageList = [];
        this.itemRef.ref("messages").on("child_added", dataSnapshot => {
            messageList.push({
                id: dataSnapshot.key,
                content: dataSnapshot.val().message
            });
            this.setState({ messages: messageList });
        });
        this.itemRef.ref("messages").on("child_removed", dataSnapshot => {
            messageList = messageList.filter(i => i.id !== dataSnapshot.key);
            this.setState({ messages: messageList });
        });
        this.itemRef.ref("messages").on("child_changed", dataSnapshot => {
            let index = messageList.findIndex(i => i.id === dataSnapshot.key);
            messageList[index].content = dataSnapshot.val().content;
            this.setState({ messages: messageList });
        });
    };
    onSelecMessage = message => {
        this.setState({ selectedMessage: message });
    };
    onDeleteMessage = message => {
        //this.setState({ selectedMessage: message });
        this.removeDB(message);
    };
    onSendMessage = message => {
        this.addDB(message);
    };
    onToggleAlert = () => {
        this.setState({ isAlertShow: !this.state.isAlertShow });
    };
    componentDidMount() {
        this.listenForItems();
    }
    render() {
        const { messages, isAlertShow } = this.state;
        return (
            <div className="col-md-10 border-left">
                <div className="scrollbar" id="style-1">
                    <div style={{ height: 590 }}>
                        <MessageList>
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
                            <Items
                                messages={messages}
                                onDeleteMessage={this.onDeleteMessage}
                            />
                        </MessageList>
                    </div>
                </div>
                <AddMessageForm onSendMessage={this.onSendMessage} />
            </div>
        );
    }
}

const Items = props =>
    props.messages.map((message, index) => {
        return (
            <MessageItem
                key={index}
                isUser={message.isUser}
                message={message}
                onDeleteMessage={props.onDeleteMessage}
            />
        );
    });

export default Message;
