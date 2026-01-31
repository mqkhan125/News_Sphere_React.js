import { createContext, useContext, useState } from "react";
import api from "../Config/Axios";

export const NewsContext = createContext()

export const NewsContextProvider = ({children}) => {

    const [news , setNews] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchData = async (url = "/everything?q=india") => {
        setLoading(true)
       try {
        const res = await api.get(
          `${url}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`,
        );
        setLoading(false)
        return res.data;
      }
     catch (error) {
        console.log(error)
    }
    setLoading(false)
}

    const value = {
      news,
      setNews,
      fetchData,
      loading
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


