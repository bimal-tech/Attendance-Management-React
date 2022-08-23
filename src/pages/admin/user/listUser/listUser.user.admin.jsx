import "./listUser.css";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const ListUser = () => {
  return (
    <>
      <div className="container-fluid px-4">
        <ul className="d-flex justify-content-between list-user-tab">
          <li>
          <NavLink to="/admin/listuser">All user</NavLink>
          </li>
          <li>
          <NavLink to="/admin/listuser/teacher">Teacher</NavLink>
          </li>
          <li>
          <NavLink to="/admin/listuser/student">Student</NavLink>
          </li>
          <li>
          <NavLink to="/admin/listuser/staff">Staff</NavLink>
          </li>
       </ul>
        
        <Outlet>

        </Outlet>

      </div>
    </>
  );
};
export default ListUser;
