import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section_padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links-logo">
          <img src={gpt3logo} alt="" />
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Early Access</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Company</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Early Access</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Get in Touch</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Early Access</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2020, All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
