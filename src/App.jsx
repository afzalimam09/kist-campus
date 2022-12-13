import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackToTop from "./components/backtotop/BackToTop";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import StudentRegister from "./pages/student/register/Register";
import FacultyRegister from "./pages/faculty/register/Register";
import Dashboard from "./pages/admin/dashboard/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="/student/">
                    <Route path="register" element={<StudentRegister />} />
                </Route>
                <Route path="/faculty/">
                    <Route path="register" element={<FacultyRegister />} />
                </Route>
                <Route path="/admin/">
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
            <Footer />
            <BackToTop />
        </BrowserRouter>
    );
}

export default App;
