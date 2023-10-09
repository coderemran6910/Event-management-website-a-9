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


//  Password must be at least 6 characters
if(password.length < 6){
  toast.error('password must be at least 6 characters');
  return;
}

// Must be a capital letter in the password
if(!/(?=.*[A-Z])/.test(password)){
  toast.error('password must be a capital letter');
  return;
}

// Must be have  a special character
if(!/(?=.*[!@#$%^&*])/.test(password)){
  toast.error('password must have a special character');
  return;
}



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
    <div className="hero-content flex-col justify-center items-center">
      <div className="text-center  md:full  mx-auto lg:text-left">
        <div className="text-center lg:text-left">
          <h1 className=" text-3xl md:text-5xl font-bold text-orange-600">Register now!</h1>
          
        </div>
      </div>
      <div className="card flex-shrink-0 w-80 md:w-full  shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>

          <div>
            <p className=" text-sm md:text-xl ">
              Already have an account?{" "}
              <span className=" text-blue-600 font-bold">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Register;
