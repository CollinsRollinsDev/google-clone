import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [imageResult, setImageResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("Collins Rollins");

  const getResults = async (urlToCall) => {
    setLoading(true);

    try {
      const myResponse = await fetch(`${baseUrl}${urlToCall}`, {
        method: "GET",
        headers: {
          "x-user-agent": "desktop",
          "x-proxy-location": "EU",
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
          "x-rapidapi-key":
            "09f37c8ee4mshb2ae5b9a95a2d29p1ede41jsn6de4f786040a",
        },
      });
      const data = await myResponse.json();
      console.log(urlToCall, "as url");
      if (urlToCall.startsWith("/news")) {
        console.log("news");
        setResults(data.entries);
      } else if (urlToCall.startsWith("/images")) {
        setImageResult(data.image_results);
        console.log("images");
      } else if (urlToCall.startsWith("/search")) {
        setResults(data.results);
      } else if (urlToCall.startsWith("/videos")) {
        setResults(data.results);
      } else {
        console.log("others");
      }
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log("error  as:", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        loading,
        setCount,
        count,
        imageResult,
        setImageResult,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
