import React from "react";
import style from "./News.module.css";

const NewsItem = ({ title, url, picsUrl, id }) => {
  console.log(style.custom_legend);
  return (
    <div key={id}>
      <img src={picsUrl} alt={title} />
      <a href={url} className={style.custom_legend}>
        {title}
      </a>
    </div>
  );
};

export default NewsItem;
