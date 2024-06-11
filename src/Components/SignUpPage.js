import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./signupStyle.css";
import { Link } from "react-router-dom";
import Features from "./Features";
import Offer from "./Offer";
import About from "./About";
import Contact from "./Contact";

function SignUpPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <>
      <div className="signup">
        <form className="form" onSubmit={handleSignUp}>
          <h1 className="heading">SignUp</h1>
          <input
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Enter Your Name"
            className="input"
          ></input>
          <input
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="email"
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
          <button type="submit">SignUp</button>
          <h5>
            Already have an account?<Link to={"/login"}>LogIn</Link>
          </h5>
        </form>
        <div className="gym">
          <h1 id="h1">STEP UP YOUR FITNESS WITH US</h1>
          <h3 id="h3">Build Your Body And Fitness With Professional Touch</h3>
          <h4 id="h4">Come Join With Us </h4>
        </div>
      </div>
      <Features />
      <About />
      <Offer />
      <Contact />
    </>
  );
}

export default SignUpPage;
