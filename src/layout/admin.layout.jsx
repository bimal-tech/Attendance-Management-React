import { Outlet } from "react-router-dom";
import AdminNavBar from "../component/admin/layoutComponent/navbar";
import AdminSidebar from "../component/admin/layoutComponent/sidebar";

const AdminLayout = () => {
    return (<>
        <div className="wrapper">
            <AdminNavBar />
            <AdminSidebar />
            <div className="content-wrapper">
            <Outlet />
            </div>

            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>

        </div>

    </>)
}
export default AdminLayout;