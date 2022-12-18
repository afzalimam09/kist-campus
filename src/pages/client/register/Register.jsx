import React, { useState } from "react";
import Footer from "../../../components/client/footer/Footer";
import Header from "../../../components/client/header/Header";
import BackToTop from "../../../components/shared/backtotop/BackToTop";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { publicRequest } from "../../../requestMethods";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
    duration: 2000,
    position: {
        x: "right",
        y: "top",
    },
});

const Register = () => {
    const [inputs, setInputs] = useState({});
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (!inputs) {
            notyf.error("Please fill the form!");
            return;
        }
        setLoading(true);
        try {
            await publicRequest.post("/auth/signup", inputs);
            notyf.success("Registration Successfull!");
            navigate("/login");
        } catch (error) {
            notyf.error("Something went wrong!");
        }
        setLoading(false);
    };

    return (
        <>
            <Header />
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
                                            onChange={handleChange}
                                            type="text"
                                            name="name"
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
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
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
                                            onChange={handleChange}
                                            type="number"
                                            name="regNo"
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
                                            onChange={handleChange}
                                            type="number"
                                            name="mobile"
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
                                            onChange={handleChange}
                                            className="input-field"
                                            name="gender"
                                            id="gender"
                                        >
                                            <option>Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">
                                                Female
                                            </option>
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
                                            onChange={handleChange}
                                            className="input-field"
                                            name="course"
                                            id="course"
                                        >
                                            <option>Select</option>
                                            <option value="B-Tech">
                                                B-Tech
                                            </option>
                                            <option value="IMBA">IMBA</option>
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
                                            onChange={handleChange}
                                            type={
                                                !visible ? "password" : "text"
                                            }
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
                                            onChange={handleChange}
                                            type={
                                                !visible ? "password" : "text"
                                            }
                                            name="passwordConfirm"
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

                                <div>
                                    <label>
                                        User Type <span>*</span>
                                    </label>
                                    <div className="input-wrapper select-box">
                                        <ion-icon name="person-outline"></ion-icon>
                                        <select
                                            onChange={handleChange}
                                            className="input-field"
                                            name="role"
                                            id="role"
                                        >
                                            <option>Select</option>
                                            <option value="student">
                                                Student
                                            </option>
                                            <option value="faculty">
                                                Faculty
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label>
                                        Profile Image <span>*</span>
                                    </label>
                                    <div
                                        style={{ padding: "13px" }}
                                        className="input-wrapper"
                                    >
                                        <input
                                            type="file"
                                            name="file"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleClick}
                                type="submit"
                                className="btn-primary login_btn"
                            >
                                {!loading ? "Register" : "Submiting..."}
                            </button>
                        </form>

                        <div className="cta">
                            <p>Already have an account?</p>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Register;
