import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./News.module.css";

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
            picsUrl: media[0]["media-metadata"][2].url
          };
          return singleFeed;
        });
        setFeed(feedData.slice(0, 6));
      })
      .catch(err => err);
  }, []);

  if (feed.length === 0) {
    return <p>Loading</p>;
  }

  const newsItem = feed.map(singleFeed => {
    const { title, url, id, picsUrl } = singleFeed;
    return <NewsItem title={title} url={url} key={id} picsUrl={picsUrl} />;
  });

  return (
    <Carousel className={style.News} infiniteLoop={true} showThumbs={false}>
      {newsItem}
    </Carousel>
  );
};

export default News;
