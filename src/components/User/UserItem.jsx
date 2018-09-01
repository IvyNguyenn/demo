import React, { Component } from "react";

class UserItem extends Component {
    onSelectMessager = () => {
        this.props.onSelectMessager(this.props.user);
    };
    render() {
        const { user } = this.props;
        return (
            <tr>
                <td>
                    <div
                        style={{ margin: -10, backgroundColor: "transparent" }}
                        onClick={this.onSelectMessager}
                    >
                        <img
                            style={{ width: 40, height: 40, marginRight: 10 }}
                            className="img-fluid rounded-circle shadow float-left"
                            alt=""
                            src={user.avatarURL}
                        />
                        <div
                            className="d-flex align-items-center black-text"
                            style={{ height: 40 }}
                        >
                            <small>{user.name}</small>
                            <hr />
                            <div
                                style={{
                                    width: 7,
                                    height: 7,
                                    backgroundColor: "#42B72A",
                                    borderRadius: "100%"
                                }}
                            />
                        </div>

                        {/* <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img
                        style={{ width: 50, height: 50 }}
                        className="img-fluid rounded-circle shadow"
                        src="../assets/img/theme/team-4-800x800.jpg"
                    />
                </div>
                <div className="col-md-9">
                    Username
                    <br />
                    <small>message</small>
                </div>
            </div>
        </div> */}
                    </div>
                </td>
            </tr>
        );
    }
}

export default UserItem;
