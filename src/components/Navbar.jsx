import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo.png";
import profileImg from "../assets/image/profile.jpg";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
const Navbar = () => {
  const navigate = useNavigate()
  const {user , logOut } = useContext(AuthContext)

// handleLogOut
const handleLogOut =()=>{
  logOut()
    .then(()=>{
      navigate('/')
      toast.success('Logout successfull')
    })
    .catch(error => {
      toast.error(error.message)
      console.error(error);
    })
}




  const menuLink = (
    <>
      <span className="mr-6 text-xl">
        <NavLink to={"/"}>Home </NavLink>
      </span>
      <span className="mr-6 text-xl">
        <NavLink to={"/Services"}>Services </NavLink>
      </span>
      <span className="mr-6 text-xl">
        <NavLink to={"/about"}>About us </NavLink>
      </span>
      <span className="mr-6 text-xl">
        <NavLink to={"/wedding"}>Weddings </NavLink>
      </span>
      <span className={`mr-6 text-xl ${!user ? "text-gray-500" : ""} `}>
        <NavLink to={"/anniversaries"}>Anniversaries </NavLink>
      </span>
      <span className={`mr-6 text-xl ${!user ? "text-gray-500" : ""} `}>
        <NavLink to={"/gallery"}>Gallery </NavLink>
      </span>
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="navbar  container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  space-y-5  z-50 p-2 shadow bg-base-100 rounded-box w-52 text-center  uppercase "
          >
             {user?.displayName && <span className="mr-6 text-sm font-semibold ">{user.displayName || "User Name"}</span>}
            {menuLink}
          </ul>
        </div>
        <div className=" w-60  h-24 object-cover">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 uppercase ">{menuLink}</ul>
      </div>
      
       
      
      <div className="navbar-end">
      <div className=" border-l-2 flex justify-center items-center  border-r-2 px-2"> 
   
   {user?.email && <span className="mr-6 text-sm font-semibold  hidden md:block">{user.displayName || "User Name"}</span>}
     <div className="avatar online w-12 ">
       <div className="max-w-xs rounded-full">
         <img src={ user ? user?.photoURL : profileImg} 
         className="max-w-xs h-full"
         />
       </div>
     </div>
     </div>
        {
          user ? <Link to={"/logout"}> <button onClick={handleLogOut} className="btn btn-primary">Sign Out</button> </Link> :<Link to={"/login"}> <button className="btn btn-primary">Sign In</button> </Link>
        }
      </div>
    </div>
    </div>
  );
};

export default Navbar;
