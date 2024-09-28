import { useSearchParams } from "react-router-dom";
import Fetch from "../Hooks/useFetch";
import Card from "../components/Card";
import NotFound from "./NotFound";

const MovieList = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerms = searchParams.get("query");

  const { data: movie } = Fetch({ apiPath, queryTerms });

  return (
    <section>
      <main
        className="grid flex-wrap grid-flow-row"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {Array.isArray(movie) && movie.length > 0 ? (
          movie.map((item) => <Card key={item.id} movie={item} />)
        ) : (
          <NotFound />
        )}
      </main>
    </section>
  );
};

export default MovieList;
