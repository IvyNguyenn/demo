import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer has-cards">
                <div className="container">
                    <div className="row row-grid align-items-center my-md">
                        <div className="col-lg-6">
                            <h3 className="text-primary font-weight-light mb-2">
                                Thank you for supporting us!
                            </h3>
                            <h4 className="mb-0 font-weight-light">
                                Let's get in touch on any of these platforms.
                            </h4>
                        </div>
                        <div className="col-lg-6 text-lg-center btn-wrapper">
                            <a
                                target=""
                                href="https://twitter.com/creativetim"
                                className="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
                                data-toggle="tooltip"
                                data-original-title="Follow us"
                            >
                                <i className="fa fa-twitter" />
                            </a>
                            <a
                                target=""
                                href="https://www.facebook.com/creativetim"
                                className="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
                                data-toggle="tooltip"
                                data-original-title="Like us"
                            >
                                <i className="fa fa-facebook-square" />
                            </a>
                            <a
                                target=""
                                href="https://dribbble.com/creativetim"
                                className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
                                data-toggle="tooltip"
                                data-original-title="Follow us"
                            >
                                <i className="fa fa-dribbble" />
                            </a>
                            <a
                                target=""
                                href="https://github.com/creativetimofficial"
                                className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
                                data-toggle="tooltip"
                                data-original-title="Star on Github"
                            >
                                <i className="fa fa-github" />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="row align-items-center justify-content-md-between">
                        <div className="col-md-6">
                            <div className="copyright">
                                © 2018 Designed by &nbsp;
                                <a
                                    href="https://www.creative-tim.com"
                                    target=""
                                >
                                    Creative Tim
                                </a>
                                . Coded by &nbsp;
                                <a
                                    href="https://www.creative-tim.com"
                                    target=""
                                >
                                    Hoang Vy Nguyen
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="nav nav-footer justify-content-end">
                                <li className="nav-item">
                                    <a
                                        href="https://www.creative-tim.com"
                                        className="nav-link"
                                        target=""
                                    >
                                        Creative Tim
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.creative-tim.com/presentation"
                                        className="nav-link"
                                        target=""
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="http://blog.creative-tim.com"
                                        className="nav-link"
                                        target=""
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                                        className="nav-link"
                                        target=""
                                    >
                                        MIT License
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
