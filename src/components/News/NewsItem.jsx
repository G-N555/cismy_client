import React from "react";

const NewsItem = ({ title, url, picsUrl }) => {
  return (
    <ul>
      <li>{title}</li>
      <li>{url}</li>
      <img src={picsUrl} />
    </ul>
  );
};

export default NewsItem;
