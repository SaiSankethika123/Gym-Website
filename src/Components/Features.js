import React from "react";
import "./features.css";
import svg1 from "../gymimg/1.svg";
import svg2 from "../gymimg/2.svg";
import svg3 from "../gymimg/3.svg";
import svg4 from "../gymimg/4.svg";
import FeatuersBox from "./FeatuersBox";

function Features() {
  return (
    <div className="feature">
      <h1>FEATURES</h1>
      <div className="a-container">
        <FeatuersBox image={svg1} title="weightLifting" />
        <FeatuersBox image={svg2} title="Specific Muscle" />
        <FeatuersBox image={svg3} title="Flex Your Muscle" />
        <FeatuersBox image={svg4} title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Features;
