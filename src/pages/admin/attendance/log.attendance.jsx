import DataTable from "react-data-table-component";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { httpGet } from "../../../services/axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
const Log = () => {
    let [data, setData] = useState([]);
    const getAttendanceLog = async () => {
        try {
            let response = await httpGet("/all/attendance", true);
            if (response.data) {
                setData(response.data);
            }
        } catch (error) {
            console.log("addUser: ", error);
        }
    };
    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Phone",
            selector: (row) => row.phone_number,
            sortable: true,
        },
        {
            name: "Clock In",
            selector: (row) => row.clock_in,
            sortable: true,
        },
        {
            name: "Clock Out",
            selector: (row) => row.clock_out,
            sortable: true,
        },
        {
            name: "Role",
            selector: (row) => row.role,
            sortable: true,
        },
    ];
    useEffect(() => {
        getAttendanceLog();
    }, [])


    return (<>
        <h1 className="mt-4">Attendance Log</h1>
        <ToastContainer />
        <div className="card mb-4">
            <div className="card-body">
                <DataTable columns={columns} data={data} />
            </div>
        </div>

    </>);
}

export default Log;


