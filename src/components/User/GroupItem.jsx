import React, { Component } from "react";

class GroupItem extends Component {
    onSelectGroup = () => {
        this.props.onSelectGroup(this.props.group);
    };
    render() {
        const { group } = this.props;
        const imageSize = 40;
        return (
            <tr>
                <td>
                    <div style={{ margin: -10 }} onClick={this.onSelectGroup}>
                        <img
                            style={{
                                width: imageSize,
                                height: imageSize,
                                marginRight: 10
                            }}
                            className="img-fluid rounded-circle shadow float-left"
                            alt=""
                            src="../assets/img/brand/default-avatar.png"
                        />

                        <div
                            className="d-flex align-items-center black-text"
                            style={{ height: imageSize }}
                        >
                            <small>
                                <b>Group: </b>
                            </small>
                            <small>{group}</small>
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
                    </div>
                </td>
            </tr>
        );
    }
}

export default GroupItem;
