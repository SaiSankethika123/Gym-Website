import React from "react";
import "./about.css";
import image from "../gymimg/img03.jpg";

function NavBar() {
  return (
    <div id="about">
      <div className="about-img">
        <img
          src={image}
          alt=""
          height={"500px"}
          width={"600px"}
          className="image"
        />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor
          sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur
          adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem
          ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet
          consectetur adipisicingLorem ipsum dolor sit amet consectetur
          adipisicing
        </p>
        <button className="btn">READ MORE</button>
      </div>
    </div>
  );
}

export default NavBar;
