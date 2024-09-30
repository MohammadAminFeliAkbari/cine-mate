import { useEffect, useState } from "react";
import Fetch from "../Hooks/useFetch";
import Card from "../components/Card";
import SkeletonComponents from "../components/skeleton";
import useTitle from "../Hooks/useTitle";

const MovieList = ({ apiPath, title }) => {
  const { data: movie } = Fetch({ apiPath });
  const [loading, setLoading] = useState(false);
  const skeletonNumber = new Array(4).fill(null); // for 4 skeleton cards

  useEffect(() => {
    setLoading(true);
  }, []);

  useTitle(title);

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
