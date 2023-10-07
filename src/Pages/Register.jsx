import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Register = () => {

  const { createUser } = useContext(AuthContext);
const handleRegister =(e)=>{
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const email = form.get('email');
  const password = form.get('password');


  createUser(email, password)
  .then(result =>{
    const user = result.user;
    console.log(user);
    toast.success('user created successfully')
  })
  .catch(error=>{
    console.error(error);
    toast.error(error.message)
  })
  
}




  return (
    <div className="hero min-h-[80vh] bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-orange-600">Register now!</h1>
        <p className="py-6 w-96">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>


      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
          <p className=" text-xl ">Already have an account? <span className="text-blue-600 font-bold"><Link to="/login">Login</Link></span></p>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Register;
