import React, { useState } from "react";
import "./register.css";

const Register = () => {
    const [visible, setVisible] = useState(false);

    return (
        <section
            className="section register"
            style={{ backgroundImage: "url('/images/newsletter-bg.jpg')" }}
        >
            <div className="container">
                <div className="form-wrapper">
                    <h3 className="h3 form-title">Student Registeration</h3>
                    <p className="form-text">
                        Create an account if you don't have!
                    </p>

                    <form className="form-content">
                        <div className="input_boxes">
                            <div>
                                <label>
                                    Full Name <span>*</span>
                                </label>
                                <div className="input-wrapper">
                                    <ion-icon name="person-circle-outline"></ion-icon>
                                    <input
                                        type="text"
                                        name="full_name"
                                        placeholder="Enter your full name"
                                        required
                                        className="input-field"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>
                                    Email <span>*</span>
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
                                    Reg No. <span>*</span>
                                </label>
                                <div className="input-wrapper">
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                    <input
                                        type="number"
                                        name="reg_no"
                                        aria-label="email"
                                        placeholder="Enter your reg no."
                                        required
                                        className="input-field"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>
                                    Mobile No. <span>*</span>
                                </label>
                                <div className="input-wrapper">
                                    <ion-icon name="phone-portrait-outline"></ion-icon>
                                    <input
                                        type="number"
                                        name="mobile_no"
                                        aria-label="email"
                                        placeholder="Enter your mobile no."
                                        required
                                        className="input-field"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>
                                    Gender <span>*</span>
                                </label>
                                <div className="input-wrapper select-box">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <select
                                        className="input-field"
                                        name="gender"
                                        id="gender"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Course <span>*</span>
                                </label>
                                <div className="input-wrapper select-box">
                                    <ion-icon name="book-outline"></ion-icon>
                                    <select
                                        className="input-field"
                                        name="course"
                                        id="course"
                                    >
                                        <option value="btech">B-Tech</option>
                                        <option value="imba">IMBA</option>
                                    </select>
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
                            <div>
                                <label>
                                    Confirm Password <span>*</span>
                                </label>
                                <div className="input-wrapper">
                                    <ion-icon name="lock-open-outline"></ion-icon>
                                    <input
                                        type={!visible ? "password" : "text"}
                                        name="confirm_password"
                                        placeholder="Confirm password"
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
                        </div>

                        <button type="submit" className="btn-primary login_btn">
                            Register
                        </button>
                    </form>

                    <div className="cta">
                        <p>Already have an account?</p>
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
