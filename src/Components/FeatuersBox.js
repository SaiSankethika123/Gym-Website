import React from "react";

function FeatuersBox(props) {
  return (
    <div className="a-box">
      <div className="a-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-text">
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  );
}

export default FeatuersBox;
