import React from "react";
import style from "./News.module.css";

const NewsItem = ({ title, url, picsUrl, id }) => {
  return (
    <div class={style.carousel_slide} key={id}>
      <img src={picsUrl} alt={title} />
      <a href={url} className={style.custom_legend}>
        {title}
      </a>
    </div>
  );
};

export default NewsItem;
