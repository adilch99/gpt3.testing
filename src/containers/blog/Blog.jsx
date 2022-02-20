import React from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const blogsData = [
  {
    date: "01-01-2001",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog02,
  },
  {
    date: "01-01-2001",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog03,
  },
  {
    date: "01-01-2001",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog04,
  },
  {
    date: "01-01-2001",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blog05,
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog">
      <div className="gpt3__blog-ga">
        <Article
          title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          date={"01-01-2001"}
          image={blog01}
        />
      </div>
      <div className="gpt3__blog-gb">
        {window.innerWidth < 666
          ? blogsData
              .slice(1, 3)
              .map((blog, index) => (
                <Article
                  key={index}
                  title={blog.title}
                  image={blog.image}
                  date={blog.date}
                />
              ))
          : blogsData.map((blog, index) => (
              <Article
                key={index}
                title={blog.title}
                image={blog.image}
                date={blog.date}
              />
            ))}
      </div>
    </div>
  );
};

export default Blog;
