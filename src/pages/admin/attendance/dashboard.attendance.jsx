import { ToastContainer } from "react-toastify";
import './attendance.css';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { httpGet } from "../../../services/axios";
const DashboardComponent = () => {

    let [data, setData] = useState([]);
    const getDashboard = async () => {
        try {
            let response = await httpGet("/dashboard", true);
            if (response.data) {
                setData(response.data[0]);
            }
        } catch (error) {
            console.log("addUser: ", error);
        }
    };
    useEffect(() => {
        getDashboard();
    }, [])
    return (
        <>
            <ToastContainer />
            <h1 className="mt-4 mb-5">Attendance Summary </h1>
            <div className="container-fluid px-4">
                <div className="row d-flex justify-content-around">
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-info">
                            <div className="count-header" >
                                <h3 className="inner">
                                    Total User
                                    <p className="text-white">{data.total_user}</p>
                                </h3>
                            </div>
                            <div className="count-container" >
                                <div className="inner inline-block">
                                    <h3>{data.total_teacher}</h3>
                                    <p className="text-white ">Teacher</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.total_student}</h3>
                                    <p className="text-white">Student</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.total_staff}</h3>
                                    <p className="text-white">Staff</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.total_admin}</h3>
                                    <p className="text-white">Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-warning">
                            <div className="count-header" >
                                <h3 className="inner">
                                    Total Present
                                    <p className="text-dark">{data.total_present_user}</p>
                                </h3>
                            </div>
                            <div className="count-container" >
                                <div className="inner inline-block">
                                    <h3>{data.total_present_teacher}</h3>
                                    <p className="text-dark ">Teacher</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.total_present_student}</h3>
                                    <p className="text-dark">Student</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.total_present_staff}</h3>
                                    <p className="text-dark">Staff</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.total_present_admin}</h3>
                                    <p className="text-dark">Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-danger">
                            <div className="count-header" >
                                <h3 className="inner">
                                    Total Absent
                                    <p className="text-white">{data.absent_user}</p>
                                </h3>
                            </div>
                            <div className="count-container" >
                                <div className="inner inline-block">
                                    <h3>{data.absent_teacher}</h3>
                                    <p className="text-white ">Teacher</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.absent_student}</h3>
                                    <p className="text-white">Student</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.absent_staff}</h3>
                                    <p className="text-white">Staff</p>
                                </div>
                                <div className="inner inline-block">
                                    <h3>{data.absent_admin}</h3>
                                    <p className="text-white">Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default DashboardComponent;