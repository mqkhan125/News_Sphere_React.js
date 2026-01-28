import React, { useEffect } from 'react'
import Wrapper from '../Component/Wrapper'
import api from '../Config/Axios';
import { useNewsContext } from '../ContextApi/NewsContext';

const News = ({className}) => {
  return (
    <Wrapper>
      <div className={`grid grid-cols-4 py-3 gap-6 bg-[#0e131b] ${className}`}>
        <NewsCard />
        {/* <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard /> */}
      </div>
    </Wrapper>
  );
}

// 0758b6f658254f1b822e62d6c2413ddf

const NewsCard = () => {

   const state = useNewsContext();
   console.log(state);

  const fetchData = async () => {
    const res = await api.get(
         `/everything?q=tesla&from=2025-12-28&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`
    )
    console.log(res.data)
  }



  useEffect(() => {
    fetchData()
  },[])

    return (
      <div className="card bg-black/20 text-white shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
}

export default News