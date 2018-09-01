import React, { Component } from "react";
import UserList from "../../components/User/UserList";
import UserItem from "../../components/User/UserItem";
import { firebaseApp } from "../../constrains/firebaseConfig";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.itemRef = firebaseApp.database();
    }
    addDB = user => {
        this.itemRef.ref("users").push({
            user
        });
    };
    removeDB = user => {
        this.itemRef
            .ref("users")
            .child(user.id)
            .remove();
        this.listenForItems();
    };
    updateDB = user => {
        this.itemRef
            .ref("users")
            .child(user.id)
            .update({
                avatarURL: user.avatarURL,
                name: user.name
            });
        this.listenForItems();
    };
    listenForItems = () => {
        let userList = [];
        this.itemRef.ref("users").on("child_added", dataSnapshot => {
            userList.push({
                id: dataSnapshot.key,
                avatarURL: dataSnapshot.val().avatarURL,
                email: dataSnapshot.val().email,
                name: dataSnapshot.val().name
            });
            this.setState({ users: userList });
        });
        this.itemRef.ref("users").on("child_removed", dataSnapshot => {
            userList = userList.filter(i => i.id !== dataSnapshot.key);
            this.setState({ users: userList });
        });
        this.itemRef.ref("users").on("child_changed", dataSnapshot => {
            let index = userList.findIndex(i => i.id === dataSnapshot.key);
            userList[index].content = dataSnapshot.val().content;
            this.setState({ users: userList });
        });
    };
    componentDidMount() {
        this.listenForItems();
    }
    render() {
        const { users } = this.state;
        return (
            <div className="col-md-2">
                <UserList>
                    <UserItems
                        users={users}
                        onSelectMessager={this.props.onSelectMessager}
                    />
                </UserList>
            </div>
        );
    }
}

const UserItems = props =>
    props.users.map((user, index) => {
        return (
            <UserItem
                key={index}
                user={user}
                onSelectMessager={props.onSelectMessager}
            />
        );
    });

export default User;
