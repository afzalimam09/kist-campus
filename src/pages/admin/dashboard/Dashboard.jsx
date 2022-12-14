import "../main.css";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import { useState } from "react";
import BackToTop from "../../../components/backtotop/BackToTop";

const Dashboard = () => {
    const [navClicked, setNavClicked] = useState(false);

    return (
        <>
            <Sidebar navClicked={navClicked} />
            <section id="content">
                <nav>
                    <i
                        onClick={() => setNavClicked(!navClicked)}
                        className="bx bx-menu"
                    ></i>
                    <a href="/" className="profile">
                        <img src="img/people.png" alt="profile" />
                    </a>
                </nav>

                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                        </div>
                        <a href="/" className="btn-download">
                            <i className="bx bx-plus"></i>
                            <span className="text">Add New Notice</span>
                        </a>
                    </div>

                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-calendar-check"></i>
                            <span className="text">
                                <h3>1020</h3>
                                <p>Total Notices</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-group"></i>
                            <span className="text">
                                <h3>2834</h3>
                                <p>Total Faculties</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-group"></i>
                            <span className="text">
                                <h3>2543</h3>
                                <p>Total Students</p>
                            </span>
                        </li>
                    </ul>

                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Recent Notices</h3>
                                <button className="btn-view-all">
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
                                    <tr>
                                        <td>01-10-2021</td>
                                        <td>
                                            <p>This is dummy test notice</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01-10-2021</td>
                                        <td>
                                            <p>This is dummy test notice</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01-10-2021</td>
                                        <td>
                                            <p>This is dummy test notice</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01-10-2021</td>
                                        <td>
                                            <p>This is dummy test notice</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01-10-2021</td>
                                        <td>
                                            <p>This is dummy test notice</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>New Students</h3>
                                <button className="btn-view-all">
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
                                    <tr>
                                        <td>1901214030</td>
                                        <td>
                                            <p>Afzal Imam</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1901214030</td>
                                        <td>
                                            <p>Afzal Imam</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1901214030</td>
                                        <td>
                                            <p>Afzal Imam</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1901214030</td>
                                        <td>
                                            <p>Afzal Imam</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>New Faculties</h3>
                                <button className="btn-view-all">
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
                                    <tr>
                                        <td>1901214030</td>
                                        <td>
                                            <p>Afzal Imam</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1901214030</td>
                                        <td>
                                            <p>Afzal Imam</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1901214030</td>
                                        <td>
                                            <p>Afzal Imam</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1901214030</td>
                                        <td>
                                            <p>Afzal Imam</p>
                                        </td>
                                        <td>
                                            <span className="status">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <span className="status">
                                                <ion-icon name="create-outline"></ion-icon>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </section>
            <BackToTop />
        </>
    );
};

export default Dashboard;
