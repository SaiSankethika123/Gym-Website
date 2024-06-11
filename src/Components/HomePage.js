import React from "react";
import "./homestyle.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function HomePage() {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogOut = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Loggedout!",
          text: "Your file has been loggedout.",
          icon: "success"
        });
      }
    });
  };
  return (
    <div className="home">
      <div className="heading">
        <h1>Hi {userName.name}...</h1>
        <h4>Let's start your journey with us...</h4>
        <p>Go throw These Videos</p>
      </div>
      <div className="frames">
        <iframe
          width="250"
          height="315"
          src="https://www.youtube.com/embed/AX_VT_7kwlY?si=rP5bh_NoMgpIunTe"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="250"
          height="315"
          src="https://www.youtube.com/embed/ld8nm6rcOm0?si=DnHtPJVNH_JuWXDf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="250"
          height="315"
          src="https://www.youtube.com/embed/7aQwjkHkhMA?si=nCU68XVIEuY9Ma0e"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="250"
          height="315"
          className="iframe"
          src="https://www.youtube.com/embed/vcbFP8lSrMU?si=qncveU9GJKDUTN2O"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="button">
        <button onClick={handleLogOut} type="button" className="btn1">
          LogOut
        </button>
      </div>
    </div>
  );
}

export default HomePage;
