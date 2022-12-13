import { useState } from "react";
import "./header.css";

const Header = () => {
    // To controll navigation menu
    const [active, setActive] = useState(false);
    const toggleElm = () => setActive(!active);

    // Header Sticky
    const [scroll, setScroll] = useState(false);
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });

    return (
        <header className={`header ${scroll ? "active header-anim" : ""}`}>
            <div className="container">
                <h1>
                    <a href="/" className="logo">
                        KIST Campus
                    </a>
                </h1>

                <nav className={`navbar ${active ? "active" : ""}`}>
                    <div className="navbar-top">
                        <a href="/" className="logo">
                            KIST Campus
                        </a>
                        <button
                            onClick={toggleElm}
                            className="nav-close-btn"
                            aria-label="Close menu"
                        >
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a
                                href="#home"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                Home
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a
                                href="#about"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                About
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a
                                href="#courses"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                Notices
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a
                                href="#blog"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                Blog
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a
                                href="#contact"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <a href="/login" className="header-action-btn login-btn">
                        <ion-icon
                            name="person-outline"
                            aria-hidden="true"
                        ></ion-icon>

                        <span className="span">Login / Register</span>
                    </a>

                    <button
                        onClick={toggleElm}
                        className="header-action-btn nav-open-btn"
                        aria-label="Open menu"
                    >
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                </div>

                <div
                    className={`overlay ${active ? "active" : ""}`}
                    onClick={toggleElm}
                ></div>
            </div>
        </header>
    );
};

export default Header;
