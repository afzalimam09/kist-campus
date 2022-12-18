import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Home from "./pages/client/home/Home";
import Login from "./pages/client/login/Login";
import Register from "./pages/client/register/Register";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
    let userState;
    const state = useSelector((state) => state);
    if (state) {
        userState = state.user;
    }
    let user;
    if (userState) {
        user = userState.currentUser;
    }
    let admin;
    if (user) {
        admin = user.data.isAdmin;
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route
                        path="login"
                        element={user ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        path="register"
                        element={user ? <Navigate to="/" /> : <Register />}
                    />
                </Route>
                <Route path="/admin/">
                    <Route
                        path="dashboard"
                        element={!admin ? <Navigate to="/" /> : <Dashboard />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
