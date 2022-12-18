import { useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/userRedux";

const Header = () => {
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <header className={`header ${scroll ? "active header-anim" : ""}`}>
            <div className="container">
                <h1>
                    <Link to="/" className="logo">
                        KIST Campus
                    </Link>
                </h1>

                <nav className={`navbar ${active ? "active" : ""}`}>
                    <div className="navbar-top">
                        <Link to="/" className="logo">
                            KIST Campus
                        </Link>
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
                            <Link
                                to="/"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link
                                to="/about"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                About
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link
                                to="/notices"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                Notices
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link
                                to="/contact"
                                onClick={toggleElm}
                                className="navbar-link"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    {!user ? (
                        <Link
                            to="/login"
                            className="header-action-btn login-btn"
                        >
                            <ion-icon
                                name="person-outline"
                                aria-hidden="true"
                            ></ion-icon>

                            <span className="span">Login / Register</span>
                        </Link>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="header-action-btn login-btn"
                        >
                            <ion-icon name="log-out-outline"></ion-icon>

                            <span className="span">Logout</span>
                        </button>
                    )}

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
