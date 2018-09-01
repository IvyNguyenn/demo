import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";
import Message from "./views/Message/Message";
import User from "./views/User/User";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: "LLFoZtONkupawYqMsUF",
                avatarURL:
                    "https://firebasestorage.googleapis.com/v0/b/web-chat-realtime-4c3e2.appspot.com/o/userAvatars%2FDoraemom35.jpg?alt=media&token=50059717-4076-41bc-9fb7-117879c597bb",
                email: "win123@gmail.com",
                name: "Win win"
            },
            friends: "LLGAjB4B8rLSUxbHdHl"
        };
    }
    onSelectMessager = user => {
        this.setState({ friends: user.id });
        console.log(user);
    };
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <div className="row">
                        <User onSelectMessager={this.onSelectMessager} />
                        <Message />
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default App;
