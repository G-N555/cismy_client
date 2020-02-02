import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const News = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_NYT_KEY}`
      )
      .then(res => {
        const feedData = res.data.results.map(feed => {
          console.log(feed);
          const { title, url, id, media } = feed;
          const singleFeed = {
            title,
            url,
            id,
            picsUrl: media[0]["media-metadata"][0].url
          };
          return singleFeed;
        });
        setFeed(feedData);
      })
      .catch(err => err);
  }, []);

  const feedList = feed.map(singleFeed => {
    const { title, url, id, picsUrl } = singleFeed;
    return <NewsItem title={title} url={url} key={id} picsUrl={picsUrl} />;
  });

  return <>{feedList}</>;
};

export default News;
