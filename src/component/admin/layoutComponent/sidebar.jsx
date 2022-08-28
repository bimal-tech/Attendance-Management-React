import { Link, NavLink, useNavigate } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
import "./sidebar.admin.css";
const AdminSidebar = () => {
    const [openFeeSidebarCollapse, setOpenFeeSidebarCollapse] = useState(false);
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    const logoutClick = () => {
        localStorage.removeItem('attendance_token');
        navigate('/');
    }
    return (<>
        <aside className="main-sidebar admin-sidebar elevation-4">
            <Link to="/admin" className="sidebar-brand-details">
                <span>
                    Attendance
                </span>
            </Link>
            <div className="sidebar">
                <ul class="nav nav-pills flex-column mb-auto" data-widget="treeview" role="menu" data-accordion="false">
                    <li>
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="sidebar-user-details">
                                <NavLink to="/admin" className="d-block">Alexander Pierce</NavLink>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                        <div onClick={() => setOpenFeeSidebarCollapse(!openFeeSidebarCollapse)}
                            aria-controls="#attendance-menu"
                            aria-expanded={openFeeSidebarCollapse} className="nav-link sidebar-nav-link-group">
                            <i class="nav-icon fa-solid fa-circle-info"></i>
                            <p>
                                Attendance
                                <i className="right fas fa-angle-down"></i>
                            </p>
                        </div>
                        <Collapse in={openFeeSidebarCollapse} timeout={2000}>
                            <ul id="attendance-menu">
                                <li className="sidebar-nav-link">
                                    <NavLink to="/admin/attendance/log" className="nav-link sidebar-nav-link">
                                        <i class="nav-icon fa-solid fa-window-restore"></i>
                                        <p>Log</p>
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-link">
                                    <NavLink to="/admin/attendance/dashboard" className="nav-link sidebar-nav-link">
                                        <i class="nav-icon fa-solid fa-gauge-high"></i>
                                        <p>Dashboard</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                </ul>
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">

                        <div onClick={() => setOpen(!open)}
                            aria-controls="user-sidebar-collapse"
                            aria-expanded={open} className="nav-link sidebar-nav-link-group">
                            <i class="nav-icon fa-solid fa-user"></i>
                            <p>
                                User Management
                                <i className="right fas fa-angle-down"></i>
                            </p>
                        </div>
                        <Collapse in={open} timeout={2000}>
                            <ul id="user-sidebar-collapse">
                                <li className="sidebar-nav-link">
                                    <NavLink to="adduser" className="nav-link sidebar-nav-link">
                                        <i class="nav-icon fa-solid fa-user-plus"></i>
                                        <p>Add User</p>
                                    </NavLink>
                                </li>
                                <li className="sidebar-nav-link">
                                    <NavLink to="listuser" className="nav-link sidebar-nav-link">
                                        <i class="nav-icon fas fa-solid fa-user-gear"></i>
                                        <p>List User</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </Collapse>

                    </li>
                </ul>

                <div className="nav-item logout-button" type="button" onClick={logoutClick}>
                    <div className="nav-link sidebar-nav-link-group">
                        <p className="text-danger">
                            <i className="fas fa-lock lock-button"></i>
                            Logout</p>
                    </div>

                </div>
            </div >
        </aside >



    </>)

}
export default AdminSidebar;