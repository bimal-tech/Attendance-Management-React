import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AttendanceLayout = () => {
    return (
        <>
            <ToastContainer />
            <div className="container-fluid px-4">
                <Outlet />
            </div>
        </>
    );
}

export default AttendanceLayout;