import { Link, NavLink } from "react-router-dom";
import { Button, Collapse, ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./sidebar.admin.css";
const AdminSidebar = () => {
    const [open, setOpen] = useState(false);
    const [openFeeSidebarCollapse, setOpenFeeSidebarCollapse] = useState(false);
    return (<>
        <aside className="main-sidebar admin-sidebar elevation-4">
            <Link to="/admin" className="sidebar-brand-details">
                <span>
                    Project X
                </span>
            </Link>
            {/* <!-- Sidebar --> */}
            <div className="sidebar">
                {/* <!-- Sidebar user panel (optional) --> */}
                <ul class="nav nav-pills flex-column mb-auto" data-widget="treeview" role="menu" data-accordion="false">
                    <li>
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="sidebar-user-details">
                                <NavLink to="/admin" className="d-block">Alexander Pierce</NavLink>
                            </div>
                        </div>
                    </li>

                    {/* <!-- SidebarSearch Form --> */}
                    <li>

                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                            </div><div className="sidebar-search-results"><div className="list-group"><a href="#" className="list-group-item"><div className="search-title"><strong className="text-light"></strong>N<strong className="text-light"></strong>o<strong className="text-light"></strong> <strong className="text-light"></strong>e<strong className="text-light"></strong>l<strong className="text-light"></strong>e<strong className="text-light"></strong>m<strong className="text-light"></strong>e<strong className="text-light"></strong>n<strong className="text-light"></strong>t<strong className="text-light"></strong> <strong className="text-light"></strong>f<strong className="text-light"></strong>o<strong className="text-light"></strong>u<strong className="text-light"></strong>n<strong className="text-light"></strong>d<strong className="text-light"></strong>!<strong className="text-light"></strong></div><div className="search-path"></div></a></div></div>
                        </div>
                    </li>

                    {/* <!-- Sidebar Menu --> */}
                    <li>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* <!-- Add icons to the links using the .nav-icon className */}
                                {/* with font-awesome or any other icon font library --> */}
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
                                            {/* <li className="sidebar-nav-link">
                                                <NavLink to="edituser" className="nav-link sidebar-nav-link">
                                                    <i class="nav-icon fas fa-solid fa-user-gear"></i>
                                                    <p>Edit User</p>
                                                </NavLink>
                                            </li> */}

                                        </ul>
                                    </Collapse>
                                </li>
                                <li className="nav-item">

                                    <div onClick={() => setOpenFeeSidebarCollapse(!openFeeSidebarCollapse)}
                                        aria-controls="#fee-sidebar-collapse"
                                        aria-expanded={openFeeSidebarCollapse} className="nav-link sidebar-nav-link-group">
                                        <i class="nav-icon fa-solid fa-user"></i>
                                        <p>
                                            Fee Management
                                            <i className="right fas fa-angle-down"></i>
                                        </p>
                                    </div>
                                    <Collapse in={openFeeSidebarCollapse}  timeout={2000}>
                                        <ul id="fee-sidebar-collapse">
                                            <li className="sidebar-nav-link">
                                                <NavLink to="adduser" className="nav-link sidebar-nav-link">
                                                    <i class="nav-icon fa-solid fa-user-plus"></i>
                                                    <p>Add Fee</p>
                                                </NavLink>
                                            </li>
                                            <li className="sidebar-nav-link">
                                                <NavLink to="listuser" className="nav-link sidebar-nav-link">
                                                    <i class="nav-icon fas fa-solid fa-user-gear"></i>
                                                    <p>List Fee</p>
                                                </NavLink>
                                            </li>
                                            <li className="sidebar-nav-link">
                                                <NavLink to="edituser" className="nav-link sidebar-nav-link">
                                                    <i class="nav-icon fas fa-solid fa-user-gear"></i>
                                                    <p>Edit Fee</p>
                                                </NavLink>
                                            </li>

                                        </ul>
                                    </Collapse>
                                </li>
                                
                            </ul>
                        </nav>

                    </li>
                    {/* <!-- /.sidebar-menu --> */}
                </ul>
            </div>
            {/* <!-- /.sidebar --> */}
        </aside>
    </>)

}
export default AdminSidebar;