import dateFormat from "dateformat";
import { add } from "../../../redux/bookmarkRedux";
import { useDispatch, useSelector } from "react-redux";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
    duration: 2000,
    position: {
        x: "right",
        y: "top",
    },
});

const Notice = ({ notice }) => {
    const dispatch = useDispatch();
    const bookmark = useSelector((state) => state.bookmark);
    const saveToBookmark = (notice) => {
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
        <li>
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
                    <h3 className="h3">
                        <a href={notice.imageUrl} className="card-title">
                            {notice.title}
                        </a>
                    </h3>

                    {/* <div className="tag-wrapper">
                        <span className="people-icon">
                            <ion-icon
                                name="people-outline"
                                aria-hidden="true"
                            ></ion-icon>
                        </span>
                        <div className="branch">
                            <p>B-Tech</p>
                            <p>IMBA</p>
                            <p>M-Tech</p>
                        </div>
                    </div> */}

                    <div className="date-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <span className="date">
                            {dateFormat(notice.createdAt, "mmm d, yyyy")}
                        </span>
                    </div>

                    <div className="card-footer">
                        <button className="card-btn btn-primary">
                            <ion-icon name="eye-outline"></ion-icon>
                            <span>View</span>
                        </button>
                        <button
                            onClick={() => saveToBookmark(notice)}
                            className="card-btn btn-primary"
                        >
                            <ion-icon name="save-outline"></ion-icon>
                            <span>Bookmark</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Notice;
