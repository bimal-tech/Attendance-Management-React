import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "../layout/home.layout";
import RegisterPage from "../pages/auth/register.auth";
import LoginPage from "../pages/auth/login.auth";
import ErrorPage from "../pages/error/error.page";
import HomeComponent from "../component/home/app.component";
import AdminLayout from "../layout/admin.layout";
import AdminHomeComponent from "../component/admin/app.component";
import AddUser from "../pages/admin/user/addUser/addUser.user.admin";
import { UserEdit } from "../pages/admin/user/editUser/User/editUser.user.admin";
import ListUser from "../pages/admin/user/listUser/listUser.user.admin";
import ListAllUser from "../pages/admin/user/listUser/lists/listAllUser";
import ListAllTeacher from "../pages/admin/user/listUser/lists/listAllTeachers";
import ListAllStudent from "../pages/admin/user/listUser/lists/listAllStudents";
import ListAllStaff from "../pages/admin/user/listUser/lists/listAllStaffs";
import { StudentEdit } from "../pages/admin/user/editUser/Student/editStudent";
import { TeacherEdit } from "../pages/admin/user/editUser/Teacher/editTeacher";
import { StaffEdit } from "../pages/admin/user/editUser/Staff/editStaff";
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminLayout />} >
                    <Route index element={<AdminHomeComponent />} />
                    <Route path="adduser" element={<AddUser />} />
                    <Route path="listuser" element={<ListUser />} >
                        <Route index element={<ListAllUser />} />
                        <Route path="edit/user/:id" element={<UserEdit type="User" />}></Route>
                        <Route path="teacher" element={<ListAllTeacher />} />
                        <Route path="teacher/edit/teacher/:id" element={<TeacherEdit type="Teacher" />}></Route>
                        <Route path="student" element={<ListAllStudent />} />
                        <Route path="student/edit/student/:id" element={<StudentEdit type="Student" />}></Route>
                        <Route path="staff" element={<ListAllStaff />} />
                        <Route path="staff/edit/staff/:id" element={<StaffEdit type="Staff" />}></Route>
                    </Route>
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