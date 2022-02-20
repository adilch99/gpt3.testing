import React from "react";
import "./feature.css";

const Feature = ({ title }) => {
  return (
    <div className="gpt3__component-feature-container">
      <div className="gpt3__component-feature-container_line"></div>
      <p className="gpt3__component-feature-container_title">{title}</p>
    </div>
  );
};

export default Feature;
