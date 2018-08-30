import React from "react";

const UserItem = () => (
    <tr>
        <td>
            <div style={{ margin: -5, backgroundColor: "transparent" }}>
                <img
                    style={{ width: 35, height: 35, marginRight: 10 }}
                    className="img-fluid rounded-circle shadow float-left"
                    alt=""
                    src="https://firebasestorage.googleapis.com/v0/b/web-chat-realtime-4c3e2.appspot.com/o/userAvatars%2F87f143d912dddab35168f2880d2e21be.jpg?alt=media&token=dfad639e-9d1b-46c0-8ea0-b451bdf3d61f"
                />
                <div
                    className="d-flex align-items-center black-text"
                    style={{ height: 35 }}
                >
                    <small>Hoang Vy Nguyen</small>
                    <hr />
                    <div
                        style={{
                            width: 8,
                            height: 8,
                            backgroundColor: "#42B72A",
                            borderRadius: 8
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

export default UserItem;
