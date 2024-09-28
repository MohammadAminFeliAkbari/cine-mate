import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../assets/Logo.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieDetails = () => {
  const { id: movie_id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`;
  const [data, setData] = useState({});
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : Logo;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        setData(item); // Updated to setData for clarity
        console.log(item);
      });
  }, [url]); // Added url to dependency array

  return (
    <main>
      <hr />
      <section className="flex justify-around flex-wrap py-5 m-4 items-start">
        <div className="max-w-sm">
          <img src={image} alt={data.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg flex flex-col gap-4 m-2">
          <h1 className="text-4xl font-bold my-3">{data.title}</h1>
          <p className="text-1xl">
            {data.overview}
          </p>
          <div className="flex gap-2">
            {data.genres &&
              data.genres.length > 0 &&
              data.genres.map((item) => (
                <h3 key={item.id} className="p-2 border-2 border-solid rounded border-gray-200">
                  {item.name}
                </h3>
              ))}
          </div>

          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFD700", fontSize: "13px" }}
            />
            <h5>
              {data.vote_average} * {data.vote_count} views
            </h5>
          </div>

          <h5 className="text-gray-600 flex gap-2">
            Runtime: <h5 className="text-gray-500">{data.runtime}min</h5>
          </h5>

          <h5 className="text-gray-600 flex gap-2">
            Budget: <h5 className="text-gray-500">{data.budget}$</h5>
          </h5>

          <h5 className="text-gray-600 flex gap-2">
            Revenue: <h5 className="text-gray-500">{data.revenue}$</h5>
          </h5>

          <h5 className="text-gray-600 flex gap-2">
            Release Date:<h5 className="text-gray-500">{data.release_date}</h5>
          </h5>

          <h5 className="text-gray-600 flex gap-2">
            IMDB Code:<h5 className="text-gray-500">{data.imdb_id}</h5>
          </h5>
        </div>
      </section>
      <hr />
    </main>
  ); // Display movie title or loading message
};

export default MovieDetails;

const Box = styled.h3`
  padding: 5px 10px;
  border: 0.6px solid gray;
  border-radius: 5px;
`;
