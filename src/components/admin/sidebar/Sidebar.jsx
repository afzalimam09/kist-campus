const Sidebar = ({ navClicked }) => {
    const handleClick = (event) => {
        event.currentTarget.classList.toggle("active");
    };
    return (
        <section id="sidebar" className={navClicked ? "hide" : ""}>
            <a href="/" className="brand">
                <i className="bx bxs-graduation"></i>
                <span className="text">KIST</span>
            </a>
            <ul className="side-menu top">
                <li onClick={handleClick}>
                    <a href="/">
                        <i className="bx bxs-dashboard"></i>
                        <span className="text">Dashboard</span>
                    </a>
                </li>
                <li onClick={handleClick}>
                    <a href="/">
                        <i className="bx bxs-message-dots"></i>
                        <span className="text">Notices</span>
                    </a>
                </li>
                <li onClick={handleClick}>
                    <a href="/">
                        <i className="bx bxs-group"></i>
                        <span className="text">Faculties</span>
                    </a>
                </li>

                <li onClick={handleClick}>
                    <a href="/">
                        <i className="bx bxs-group"></i>
                        <span className="text">Students</span>
                    </a>
                </li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="/">
                        <i className="bx bxs-cog"></i>
                        <span className="text">Account</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="logout">
                        <i className="bx bxs-log-out-circle"></i>
                        <span className="text">Logout</span>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Sidebar;
