import React, { Component } from "react";
import UserList from "../../components/User/UserList";
import UserItem from "../../components/User/UserItem";

class User extends Component {
    render() {
        return (
            <div className="col-md-2">
                <UserList>
                    <UserItem />
                    <UserItem />
                </UserList>
            </div>
        );
    }
}

export default User;
