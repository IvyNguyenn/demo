import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Message from "./views/Message/Message";
import User from "./views/User/User";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="row">
                        <User />
                        <Message />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
