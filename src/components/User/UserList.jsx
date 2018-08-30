import React, { Component } from "react";

class UserList extends Component {
    render() {
        return (
            <table className="table table-hover table-borderless">
                <tbody>{this.props.children}</tbody>
            </table>
        );
    }
}

export default UserList;
