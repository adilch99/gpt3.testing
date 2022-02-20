import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAL
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ut
          voluptatibus amet. Expedita molestiae omnis itaque eligendi vero
          praesentium ipsam quos.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Email" />
          <button>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
