import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notyf } from "../../../alert";
import { userRequest } from "../../../requestMethods";

const Index = ({ clickedComponent, setUserData }) => {
    const navigate = useNavigate();
    const [totalNotices, setTotalNotices] = useState(0);
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalFaculties, setTotalFaculties] = useState(0);

    const [notices, setNotices] = useState([]);
    const [students, setStudents] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res1 = await userRequest.get(`/notice?page=1&limit=5`);
                setTotalNotices(res1.data.totalResults);
                setNotices(res1.data.data);
                const res2 = await userRequest.get(
                    `/user?role=student&page=1&limit=5`
                );
                setTotalStudents(res2.data.totalResults);
                setStudents(res2.data.data);
                const res3 = await userRequest.get(
                    `/user?role=faculty&page=1&limit=5`
                );
                setTotalFaculties(res3.data.totalResults);
                setFaculties(res3.data.data);
            } catch (error) {
                notyf.error("Something went wrong!");
                console.log(error);
            }
            setLoading(false);
        };
        getData();
    }, []);

    const handleView = (student) => {
        clickedComponent("UserView");
        setUserData(student);
    };

    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
                </div>
                <button
                    onClick={() => clickedComponent("AddNotice")}
                    className="btn-download"
                >
                    <i className="bx bx-plus"></i>
                    <span className="text">Add New Notice</span>
                </button>
            </div>
            {!loading ? (
                <>
                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-calendar-check"></i>
                            <span className="text">
                                <h3>{totalNotices}</h3>
                                <p>Total Notices</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-group"></i>
                            <span className="text">
                                <h3>{totalFaculties}</h3>
                                <p>Total Faculties</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-group"></i>
                            <span className="text">
                                <h3>{totalStudents}</h3>
                                <p>Total Students</p>
                            </span>
                        </li>
                    </ul>

                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Recent Notices</h3>
                                <button
                                    onClick={() => clickedComponent("Notice")}
                                    className="btn-view-all"
                                >
                                    View All
                                </button>
                            </div>
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
                                                <button
                                                    onClick={() =>
                                                        navigate(
                                                            `/notice/${notice._id}`
                                                        )
                                                    }
                                                    className="action"
                                                >
                                                    <span>View</span>
                                                    <ion-icon name="eye-outline"></ion-icon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>New Students</h3>
                                <button
                                    onClick={() => clickedComponent("Student")}
                                    className="btn-view-all"
                                >
                                    View All
                                </button>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Reg No.</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student) => (
                                        <tr key={student._id}>
                                            <td>{student.regNo}</td>
                                            <td>
                                                <p>{student.name}</p>
                                            </td>
                                            <td>
                                                <span className="status">
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleView(student)
                                                    }
                                                    className="action"
                                                >
                                                    <span>View</span>
                                                    <ion-icon name="eye-outline"></ion-icon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>New Faculties</h3>
                                <button
                                    onClick={() => clickedComponent("Faculty")}
                                    className="btn-view-all"
                                >
                                    View All
                                </button>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Faculty Id</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faculties.map((faculty) => (
                                        <tr key={faculty._id}>
                                            <td>{faculty.regNo}</td>
                                            <td>
                                                <p>{faculty.name}</p>
                                            </td>
                                            <td>
                                                <span className="status">
                                                    {faculty.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleView(faculty)
                                                    }
                                                    className="action"
                                                >
                                                    <span>View</span>
                                                    <ion-icon name="eye-outline"></ion-icon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <div className="loadingio-spinner-reload-v7tjwrc1j6">
                        <div className="ldio-jwms0hkh9jg">
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Index;
