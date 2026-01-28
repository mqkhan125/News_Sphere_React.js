import { createContext, useContext } from "react";

export const NewsContext = createContext()

export const NewsContextProvider = ({children}) => {
    return (
        <NewsContext.Provider value={'Qasim'}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNewsContext = () => {
    return useContext(NewsContext)
}


