import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { httpGet,httpPost } from "../../../../../services/axios";
import { TeacherEditForm } from "./teacherEditForm";

export const TeacherEdit = (props) => {

    const [label, setLabel] = useState({});
    let params = useParams();
    let navigate = useNavigate();
    // console.log("label", label);
    const updateLabelById = async (data, id) => {
        try {
            let formData = new FormData();
            Object.keys(data).map((key, index) => {
                return formData.append(key, data[key])
            })

            let response = await httpPost('/edit/teacher/' + id, formData);
            // console.log(response)

            return response;
        } catch (error) {
            throw error;
        }
    }
    const getLabelByLabelId = async () => {
        try {
            let data = await getLabelById(params.id)
            if (data) {
                // console.log(data);
                setLabel(data);
            } else {
                toast.error(data.msg);
            }
        } catch (error) {
            console.error("Label Edit: ", error)
        }
    }
    const getLabelById = async (id) => {
        try {
            let response = await httpGet('/edit/teacher/' + id);
            // console.log("teacher", response);
            return response.data[0];
        }catch(error) {
            throw error;
        }
    }
    const updateLabel = async (data) => {
        let updated_data = {
            name: data.name,
            email: data.email,
            password: data.password,
        }

        try {
            let response = await updateLabelById(updated_data, data.id);
            if (response.status === 200) {
                toast.success(response.data.msg);
                navigate("/admin/list" + props.type+'/teacher');
            } else {
                toast.error(response.msg);
            }
        } catch (error) {
            console.error("Label Update: ", error);
        }
    }
    

    useEffect(() => {
        getLabelByLabelId();
    },[])

    return (<>
        <ToastContainer />
        <div className="container-fluid px-4">
            <h1 className="mt-4">{props.type} Update</h1>
            <div className="card mb-4">
                <div className="card-body">
                    <TeacherEditForm
                        onSubmitLabel={updateLabel}
                        initialVals={label}
                        type={props.type}
                    />
                </div>
            </div>
        </div>
    </>)
}