const UserView = ({ userData }) => {
    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>
                        {userData.role === "student"
                            ? "Student Information"
                            : "Faculty Information"}
                    </h1>
                </div>
            </div>

            <div className="user-info">
                <div className="info-wrapper">
                    <img src={userData.profileImg} alt="profile" />
                    <div className="info">
                        <p>
                            Name: <span>{userData.name}</span>
                        </p>
                        <p>
                            Email: <span>{userData.email}</span>
                        </p>
                        <p>
                            Reg No: <span>{userData.regNo}</span>
                        </p>
                        <p>
                            Mobile No: <span>{userData.mobile}</span>
                        </p>
                        <p>
                            Gender: <span>{userData.gender}</span>
                        </p>
                        <p>
                            Course: <span>{userData.course}</span>
                        </p>
                        <p>
                            Branch:
                            <span>
                                {!userData.branch ? "NA" : userData.branch}
                            </span>
                        </p>
                        <p>
                            Semester:
                            <span>
                                {!userData.semseter ? "NA" : userData.semseter}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="status-wrapper">
                    <h1>Account Status</h1>
                    <p>
                        This user account is currently <b> {userData.status}</b>
                        .
                    </p>
                    <div className="input-box">
                        <label>Change Account Status</label>
                        <select>
                            <option>Pending</option>
                            <option>Active</option>
                            <option>Blocked</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <label>Message (Optional)</label>
                        <textarea></textarea>
                    </div>
                    <button className="btn-primary submit-btn">Submit</button>
                </div>
            </div>
        </main>
    );
};

export default UserView;
