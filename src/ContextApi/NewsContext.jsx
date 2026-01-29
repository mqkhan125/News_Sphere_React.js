import { createContext, useContext, useState } from "react";
import api from "../Config/Axios";

export const NewsContext = createContext()

export const NewsContextProvider = ({children}) => {

    const [news , setNews] = useState([])


    const fetchData = async (url = "/everything?q=tesla") => {
       try {
        const res = await api.get(
          `${url}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`,
        );
        return res.data;
      }
     catch (error) {
        console.log(error)
    }
}

    const value = {
      news,
      setNews,
      fetchData,
    };

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNewsContext = () => {
    return useContext(NewsContext)
}


