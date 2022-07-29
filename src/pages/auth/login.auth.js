import "../../assets/admin-lte/dist/css/adminlte.min.css?v=3.2.0";
import "../../assets/admin-lte/plugins/fontawesome-free/css/all.min.css";
import "../../assets/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import NavLink from "react-bootstrap/esm/NavLink";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../services/auth";
const LoginPage = () => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState();
    let navigate = useNavigate();
    const submitForm = async (e) => {
        e.preventDefault();

        try {
            let response = await login(username, password)
            // dashboard
            navigate('/');
            toast.success(response.data.msg)
        } catch (error) {
            toast.error(error.msg);
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="hold-transition login-page">
                <div className="login-box">

                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <NavLink to="/" className="h1"><b>Project</b>X</NavLink>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Sign in to start</p>

                            <form onSubmit={submitForm}>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" onChange={setUsername} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" onChange={setPassword} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    </div>

                                </div>
                            </form>

                            <p className="mb-0">
                                <a href="register.html" className="text-center">Register a new membership</a>
                            </p>
                        </div>

                    </div>

                </div>


                <script src="../../plugins/jquery/jquery.min.js"></script>

                <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="../../dist/js/adminlte.min.js?v=3.2.0"></script>
            </div>
        </>
    );
}

export default LoginPage;