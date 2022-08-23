import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { httpGet } from "../../../../../services/axios";
import { useState } from "react";
import { ActionButtons } from "../../../../../component/common/button/action.component";
import "react-toastify/dist/ReactToastify.css";

const ListAllTeacher = () => {
    let [data, setData] = useState([]);
    const getTeacher = async () => {
        try {
            let response = await httpGet("/all_teacher", true);
            if (response.data) {
                setData(response.data);
            }
        } catch (error) {
            console.log("ListAllTeacher: ", error);
        }
    };
    // console.log("data",data);
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
            name: 'Action',
            selector: row => <ActionButtons dataId={row.id} onEdit={`edit/teacher/${row.id}`} />,
        },
    ];
    useEffect(() => {
        getTeacher();
    },[])
    return (<>
        <h1 className="mt-4">List of Teachers</h1>
        <ToastContainer />
        <div className="card mb-4">
            <div className="card-body">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    </>);
}

export default ListAllTeacher;