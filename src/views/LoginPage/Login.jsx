import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Nguyen Ngoc Hoang",
            email: "a@gmail.com",
            password: "123"
        };
    }
    onHandleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    };
    validateInput() {
        const { email, password } = this.state;
        if (email && password) return true;
        return false;
    }

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            let { username, email, password } = this.state;
            this.props.onLogin(username, email, password);
        }
    };
    render() {
        return (
            <div>
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
                                    <li className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-toggle="dropdown"
                                            role="button"
                                        >
                                            <i className="ni ni-ui-04 d-lg-none" />
                                            <span className="nav-link-inner--text">
                                                Components
                                            </span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <a
                                                    href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html"
                                                    className="media d-flex align-items-center"
                                                >
                                                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="ni ni-spaceship" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Getting started
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Learn how to use
                                                            Argon compiling
                                                            Scss, change brand
                                                            colors and more.
                                                        </p>
                                                    </div>
                                                </a>
                                                <a
                                                    href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html"
                                                    className="media d-flex align-items-center"
                                                >
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-palette" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Foundation
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Learn more about
                                                            colors, typography,
                                                            icons and the grid
                                                            system we used for
                                                            Argon.
                                                        </p>
                                                    </div>
                                                </a>
                                                <a
                                                    href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                                    className="media d-flex align-items-center"
                                                >
                                                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-ui-04" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h5 className="heading text-warning mb-md-1">
                                                            Components
                                                        </h5>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Browse our 50
                                                            beautiful
                                                            handcrafted
                                                            components offered
                                                            in the Free version.
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
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
                                        <a
                                            href="https://www.creative-tim.com/product/argon-design-system"
                                            target="_blank"
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
                <main>
                    <section className="section section-shaped section-lg">
                        <div className="shape shape-style-1 bg-gradient-default">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="container pt-lg-md">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card bg-secondary shadow border-0">
                                        <div className="card-header bg-white pb-5">
                                            <div className="text-muted text-center mb-3">
                                                <small>Sign in with</small>
                                            </div>
                                            <div className="btn-wrapper text-center">
                                                <a
                                                    href="#"
                                                    className="btn btn-neutral btn-icon"
                                                >
                                                    <span className="btn-inner--icon">
                                                        <img src="../assets/img/icons/common/github.svg" />
                                                    </span>
                                                    <span className="btn-inner--text">
                                                        Github
                                                    </span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn btn-neutral btn-icon"
                                                >
                                                    <span className="btn-inner--icon">
                                                        <img src="../assets/img/icons/common/google.svg" />
                                                    </span>
                                                    <span className="btn-inner--text">
                                                        Google
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body px-lg-5 py-lg-5">
                                            <div className="text-center text-muted mb-4">
                                                <small>
                                                    Or sign in with credentials
                                                </small>
                                            </div>
                                            <form
                                                onSubmit={this.onSubmit}
                                                role="form"
                                            >
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-lock-circle-open" />
                                                            </span>
                                                        </div>
                                                        <input
                                                            className="form-control"
                                                            placeholder="Password"
                                                            type="text"
                                                            name="username"
                                                            value={
                                                                this.state
                                                                    .username
                                                            }
                                                            onChange={
                                                                this
                                                                    .onHandleChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <div className="input-group input-group-alternative">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-email-83" />
                                                            </span>
                                                        </div>
                                                        <input
                                                            className="form-control"
                                                            placeholder="Email"
                                                            type="email"
                                                            name="email"
                                                            value={
                                                                this.state.email
                                                            }
                                                            onChange={
                                                                this
                                                                    .onHandleChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-lock-circle-open" />
                                                            </span>
                                                        </div>
                                                        <input
                                                            className="form-control"
                                                            placeholder="Password"
                                                            type="password"
                                                            name="password"
                                                            value={
                                                                this.state
                                                                    .password
                                                            }
                                                            onChange={
                                                                this
                                                                    .onHandleChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input
                                                        className="custom-control-input"
                                                        id=" customCheckLogin"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor=" customCheckLogin"
                                                    >
                                                        <span>Remember me</span>
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary my-4"
                                                    >
                                                        Sign in
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <a href="#" className="text-light">
                                                <small>Forgot password?</small>
                                            </a>
                                        </div>
                                        <div className="col-6 text-right">
                                            <a href="#" className="text-light">
                                                <small>
                                                    Create new account
                                                </small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer">
                    <div className="container">
                        <div className="row row-grid align-items-center mb-5">
                            <div className="col-lg-6">
                                <h3 className="text-primary font-weight-light mb-2">
                                    Thank you for supporting us!
                                </h3>
                                <h4 className="mb-0 font-weight-light">
                                    Let's get in touch on any of these
                                    platforms.
                                </h4>
                            </div>
                            <div className="col-lg-6 text-lg-center btn-wrapper">
                                <a
                                    target="_blank"
                                    href="https://twitter.com/creativetim"
                                    className="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
                                    data-toggle="tooltip"
                                    data-original-title="Follow us"
                                >
                                    <i className="fa fa-twitter" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/creativetim"
                                    className="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
                                    data-toggle="tooltip"
                                    data-original-title="Like us"
                                >
                                    <i className="fa fa-facebook-square" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://dribbble.com/creativetim"
                                    className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
                                    data-toggle="tooltip"
                                    data-original-title="Follow us"
                                >
                                    <i className="fa fa-dribbble" />
                                </a>
                                <a
                                    target="_blank"
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
                                    © 2018
                                    <a
                                        href="https://www.creative-tim.com"
                                        target="_blank"
                                    >
                                        Creative Tim
                                    </a>
                                    .
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ul className="nav nav-footer justify-content-end">
                                    <li className="nav-item">
                                        <a
                                            href="https://www.creative-tim.com"
                                            className="nav-link"
                                            target="_blank"
                                        >
                                            Creative Tim
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="https://www.creative-tim.com/presentation"
                                            className="nav-link"
                                            target="_blank"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="http://blog.creative-tim.com"
                                            className="nav-link"
                                            target="_blank"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                                            className="nav-link"
                                            target="_blank"
                                        >
                                            MIT License
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Core */}
                {/* Argon JS */}
            </div>
        );
    }
}

export default Login;
