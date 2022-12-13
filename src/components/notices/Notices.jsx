import { useEffect, useState } from "react";
import "./notices.css";
import axios from "axios";
import Notice from "../notice/Notice";

const Notices = () => {
    const pageSize = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [notices, setNotices] = useState([]);
    const [totalPage, setTotalPage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getNotices = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&apiKey=f8a7fd605fa34becbd6230ac201a161a&pageSize=${pageSize}&page=${currentPage}`
                );
                setLoading(false);
                setNotices([...notices, ...res.data.articles]);
                setTotalPage(Math.ceil(res.data.totalResults / pageSize));
            } catch (error) {
                console.log(error);
            }
        };
        getNotices();
    }, [currentPage]);

    const handleClick = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <section
            className="section notice"
            id="notice"
            style={{ backgroundImage: "url('/images/course-bg.jpg')" }}
        >
            <div className="container">
                <h2 className="h2 section-title">Recent Notices</h2>

                <ul className="grid-list">
                    {notices.map((notice) => (
                        <Notice notice={notice} key={notice.title} />
                    ))}
                </ul>

                <button
                    onClick={handleClick}
                    className={`btn btn-load-more ${
                        currentPage < totalPage ? "" : "disabled"
                    }`}
                >
                    {!loading ? (
                        <>
                            {currentPage < totalPage ? (
                                <>
                                    <span className="span">Load More</span>
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                </>
                            ) : (
                                <>
                                    <span className="span">Thats All !</span>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <span className="span">Loading ...</span>
                        </>
                    )}
                </button>
            </div>
        </section>
    );
};

export default Notices;
