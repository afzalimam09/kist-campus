import dateFormat from "dateformat";

const Notice = ({ notice }) => {
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

                <div className="card-actions">
                    <div className="date-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <span className="date">
                            {dateFormat(notice.createdAt, "mmm d, yyyy")}
                        </span>
                    </div>

                    <button className="save-btn">
                        <ion-icon name="save-outline"></ion-icon>
                    </button>
                </div>

                <div className="card-content">
                    <h3 className="h3">
                        <a href={notice.imageUrl} className="card-title">
                            {notice.title}
                        </a>
                    </h3>

                    <div className="tag-wrapper">
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
                    </div>

                    <div className="card-footer">
                        <button className="card-btn btn-primary">
                            <ion-icon name="eye-outline"></ion-icon>
                            <span>View</span>
                        </button>
                        <button className="card-btn btn-primary">
                            <ion-icon name="download-outline"></ion-icon>
                            <span>Download</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Notice;
