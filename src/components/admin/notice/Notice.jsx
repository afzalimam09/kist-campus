import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { userRequest } from "../../../requestMethods";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
    duration: 2000,
    position: {
        x: "right",
        y: "top",
    },
});

const Notice = ({ clickedComponent, setNoticeData }) => {
    const pageSize = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const [notices, setNotices] = useState([]);
    const [totalPage, setTotalPage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getNotices = async () => {
            try {
                setLoading(true);
                const res = await userRequest.get(
                    `/notice?page=${currentPage}&limit=${pageSize}`
                );
                setLoading(false);
                setNotices((prev) => [...prev, ...res.data.data]);
                setTotalPage(Math.ceil(res.data.totalResults / pageSize));
            } catch (error) {
                console.log(error);
            }
        };
        getNotices();
    }, [currentPage]);

    const handleDelete = async (id) => {
        console.log("deleting..: ", id);
        try {
            await userRequest.delete(`/notice/${id}`);
            const updatedNotices = notices.filter(
                (notice) => notice._id !== id
            );
            setNotices(updatedNotices);
            notyf.success("Notice deleted successfully!");
        } catch (error) {
            notyf.error("Something went wrong try again");
        }
    };

    const handleClick = () => {
        setCurrentPage(currentPage + 1);
    };

    const handleEdit = (notice) => {
        clickedComponent("UpdateNotice");
        setNoticeData(notice);
    };

    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>All Notices</h1>
                </div>
                <button
                    onClick={() => clickedComponent("AddNotice")}
                    className="btn-download"
                >
                    <i className="bx bx-plus"></i>
                    <span className="text">Add New Notice</span>
                </button>
            </div>

            <div className="table-data">
                <div className="order">
                    <table>
                        <thead>
                            <tr>
                                <th>Published Date</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((notice) => (
                                <tr key={notice._id}>
                                    <td>
                                        {dateFormat(
                                            notice.createdAt,
                                            "d mmm, yyyy"
                                        )}
                                    </td>
                                    <td>
                                        <p>{notice.title}</p>
                                    </td>
                                    <td>
                                        <span className="action-all">
                                            <ion-icon
                                                onClick={() =>
                                                    handleEdit(notice)
                                                }
                                                name="create-outline"
                                            ></ion-icon>
                                            <ion-icon name="eye-outline"></ion-icon>
                                            <ion-icon
                                                onClick={() =>
                                                    handleDelete(notice._id)
                                                }
                                                name="trash-outline"
                                            ></ion-icon>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="loadMore">
                <button
                    onClick={handleClick}
                    className={`btn-load-more ${
                        currentPage < totalPage ? "" : "disabled"
                    }`}
                >
                    {!loading ? (
                        <>
                            {currentPage < totalPage
                                ? "Load More"
                                : "Thats All !"}
                        </>
                    ) : (
                        "Loading ..."
                    )}
                </button>
            </div>
        </main>
    );
};

export default Notice;
