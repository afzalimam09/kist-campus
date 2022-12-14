import { useState } from "react";
import "./login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BackToTop from "../../components/backtotop/BackToTop";

const Login = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Header />
            <section
                className="section login"
                style={{ backgroundImage: "url('/images/newsletter-bg.jpg')" }}
            >
                <div className="container">
                    <div className="form-wrapper">
                        <h3 className="h3 form-title">LOGIN</h3>
                        <p className="form-text">
                            Login if you are a returning customer!
                        </p>

                        <form className="form-content">
                            <div>
                                <label>
                                    User Type <span>*</span>
                                </label>
                                <div className="input-wrapper select-box">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <select
                                        className="input-field"
                                        name="type"
                                        id="type"
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="faculty">Faculty</option>
                                        <option value="student">Student</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label>
                                    Email Address <span>*</span>
                                </label>
                                <div className="input-wrapper">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <input
                                        type="email"
                                        name="email_address"
                                        aria-label="email"
                                        placeholder="Enter your mail address"
                                        required
                                        className="input-field"
                                    />
                                </div>
                            </div>

                            <div>
                                <label>
                                    Password <span>*</span>
                                </label>
                                <div className="input-wrapper">
                                    <ion-icon name="lock-open-outline"></ion-icon>
                                    <input
                                        type={!visible ? "password" : "text"}
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                        className="input-field"
                                    />
                                    <div
                                        className="view-password"
                                        onClick={() => setVisible(!visible)}
                                    >
                                        <ion-icon
                                            name={
                                                !visible
                                                    ? "eye-off-outline"
                                                    : "eye-outline"
                                            }
                                        ></ion-icon>
                                    </div>
                                </div>
                            </div>

                            <p className="forgot-password">
                                <a href="/">Forgot Password?</a>
                            </p>

                            <button
                                type="submit"
                                className="btn-primary login_btn"
                            >
                                Login
                            </button>
                        </form>

                        <div className="cta">
                            <p>
                                New student? <a href="/">Register Now</a>
                            </p>
                            <p>
                                New Faculty? <a href="/">Register Now</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Login;
