import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="/" className="logo">
                            KIST Campus
                        </a>

                        <p className="section-text">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </p>

                        <ul className="social-list">
                            <li>
                                <a href="/" className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" className="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Explore</p>
                        </li>

                        <li>
                            <a href="/" className="footer-link">
                                <ion-icon
                                    name="chevron-forward"
                                    aria-hidden="true"
                                ></ion-icon>

                                <span className="span">About Us</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="footer-link">
                                <ion-icon
                                    name="chevron-forward"
                                    aria-hidden="true"
                                ></ion-icon>

                                <span className="span">Recent News</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="footer-link">
                                <ion-icon
                                    name="chevron-forward"
                                    aria-hidden="true"
                                ></ion-icon>

                                <span className="span">FAQ</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="footer-link">
                                <ion-icon
                                    name="chevron-forward"
                                    aria-hidden="true"
                                ></ion-icon>

                                <span className="span">Privacy Policy</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Useful Links</p>
                        </li>

                        <li>
                            <a href="/" className="footer-link">
                                <ion-icon
                                    name="chevron-forward"
                                    aria-hidden="true"
                                ></ion-icon>

                                <span className="span">Contact Us</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="footer-link">
                                <ion-icon
                                    name="chevron-forward"
                                    aria-hidden="true"
                                ></ion-icon>

                                <span className="span">Admin Profile</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="footer-link">
                                <ion-icon
                                    name="chevron-forward"
                                    aria-hidden="true"
                                ></ion-icon>

                                <span className="span">Recent Notices</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="footer-link">
                                <ion-icon
                                    name="chevron-forward"
                                    aria-hidden="true"
                                ></ion-icon>

                                <span className="span">Terms & Conditions</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Contact Info</p>
                        </li>

                        <li className="footer-item">
                            <ion-icon
                                name="location-outline"
                                aria-hidden="true"
                            ></ion-icon>

                            <address className="footer-link">
                                Techno Park, Jatani, Bhubaneshwar, Odisha -
                                752050
                            </address>
                        </li>

                        <li className="footer-item">
                            <ion-icon name="call" aria-hidden="true"></ion-icon>

                            <a href="tel:+916206864101" className="footer-link">
                                +91 6206864101
                            </a>
                        </li>

                        <li className="footer-item">
                            <ion-icon
                                name="mail-outline"
                                aria-hidden="true"
                            ></ion-icon>

                            <a
                                href="mailto:contact@kistcampus.com"
                                className="footer-link"
                            >
                                contact@kistcampus.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        Copyright 2022 KIST Campus. All Rights Reserved by{" "}
                        <a href="/" className="copyright-link">
                            KIST Campus
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
