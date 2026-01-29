import React, { useEffect } from "react";
import Wrapper from "../Component/Wrapper";
import { useNewsContext } from "../ContextApi/NewsContext";

const News = ({ className }) => {
  const { news, setNews, fetchData } = useNewsContext();
  console.log(news);

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setNews(data.articles);
    })();
  }, []);

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 py-3 gap-6 bg-[#0e131b] ${className}`}>
        {news.map((newsDetails, index) => {
          return  <NewsCard key={index} newsDetails={newsDetails} />;
        })}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({newsDetails}) => {
  return (
    <div className="card bg-black/20 text-white shadow-sm">
      <figure>
        <img src={newsDetails.urlToImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{newsDetails.title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default News;
