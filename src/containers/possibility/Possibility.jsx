import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section_padding">
      <div className="gpt3__possibility-img">
        <img src={possibility} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <p className="gpt3__possibility-content-uppertext">
          Request Early Access to Get Started
        </p>
        <h1 className="gradient__text">
          The possbilities are beyond your imagination
        </h1>
        <p className="gpt3__possibility-content-centertext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          tempora repudiandae eveniet inventore vel voluptates a pariatur odit
          atque mollitia labore, dolores autem esse tempore ipsa aliquam
          officiis nihil reiciendis!
        </p>
        <p className="gpt3__possibility-content-bottomtext">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possibility;
