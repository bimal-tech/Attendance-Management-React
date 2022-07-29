import { HomeMenu } from "../component/home/menu.component";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
    return (<>
   
        <HomeMenu/>
            <Outlet /> 
    </>)
}

export default HomeLayout;