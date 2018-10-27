import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";
import Messages from "./views/Messages/Messages";
import Users from "./views/Users/Users";
import io from "socket.io-client";
import Login from "./views/LoginPage/Login";
import { PassThrough } from "stream";

var e;
class App extends Component {
    constructor(props) {
        super(props);
        e = this;
        this.socket = io("http://localhost:3001", { jsonp: false });
        this.state = {
            isLogin: false,
            user: undefined,
            listUser: [],
            listGroup: [],
            currGroup: "",
            listMessage: []
        };
        this.socket.on("SERVER-LOGIN-FAILURE", function() {
            alert("Login Fail");
            e.setState({
                isLogin: false
            });
        });
        this.socket.on("SERVER-LOGIN-SUCCESS", function(user) {
            e.setState({
                isLogin: true,
                user
            });
        });
        this.socket.on("SERVER-SEND-LIST-USER", function(listUser) {
            e.setState({
                listUser
            });
        });
        this.socket.on("SERVER-SEND-LIST-GROUP", function(listGroup) {
            e.setState({ listGroup });
            console.log(listGroup);
        });
        this.socket.on("SERVER-SEND-CURR-GROUP", function(groupName) {
            e.setState({ currGroup: groupName });
            console.log("currgroup " + e.state.currGroup);
        });
        // this.socket.on("SERVER-SEND-MESSAGE", function(listMessage) {
        //     e.setState({ listMessage });
        //     console.log(listMessage);
        // });
        this.socket.on("SERVER-SEND-MESSAGE-GROUP", function(listMessage) {
            e.setState({ listMessage });
            console.log(listMessage);
        });
    }
    onSelectMessager = user => {
        this.setState({ friends: user.id });
    };
    onLogin = (username, email, password) => {
        this.socket.emit("CLIENT-LOGIN", { username, email, password });
    };
    onLogout = () => {
        this.socket.emit("CLIENT-LOGOUT");
        this.setState({
            isLogin: false,
            user: undefined,
            listUser: undefined
        });
    };
    onSendMessage = message => {
        this.socket.emit("CLIENT-SEND-MESSAGE", message);
    };
    onSendGroupName = groupName => {
        this.socket.emit("CLIENT-SEND-GROUP-NAME", groupName);
    };
    onSelectGroup = groupName => {
        this.socket.emit("CLIENT-SELECT-GROUP-NAME", groupName);
    };
    render() {
        const {
            isLogin,
            user,
            listUser,
            listMessage,
            listGroup,
            currGroup
        } = this.state;
        return (
            <Fragment>
                {isLogin ? (
                    <Fragment>
                        {/* <Header user={user} onLogout={this.onLogout} />
                        <main>
                            <section className="section section-shaped section-lg">
                                <div className="shape shape-style-1 bg-gradient-default">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                 <div className="row">
                                    <Users users={listUser} />
                                    <Messages />
                                </div> 
                                sssssssssssssssssssssssssssssssss
                            </section>
                        </main> */}
                        <Header
                            user={user}
                            onLogout={this.onLogout}
                            currGroup={currGroup}
                        />
                        <main>
                            <section className="section section-shaped section-lg">
                                <div className="shape shape-style-1 bg-gradient-default">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <div
                                    className="container-fluid"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    <div className="row">
                                        <Users
                                            users={listUser}
                                            groups={listGroup}
                                            onSelectGroup={this.onSelectGroup}
                                        />
                                        <Messages
                                            user={user}
                                            onSendMessage={this.onSendMessage}
                                            onSendGroupName={
                                                this.onSendGroupName
                                            }
                                            listMessage={listMessage}
                                        />
                                    </div>
                                </div>
                            </section>
                        </main>
                    </Fragment>
                ) : (
                    <Login onLogin={this.onLogin} />
                )}
            </Fragment>
        );
    }
}

export default App;
