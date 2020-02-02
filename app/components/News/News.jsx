import React, { useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const News = () => {
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_NYT_KEY}`
      )
      .then(res => this.setState({ feed: res.data.results, loading: false }))
      .catch(err => err);
  });

  return (
    <>
      <NewsItem />
    </>
  );
};

export default News;
