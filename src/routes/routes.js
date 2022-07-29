import "../assets/admin-lte/dist/css/adminlte.min.css?v=3.2.0";
import "../assets/admin-lte/plugins/fontawesome-free/css/all.min.css";
import "../assets/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "../layout/home.layout";
import RegisterPage from "../pages/auth/register.auth";
import LoginPage from "../pages/auth/login.auth";
import ErrorPage from "../pages/error/error.page";
import HomeComponent from "../component/home/app.component";
import AdminLayout from "../layout/admin.layout";
import AdminHomeComponent from "../component/admin/app.component";
import AddUser from "../pages/admin/user/addUser/addUser.user.admin";
import EditUser from "../pages/admin/user/editUser/editUser.user.admin";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminLayout />} >
                    <Route index element={<AdminHomeComponent />} />
                    <Route path="adduser" element ={<AddUser />} />
                    <Route path="edituser" element ={<EditUser />} />
                    <Route path="*" element={<ErrorPage />}></Route>
                </Route>


                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<HomeComponent />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;