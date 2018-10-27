import React, { Component } from "react";

class AddMessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    onHandleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    };

    onResetForm = () => {
        this.setState({ message: "" });
    };

    validateInput() {
        let { message } = this.state;
        if (message) return true;
        return false;
    }

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            let { message } = this.state;
            this.props.onSendMessage(message);
            this.onResetForm();
        }
    };
    render() {
        const { message } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="form-group col-md-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Write a message here ..."
                            name="message"
                            value={message}
                            onChange={this.onHandleChange}
                        />{" "}
                    </div>
                    <div className="col-md-1">
                        <button
                            type="submit"
                            className="btn btn-lg btn-default"
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddMessageForm;
