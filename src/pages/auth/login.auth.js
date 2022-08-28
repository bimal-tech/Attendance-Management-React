import "../../assets/admin-lte/dist/css/adminlte.min.css?v=3.2.0";
import "../../assets/admin-lte/plugins/fontawesome-free/css/all.min.css";
import "../../assets/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { login } from "../../services/auth";
import loginImage from "./admin-login.jpg";
const LoginPage = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState();

    let navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            let response = await login(email, password)
            console.log("login response",response);
            navigate('/admin');
            toast.success(response.data.msg)
        } catch (error) {
            toast.error(error.msg);
        }
    }

    useEffect(() => {
        let token = localStorage.getItem("attendance_token");
        if (token) {
            navigate("/admin");
        }
    }, []);
    return (
        <>
             <ToastContainer />
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            <img src={loginImage} alt="IMG" />
                        </div>
                        <form class="login100-form validate-form" onSubmit={submitForm}>
                            <span class="login100-form-title">
                              System Login
                            </span>
                            <h6 className="subtitle-text-2">
                                Please enter your credentials to login
                            </h6>

                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="email"  placeholder="Email"
                                        onChange={(e) => {
                                            setEmail({
                                                ...email,
                                                email: e.target.value
                                            })
                                        }}/>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password"  placeholder="Password"
                                        onChange={(e) => {
                                            setPassword({
                                                ...password,
                                                password: e.target.value
                                            })
                                        }}/>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" type="submit">
                                    Login
                                </button>
                            </div>

                            <div class="text-center p-t-12">
                                
                            </div>

                            <div class="text-center p-t-136">
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default LoginPage;