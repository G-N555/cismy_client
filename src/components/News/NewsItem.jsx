import React from "react";

const NewsItem = ({ title, url, picsUrl, key }) => {
  return (
    <div>
      <img src={picsUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default NewsItem;
