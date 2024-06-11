import React from "react";
import "./navStyle.css";
import SignUpPage from "./SignUpPage";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();
  const gotofeaturespage = () => {
    navigate("/features");
  };
  const gotoofferpage = () => {
    navigate("/offer");
  };
  const gotoaboutpage = () => {
    navigate("/about");
  };
  const gotocontactpage = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="nav-bar">
        <nav className="nav">
          <a href="/" id="head">
            GYM
          </a>
          <a href="#features" className="nav-items">
            <button onClick={() => gotofeaturespage()}>FEATURES</button>
          </a>
          <a href="#offer" className="nav-items">
            <button onClick={() => gotoofferpage()}>OFFER</button>
          </a>
          <a href="#about" className="nav-items">
            <button onClick={() => gotoaboutpage()}>ABOUT</button>
          </a>
          <a href="#contact" className="nav-items">
            <button onClick={() => gotocontactpage()}>CONTACT</button>
          </a>
        </nav>
      </div>
      <SignUpPage />
    </>
  );
}

export default NavBar;
