import "./profile.css";
import { Link } from "react-router-dom";
import Footer from "../../../components/client/footer/Footer";
import Header from "../../../components/client/header/Header";
import BackToTop from "../../../components/shared/backtotop/BackToTop";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/userRedux";

const Profile = () => {
    const user = useSelector((state) => state.user.currentUser);
    let admin;
    if (user) {
        admin = user.data.isAdmin;
    }

    const dispatch = useDispatch();
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
                    <div className="profile-wrapper">
                        <img src={user.data.profileImg} alt="profile" />
                        <div className="info">
                            <h2>Hello, {user.data.name}</h2>
                            <h4>
                                Welcome to KIST College Online Notice Board!
                            </h4>
                            <p>
                                This is your profile dashboard. You can manage
                                your account here!
                            </p>
                            {admin && (
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
                                    type="text"
                                    defaultValue={user.data.name}
                                />
                            </div>
                            <div className="input-box">
                                <label>Email</label>
                                <input
                                    type="email"
                                    defaultValue={user.data.email}
                                />
                            </div>
                            <div className="input-box">
                                <label>Branch</label>
                                <input
                                    type="text"
                                    defaultValue={user.data.branch}
                                />
                            </div>
                            <div className="input-box">
                                <label>Semester</label>
                                <input
                                    type="text"
                                    defaultValue={user.data.semester}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary">
                            Save Changes
                        </button>
                    </div>
                    <div className="change-profile">
                        <h2>Change Password</h2>
                        <div className="input-boxes">
                            <div className="input-box">
                                <label>Old Password</label>
                                <input type="password" />
                            </div>
                            <div className="input-box">
                                <label>New Password</label>
                                <input type="password" />
                            </div>
                        </div>
                        <button className="btn btn-primary">
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
