import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { httpDelete, httpGet } from "../../../../../services/axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ActionButtons } from "../../../../../component/common/button/action.component";

const ListAllUser = () => {
    let [data, setData] = useState([]);
    const getUser = async () => {
        try {
            let response = await httpGet("/all_user", true);
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
            name: 'Action',
            selector: row => <ActionButtons dataId={row.id} onDelete={deleteUser} onEdit={`edit/user/${row.id}`} />,
        },
    ];
    
    const deleteUser = async (data) => {
        try {
            let success = await deleteUserByID(data);
            // console.log("success",success);
            if (success.status === 200) {
                // console.log(success.data.msg);
                toast.success(success.data.msg);
                getUser();
            } else {
                // console.error(success.msg);
                toast.error(success.data.msg);
            }
        } catch (error) {
            console.error("delete Error: ", error);
        }
    }
    const deleteUserByID = async (id) => {
        try{
            let response = await httpDelete('/delete/user/'+id);
            return response;
        } catch(error) {
            throw error;
        }
    }
    useEffect(() => {
        getUser();
    }, [])
    return (<>
        <h1 className="mt-4">List User</h1>
        <ToastContainer />
        <div className="card mb-4">
            <div className="card-body">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    </>);
}
export default ListAllUser;