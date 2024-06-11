import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2'

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogIn = (e) => {
    e.preventDefault();
    const logeduser = JSON.parse(localStorage.getItem("user"));
   
    if (
      input.email === logeduser.email &&
      input.password === logeduser.password
    ) {
      localStorage.setItem("Loggedin", true);
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You Successfully LoggedIn",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/homepage");
    } else {
      toast.warn('🦄 You entered wrong emailid or password!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLogIn} className="form">
        <h1 className="heading">LogIn</h1>
        <input
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="Enter Your Mail ID"
          className="input"
        ></input>
        <input
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="Enter Your Password"
          className="input"
        ></input>
        <button type="submit">LogIn</button>
        <ToastContainer/>
        <h5>
          If you don't have an account?<Link to={"/signuppage"}>SignUp</Link>
        </h5>
      </form>
    </div>
   
  );
}

export default Login;
