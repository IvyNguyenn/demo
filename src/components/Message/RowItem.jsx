import React from "react";

const RowItem = () => (
    <div style={{ margin: 5, backgroundColor: "transparent" }}>
        <img
            style={{ width: 40, height: 40, marginRight: 10 }}
            className="img-fluid rounded-circle shadow float-left"
            src="../assets/img/theme/team-4-800x800.jpg"
        />
        <div className="d-flex align-items-center" style={{ height: 40 }}>
            <small>Nguyễn Ngọc Hoàng Vy</small>
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
);

export default RowItem;
