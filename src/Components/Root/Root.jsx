import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <div className="px-36 mx-auto mt-3">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;