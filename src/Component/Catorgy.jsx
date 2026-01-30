import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../ContextApi/NewsContext";

const Catorgy = ({className}) => {

  const {setNews, fetchData} = useNewsContext()

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async(e) => {
      let cat = e.target.value;
      let data = await fetchData(`/everything?q=${cat}`);
       setNews(data.articles);
    }

  return (
    <div className={`bg-[#0e131b] ${className}`}>
      <Wrapper>
        <div className="max-w-full w-fit flex m-auto overflow-x-auto scroll-none px-4 gap-5">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                value={category}
                className="btn btn-primary"
                onClick={handleClick}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Catorgy;
