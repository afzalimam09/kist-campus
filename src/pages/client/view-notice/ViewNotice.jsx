import { useDispatch, useSelector } from "react-redux";
import dateFormat from "dateformat";
import Footer from "../../../components/client/footer/Footer";
import Header from "../../../components/client/header/Header";
import BackToTop from "../../../components/shared/backtotop/BackToTop";
import { add } from "../../../redux/bookmarkRedux";
import "./view-notice.css";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../requestMethods";
import { useLocation } from "react-router-dom";
import { notyf } from "../../../alert";

const ViewNotice = () => {
    const [notice, setNotice] = useState({});
    const dispatch = useDispatch();
    const bookmark = useSelector((state) => state.bookmark);
    const params = useLocation();
    const url = params.pathname;
    useEffect(() => {
        const getNotice = async () => {
            try {
                const res = await publicRequest.get(url);
                setNotice(res.data.data);
            } catch (error) {
                console.log(error);
                notyf.error("Something went wrong! Please refresh!");
            }
        };
        getNotice();
    }, [url]);
    const saveToBookmark = () => {
        if (bookmark) {
            const index = bookmark.findIndex(
                (items) => items._id === notice._id
            );
            if (index >= 0) {
                notyf.error("Already bookmarked!");
                return;
            }
        }
        dispatch(add(notice));
        notyf.success("Added to bookmark!");
    };

    return (
        <>
            <Header />
            <section
                className="section single-notice"
                style={{ backgroundImage: "url('/images/newsletter-bg.jpg')" }}
            >
                <div className="container">
                    <div className="notice-card">
                        <figure className="card-banner">
                            <img
                                src={notice.imageUrl}
                                width="370"
                                height="270"
                                loading="lazy"
                                alt={notice.title}
                                className="img-cover"
                            />
                        </figure>

                        <div className="card-content">
                            <div className="date-badge">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <span className="date">
                                    {dateFormat(
                                        notice.createdAt,
                                        "mmm d, yyyy"
                                    )}
                                </span>
                            </div>
                            <h3 className="h3">{notice.title}</h3>
                            <p className="desc">
                                {!notice.description
                                    ? "NA"
                                    : notice.description}
                            </p>
                            <p style={{ marginBottom: "12px" }}>
                                <strong>Ref Id: </strong>
                                {notice.refId}
                            </p>
                            <button
                                onClick={saveToBookmark}
                                className="card-btn btn-primary"
                            >
                                <ion-icon name="save-outline"></ion-icon>
                                <span>Save as Bookmark</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
};

export default ViewNotice;
