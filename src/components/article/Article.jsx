import React from "react";
import "./article.css";

const Article = ({ image, date, title }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-img">
        <img src={image} alt="" />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p className="gpt3__article-content-p">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
