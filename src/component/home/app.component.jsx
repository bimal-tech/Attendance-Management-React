import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './assets/util.css';
import './assets/main.css';
import mainImg from './assets/img-01.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { httpPost } from "../../services/axios";

const HomeComponent = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState();
    let navigate = useNavigate();
    const submitAttendance = async (e) => {
        e.preventDefault();
        try {
            let response = await attendance(email, password)
            toast.success(response.data.msg)
        } catch (error) {
            toast.error(error.msg);
        }
    }
    const attendance = async (email, password) => {
        try {
            let formData = new FormData();
            Object.keys(email).map((key, index) => {
                formData.append(key, email[key])
            })
            Object.keys(password).map((key, index) => {
                formData.append(key, password[key])
            })

            let response = await httpPost('store/attendance', formData, false, true);
            if (response.status === 200) {
                let user = response.data.user;
                let clock = response.data.clock;
                let status = response.data.status;
                if (status === '0') {
                    localStorage.setItem("user", user);
                    localStorage.setItem("clock", clock);
                    localStorage.setItem("status", status);
                    navigate('/');
                }
                else {
                    localStorage.removeItem("user");
                    localStorage.removeItem("clock");
                    localStorage.removeItem("status");
                    navigate('/');
                }
            }
            return response;
            // localStorage.setItem('stack_8_user', JSON.stringify(storage_user));
        } catch (error) {
            throw error
        }
    }

    return (
        <>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            <img src={mainImg} alt="IMG" />
                        </div>
                        <form class="login100-form validate-form" onSubmit={submitAttendance}>
                            <span class="login100-form-title">
                                Attendance System
                            </span>
                            <h6 className="subtitle-text">
                                Please enter your credentials to record the Attendance
                            </h6>
                            <h6 className="text-center">
                                {localStorage.getItem("user") ? "Clocked in as:" + localStorage.getItem("user") : ""}
                            </h6>

                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="email" placeholder="Email"
                                    onChange={(e) => {
                                        setEmail({
                                            ...email,
                                            email: e.target.value
                                        })
                                    }} />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" placeholder="Password"
                                    onChange={(e) => {
                                        setPassword({
                                            ...password,
                                            password: e.target.value
                                        })
                                    }} />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <h6 className="text-left ">{localStorage.getItem("clock") ? "Time : " + localStorage.getItem("clock") : " "}</h6>
                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" type="submit">
                                    {localStorage.getItem('status') === '0' ? "Clock Out" : "Clock In"}
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
            <ToastContainer />

        </>
    );
}

export default HomeComponent;