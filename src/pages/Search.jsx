import { useSearchParams } from "react-router-dom";
import Fetch from "../Hooks/useFetch";
import Card from "../components/Card";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import SkeletonComponents from "../components/skeleton";

const MovieList = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerms = searchParams.get("query");
  const [loading, setLoading] = useState(false);
  const skeletonNumber = new Array(4).fill(null); // for 4 skeleton cards

  const { data: movie } = Fetch({ apiPath, queryTerms });

  useEffect(() => {
      setLoading(true);
  }, []);

  return (
    <section>
      <main
        className="grid flex-wrap grid-flow-row bg-blue-900"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {loading
          ? movie.map((item) => <Card key={item.id} movie={item} />)
          : skeletonNumber.map((_, index) => (
              <SkeletonComponents key={index} />
            ))}
      </main>
    </section>
  );
};

export default MovieList;
