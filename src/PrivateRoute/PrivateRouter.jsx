import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRouter = ({children}) => {
const {user , loader}= useContext(AuthContext)


if(loader){
    return <div className="flex justify-center items-center"><span className="loading loading-spinner text-warning p-10"></span></div>

}

if(user){
    return children
}else{
    Swal.fire({
        title: 'Login First to access this page',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}


    return (
       
        <Navigate to="/login" />
    );
};

export default PrivateRouter;