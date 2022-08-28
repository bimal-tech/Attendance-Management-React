import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { httpDelete, httpGet } from "../../../../../services/axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ActionButtons } from "../../../../../component/common/button/action.component";

const ListAllStaff = () => {
        let [data, setData] = useState([]);
    const getStaff = async () => {
        try {
            let response = await httpGet("/all_staff", true);
            if (response.data) {
                setData(response.data);
            }
        } catch (error) {
            console.log("ListAllStaff: ", error);
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
            name: 'Action',
            selector: row => <ActionButtons dataId={row.id} onDelete={deleteStaff} onEdit={`edit/staff/${row.id}`} />,
        },
    ];
    const deleteStaff = async (data) => {
        try {
            let success = await deleteStaffByID(data);
            // console.log("success",success);
            if (success.status === 200) {
                // console.log(success.data.msg);
                toast.success(success.data.msg);
                getStaff();
            } else {
                // console.error(success.msg);
                toast.error(success.data.msg);
            }
        } catch (error) {
            console.error("delete Error: ", error);
        }
    }
    const deleteStaffByID = async (id) => {
        try{
            let response = await httpDelete('/delete/staff/'+id);
            return response;
        } catch(error) {
            throw error;
        }
    }
    useEffect(() => {
        getStaff();
    },[])
    return (<>
        <h1 className="mt-4">List of Staffs</h1>
        <ToastContainer />
        <div className="card mb-4">
            <div className="card-body">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    </>);
}

export default ListAllStaff;