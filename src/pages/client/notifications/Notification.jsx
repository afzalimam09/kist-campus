import Footer from "../../../components/client/footer/Footer";
import Header from "../../../components/client/header/Header";
import BackToTop from "../../../components/shared/backtotop/BackToTop";
import "./notification.css";

const Notification = () => {
    return (
        <>
            <Header />
            <section
                className="section notification"
                style={{ backgroundImage: "url('/images/newsletter-bg.jpg')" }}
            >
                <div className="container">
                    <div className="wrapper">
                        <h2 className="h2 section-title">Notifications </h2>
                        <div className="single-notification">
                            <div className="top">
                                <p className="tag">Date: 12/04/2022</p>
                                <p className="tag dismis">Dismiss</p>
                            </div>
                            <hr />
                            <p className="content">
                                This is the notification regarding your
                                verification
                            </p>
                        </div>
                        <div className="single-notification">
                            <div className="top">
                                <p className="tag">Date: 12/04/2022</p>
                                <p className="tag dismis">Dismiss</p>
                            </div>
                            <hr />
                            <p className="content">
                                This is the notification regarding your
                                verification
                            </p>
                        </div>
                        <div className="single-notification">
                            <div className="top">
                                <p className="tag">Date: 12/04/2022</p>
                                <p className="tag dismis">Dismiss</p>
                            </div>
                            <hr />
                            <p className="content">
                                This is the notification regarding your
                                verification
                            </p>
                        </div>
                        <div className="single-notification">
                            <div className="top">
                                <p className="tag">Date: 12/04/2022</p>
                                <p className="tag dismis">Dismiss</p>
                            </div>
                            <hr />
                            <p className="content">
                                This is the notification regarding your
                                verification
                            </p>
                        </div>
                        <div className="single-notification">
                            <div className="top">
                                <p className="tag">Date: 12/04/2022</p>
                                <p className="tag dismis">Dismiss</p>
                            </div>
                            <hr />
                            <p className="content">
                                This is the notification regarding your
                                verification
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

export default Notification;
