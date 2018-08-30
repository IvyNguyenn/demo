import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="header-global">
                <nav
                    id="navbar-main"
                    className="navbar navbar-main navbar-expand-lg navbar-dark headroom bg-default"
                >
                    <div className="position-relative">
                        <section className="section section-sm section-shaped">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </section>
                    </div>
                    <div className="container">
                        <a
                            className="navbar-brand mr-lg-5"
                            href="../index.html"
                        >
                            <img alt="" src="../assets/img/brand/white.png" />
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
                                            <img
                                                alt=""
                                                src="../assets/img/brand/blue.png"
                                            />
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
                                <li className="nav-item dropdown">
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="dropdown"
                                        role="button"
                                    >
                                        <i className="ni ni-ui-04 d-lg-none" />
                                        <span className="nav-link-inner--text">
                                            Components
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="dropdown"
                                        role="button"
                                    >
                                        <i className="ni ni-collection d-lg-none" />
                                        <span className="nav-link-inner--text">
                                            Examples
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-link-icon"
                                        href="https://www.facebook.com/creativetim"
                                        target=""
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
                                        target=""
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
                                        target=""
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
                                        target=""
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
                                    <a
                                        href="https://www.creative-tim.com/product/argon-design-system"
                                        target=""
                                        className="btn btn-neutral btn-icon"
                                    >
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-cloud-download mr-2" />
                                        </span>
                                        <span className="nav-link-inner--text">
                                            Download
                                        </span>
                                    </a>
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
