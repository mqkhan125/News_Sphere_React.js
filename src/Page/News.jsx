import React, { useEffect } from "react";
import Wrapper from "../Component/Wrapper";
import { useNewsContext } from "../ContextApi/NewsContext";
import Loader from "../Component/Loader";

const News = ({ className }) => {
  const { news, setNews, fetchData, loading } = useNewsContext();
  console.log(news);

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setNews(data.articles);
    })();
  }, []);

  if(loading) return <Loader className={'w-fit m-auto py-24 mb-32'} />

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 py-3 gap-6 bg-[#0e131b] ${className}`}>
        {news.map((newsDetails, index) => {
          if (!newsDetails.urlToImage) return null;
            return <NewsCard key={index} newsDetails={newsDetails} />;
        })}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ newsDetails }) => {
  return (
    <div className="card bg-black/20 text-white shadow-sm">
      <figure className="h-48 overflow-hidden">
        <img
          src={newsDetails?.urlToImage}
          alt={newsDetails?.title}
          className="w-full aspect-video object-contain"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title line-clamp-2">{newsDetails.title}</h2>

        <p className="line-clamp-3 min-h-[4.5em] text-sm text-gray-300">
          {newsDetails.description || "No description available."}
        </p>

        <div className="card-actions justify-end">
          <button
            className="badge badge-outline mt-4 py-5 px-5 cursor-pointer"
            onClick={() => window.open(newsDetails.url, "_blank")}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};


export default News;
