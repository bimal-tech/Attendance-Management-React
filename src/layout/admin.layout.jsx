import { Outlet } from "react-router-dom";
import AdminNavBar from "../component/admin/layoutComponent/navbar";
import AdminSidebar from "../component/admin/layoutComponent/sidebar";


const AdminLayout = () => {
    return (
        <>
            <div className="hold-transition sidebar-mini">
                <div class="wrapper">
                    <AdminNavBar />
                    <AdminSidebar />
                    <div class="content-wrapper">
                        <Outlet />
                    </div>
                </div>
            </div>





        </>
    );
};
export default AdminLayout;
