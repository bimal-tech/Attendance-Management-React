import { useEffect } from "react";
import { httpGet } from "../../../../services/axios";
import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const ListUser = () => {
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
      name: "Created at",
      selector: (row) => row.created_at,
      sortable: true,
    },
    ];
    useEffect(() => {
        getUser();
    })
  return (
    <>
      <div className="container-fluid px-4">
        <h1 className="mt-4">List User</h1>
        <ToastContainer />
        <div className="card mb-4">
          <div className="card-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ListUser;
