// import "../../assets/admin-lte/dist/css/adminlte.min.css?v=3.2.0";
// import "../../assets/admin-lte/plugins/fontawesome-free/css/all.min.css";
// import "../../assets/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { register } from "../../services/auth";

var init_name = {
    'name': ' '
};
var init_email = {
    'email': ' '
};
var init_password = {
    'password': ' '
};
const RegisterPage = () => {
    let [data, setData] = useState();
    let [nameErr, setNameErr] = useState(init_name);
    let [emailErr, setEmailErr] = useState(init_email);
    let [passwordErr, setPasswordErr] = useState(init_password);

    let navigate = useNavigate();
    const handleChange = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }


    const submitForm = async (e) => {
        e.preventDefault();

        try {
            let response = await register(data);
            // console.log("response3",response);
            navigate("/login");
            toast.success(response.data.msg);
        } catch (error) {
            console.log(error);
            let err_name = error.response.data.error
            setNameErr({
                ...nameErr,
                'name': err_name.name ? err_name.name[0] : ' '
            })
            setEmailErr({
                ...emailErr,
                'email': err_name.email[0] ? err_name.email[0] : ' '
            })
            setPasswordErr({
                ...passwordErr,
                'password': err_name.password[0] ? err_name.password[0] : ' '
            })
            console.log(nameErr);
        }
    }


    return (
        <>
            <ToastContainer />
            <div className="hold-transition register-page">
                <div className="register-box">
                    <div className="register-logo">
                        <h1 href="#"><b>Project</b>X</h1>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Register a new membership</p>

                            <form onSubmit={submitForm}>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Full name"
                                        name="name"
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                name: e.target.value
                                            })
                                            // validateFormData('name', e.target.value);
                                        }}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-danger pb-2">{nameErr.name}</div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" name="email"
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                email: e.target.value
                                            })
                                            // validateFormData('name', e.target.value);
                                        }}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-danger pb-2">{emailErr.email}</div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" name="password"
                                        onChange={handleChange}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-danger">{passwordErr.password}</div>

                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RegisterPage;