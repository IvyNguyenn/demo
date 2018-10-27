import React, { Component } from "react";

class Header extends Component {
    render() {
        const { user, currGroup } = this.props;
        return (
            <header className="header-global">
                <nav
                    id="navbar-main"
                    className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom"
                >
                    <div className="container">
                        <a
                            className="navbar-brand mr-lg-5"
                            href="../index.html"
                        >
                            <img src="../assets/img/brand/white.png" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbar_global"
                            aria-controls="navbar_global"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="navbar-collapse collapse"
                            id="navbar_global"
                        >
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="../index.html">
                                            <img src="../assets/img/brand/blue.png" />
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button
                                            type="button"
                                            className="navbar-toggler"
                                            data-toggle="collapse"
                                            data-target="#navbar_global"
                                            aria-controls="navbar_global"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                                <li>
                                    <div
                                        style={{
                                            backgroundColor: "transparent"
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: 40,
                                                height: 40,
                                                marginRight: 10,
                                                backgroundColor: "white"
                                            }}
                                            className="img-fluid rounded-circle shadow float-left"
                                            alt=""
                                            src={
                                                user.avatar
                                                    ? user.avatar
                                                    : "../assets/img/brand/default-avatar.png"
                                            }
                                        />
                                        <div
                                            className="d-flex align-items-center black-text"
                                            style={{ height: 40 }}
                                        >
                                            <small className="white-text">
                                                {user.username}
                                            </small>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link">
                                        <i className="ni ni-ui-04 d-lg-none" />
                                        <span className="nav-link-inner--text white-text">
                                            <b>{currGroup}</b>
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link"
                                        data-toggle="dropdown"
                                        role="button"
                                    >
                                        <i className="ni ni-collection d-lg-none" />
                                        <span className="nav-link-inner--text">
                                            Examples
                                        </span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a
                                            href="../examples/landing.html"
                                            className="dropdown-item"
                                        >
                                            Landing
                                        </a>
                                        <a
                                            href="../examples/profile.html"
                                            className="dropdown-item"
                                        >
                                            Profile
                                        </a>
                                        <a
                                            href="../examples/login.html"
                                            className="dropdown-item"
                                        >
                                            Login
                                        </a>
                                        <a
                                            href="../examples/register.html"
                                            className="dropdown-item"
                                        >
                                            Register
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-link-icon"
                                        href="https://www.facebook.com/creativetim"
                                        target="_blank"
                                        data-toggle="tooltip"
                                        title="Like us on Facebook"
                                    >
                                        <i className="fa fa-facebook-square" />
                                        <span className="nav-link-inner--text d-lg-none">
                                            Facebook
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-link-icon"
                                        href="https://www.instagram.com/creativetimofficial"
                                        target="_blank"
                                        data-toggle="tooltip"
                                        title="Follow us on Instagram"
                                    >
                                        <i className="fa fa-instagram" />
                                        <span className="nav-link-inner--text d-lg-none">
                                            Instagram
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-link-icon"
                                        href="https://twitter.com/creativetim"
                                        target="_blank"
                                        data-toggle="tooltip"
                                        title="Follow us on Twitter"
                                    >
                                        <i className="fa fa-twitter-square" />
                                        <span className="nav-link-inner--text d-lg-none">
                                            Twitter
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-link-icon"
                                        href="https://github.com/creativetimofficial/argon-design-system"
                                        target="_blank"
                                        data-toggle="tooltip"
                                        title="Star us on Github"
                                    >
                                        <i className="fa fa-github" />
                                        <span className="nav-link-inner--text d-lg-none">
                                            Github
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item d-none d-lg-block ml-lg-4">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-sm btn-icon"
                                        onClick={this.props.onLogout}
                                    >
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-sign-out mr-2" />
                                        </span>
                                        Sign out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
