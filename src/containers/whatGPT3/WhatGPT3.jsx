import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section_margin">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={"What is GPT-3"} />
        <p className="gpt3__whatgpt3-feature_conainer-div-p-top">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilites are beyond your imagination.
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-feature_container">
        <div className="gpt3__whatgpt3-feature_conainer-div">
          <Feature title={"Chatbots"} />
          <p className="gpt3__whatgpt3-feature_conainer-div-p">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.{" "}
          </p>
        </div>
        <div className="gpt3__whatgpt3-feature_conainer-div">
          <Feature title={"Knowledgebase"} />
          <p className="gpt3__whatgpt3-feature_conainer-div-p">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
        <div className="gpt3__whatgpt3-feature_conainer-div">
          <Feature title={"Education"} />
          <p className="gpt3__whatgpt3-feature_conainer-div-p">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
