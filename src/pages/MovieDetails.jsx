import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useTitle from "../Hooks/useTitle";

const MovieDetails = () => {
  const { id: movie_id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`;
  const [data, setData] = useState({});
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : Logo;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        setData(item); // Updated to setData for clarity
      });
  }, [url]);

  useTitle(data.title);

  return (
    <main className='bg-blue-300'>
      <section className="flex justify-around flex-wrap py-5 m-4 items-start">
        {loading ? (
          <>
            <div className="max-w-sm">
              <img src={image} alt={data.title} className="rounded-lg" />
            </div>
            <div className="max-w-2xl text-gray-700 text-lg flex flex-col gap-4 m-2">
              <h1 className="text-4xl font-bold my-3">{data.title}</h1>
              <p className="text-1xl">{data.overview}</p>
              <div className="flex gap-2">
                {Array.isArray(data.genres) &&
                  data.genres.map((item) => (
                    <h3
                      key={item.id}
                      className="p-2 border-2 border-solid rounded border-gray-200"
                    >
                      {item.name}
                    </h3>
                  ))}
              </div>

              {/* item.vote_average item.vote_count */}

              <div class="flex items-center ">
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p class="ms-2 text-sm font-bold text-gray-500">
                  {data.vote_average}
                </p>
                <span class="w-1 h-1 mx-1.5 bg-gray-600 rounded-full dark:bg-gray-400"></span>
                <h3
                  href="#"
                  class="text-sm font-medium text-gray-600 underline hover:no-underline"
                >
                  {data.vote_count} reviews
                </h3>
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
                Release Date:
                <h5 className="text-gray-500">{data.release_date}</h5>
              </h5>

              <h5 className="text-gray-600 flex gap-2">
                IMDB Code:<h5 className="text-gray-500">{data.imdb_id}</h5>
              </h5>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-sm">
              <Skeleton height={550} width={380} />
            </div>

            <div className="max-w-2xl text-gray-700 text-lg flex flex-col ">
              <Skeleton width={100} />
              <Skeleton width={400} height={200} />
              <Skeleton width={120} />
              <Skeleton width={90} />
              <Skeleton width={80} />
              <Skeleton width={150} />
              <Skeleton width={100} />
            </div>
          </>
        )}
      </section>
      <hr />
    </main>
  ); // Display movie title or loading message
};

export default MovieDetails;
