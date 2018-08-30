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
            isAlterShow: false
        };
        this.itemRef = firebaseApp.database();
    }
    addDB = message => {
        this.itemRef.ref("messages").push({
            message
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
    onSendMessage = message => {
        this.addDB(message);
    };
    onToggleAlert = () => {
        this.setState({ isAlterShow: !this.state.isAlterShow });
    };
    componentDidMount() {
        this.listenForItems();
        this.itemRef.ref("users").push({
            name: "Hoang Vy Nguyen"
        });
    }
    render() {
        const { messages, isAlterShow } = this.state;
        return (
            <div className="col-md-10 border-left">
                <div className="scrollbar" id="style-1">
                    <div style={{ height: 590 }}>
                        <MessageList>
                            <Items messages={messages} />
                        </MessageList>
                    </div>
                </div>
                <AddMessageForm onSendMessage={this.onSendMessage} />

                <div
                    className="container alert alert-default alert-dismissible fade show"
                    role="alert"
                    style={{ display: isAlterShow ? "none" : "block" }}
                >
                    <span className="alert-inner--text">
                        <strong>Default!</strong> This is a default alert—check
                        it out!
                    </span>
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={this.onToggleAlert}
                    >
                        <span>×</span>
                    </button>
                </div>
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
            />
        );
    });

export default Message;
