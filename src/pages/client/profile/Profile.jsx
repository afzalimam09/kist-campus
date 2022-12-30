import "./profile.css";
import { Link } from "react-router-dom";
import Footer from "../../../components/client/footer/Footer";
import Header from "../../../components/client/header/Header";
import BackToTop from "../../../components/shared/backtotop/BackToTop";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateSuccess } from "../../../redux/userRedux";
import { useEffect, useState } from "react";
import { userRequest } from "../../../requestMethods";
import { notyf } from "../../../alert";
import { updatePassword } from "../../../redux/apiCalls";

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const me = user.data;
    const [inputs, setInputs] = useState({});
    const [passwordData, setPasswordData] = useState({});

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await userRequest.get("/user/me");
                dispatch(updateSuccess(res.data.data));
            } catch (error) {
                console.log(error);
            }
        };
        getMe();
    }, [dispatch]);

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handlePasswordChange = (e) => {
        setPasswordData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handlePasswordUpdate = async () => {
        if (JSON.stringify(passwordData) === "{}") {
            notyf.error("Please change something before click!");
            return;
        }
        const res = await updatePassword(dispatch, passwordData);
        if (res.status === "success") {
            notyf.success("Successfully updated");
        } else if (res.status === "fail") {
            notyf.error(res.message);
        }
    };

    const handleUpdate = async () => {
        if (JSON.stringify(inputs) === "{}") {
            notyf.error("Please change something before click!");
            return;
        }
        try {
            const res = await userRequest.patch("/user/update-me", inputs);
            dispatch(updateSuccess(res.data.data));
            notyf.success("Successfully Updated!");
        } catch (error) {
            console.log(error);
            notyf.error("Something went wrong. Try Again!");
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <Header />
            <section
                className="section profile"
                style={{ backgroundImage: "url('/images/newsletter-bg.jpg')" }}
            >
                <div className="container">
                    {me.status !== "active" && (
                        <div className="warning-wrapper">
                            <p>
                                Your account is currently {me.status}. Please
                                contact your admin to verify.
                            </p>
                            <p>
                                Otherwise you will not get new notice
                                information on your email.
                            </p>
                        </div>
                    )}

                    <div className="profile-wrapper">
                        <img src={me.profileImg} alt="profile" />
                        <div className="info">
                            <h2>Hello, {me.name}</h2>
                            <h4>
                                Welcome to KIST College Online Notice Board!
                            </h4>
                            <p>
                                This is your profile dashboard. You can manage
                                your account here!
                            </p>
                            {me.isAdmin && (
                                <div className="admin-nav">
                                    <p>You are an admin: </p>
                                    <Link to="/admin/dashboard">
                                        Manage admin dashboard!
                                    </Link>
                                </div>
                            )}

                            <div className="admin-nav">
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                    <div className="change-profile">
                        <h2>Profile Information</h2>
                        <div className="input-boxes">
                            <div className="input-box">
                                <label>Name</label>
                                <input
                                    name="name"
                                    onChange={handleChange}
                                    type="text"
                                    defaultValue={me.name}
                                />
                            </div>
                            <div className="input-box">
                                <label>Email</label>
                                <input
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                    defaultValue={me.email}
                                />
                            </div>
                            <div className="input-box">
                                <label>Branch</label>
                                <input
                                    name="branch"
                                    onChange={handleChange}
                                    type="text"
                                    defaultValue={me.branch}
                                />
                            </div>
                            <div className="input-box">
                                <label>Semester</label>
                                <input
                                    name="semester"
                                    onChange={handleChange}
                                    type="text"
                                    defaultValue={me.semester}
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleUpdate}
                            className="btn btn-primary"
                        >
                            Save Changes
                        </button>
                    </div>
                    <div className="change-profile">
                        <h2>Change Password</h2>
                        <div className="input-boxes">
                            <div className="input-box">
                                <label>Current Password</label>
                                <input
                                    onChange={handlePasswordChange}
                                    name="passwordCurrent"
                                    type="password"
                                />
                            </div>
                            <div className="input-box">
                                <label>New Password</label>
                                <input
                                    onChange={handlePasswordChange}
                                    name="password"
                                    type="password"
                                />
                            </div>
                            <div className="input-box">
                                <label>New Password Again</label>
                                <input
                                    onChange={handlePasswordChange}
                                    name="passwordConfirm"
                                    type="password"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handlePasswordUpdate}
                            className="btn btn-primary"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Profile;
