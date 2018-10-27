import React, { Component } from "react";
import UserList from "../../components/User/UserList";
import UserItem from "../../components/User/UserItem";
import GroupItem from "../../components/User/GroupItem";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    name: "Nguyễn Văn A",
                    avatarURL:
                        "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/16995940_1632469073726940_7799549166084706647_n.jpg?_nc_cat=111&oh=6b8b8ed3df10babf07a3e9e01ff1d902&oe=5C2EBB19"
                },
                {
                    name: "Hoang Vy Nguyen",
                    avatarURL:
                        "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/16995940_1632469073726940_7799549166084706647_n.jpg?_nc_cat=111&oh=6b8b8ed3df10babf07a3e9e01ff1d902&oe=5C2EBB19"
                }
            ]
        };
    }

    render() {
        const { users, groups } = this.props;
        return (
            <div
                className="col-md-3"
                style={{ marginLeft: -15, marginRight: -16 }}
            >
                <UserList>
                    {users ? <UserItems users={users} /> : null}
                    {groups ? (
                        <GroupItems
                            groups={groups}
                            onSelectGroup={this.props.onSelectGroup}
                        />
                    ) : null}
                </UserList>
            </div>
        );
    }
}

const UserItems = props =>
    props.users.map((user, index) => {
        return <UserItem key={index} user={user} />;
    });
const GroupItems = props =>
    props.groups.map((group, index) => {
        return (
            // <tr key={index}>
            //     <td>
            //         <small>
            //             <b>Group:</b>
            //             {group}
            //         </small>
            //     </td>
            // </tr>
            <GroupItem
                key={index}
                group={group}
                onSelectGroup={props.onSelectGroup}
            />
        );
    });

export default Users;
