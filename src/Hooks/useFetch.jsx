import { useState, useEffect } from "react";

const Fetch = ({ apiPath, queryTerms = "" }) => {
  const url =
    queryTerms != ""
      ? `https://api.themoviedb.org/3/search/movie?query=${queryTerms}&api_key=${process.env.REACT_APP_API_KEY}`
      : `https://api.themoviedb.org/3/movie/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;

  // const url = `https://api.themoviedb.org/3/movie/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const item = await response.json();
        setData(item.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getResults();
  }, [url]);
  return { data };
};

export default Fetch;
