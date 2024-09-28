import Fetch from "../Hooks/useFetch";
import Card from "../components/Card";

const MovieList = ({ apiPath }) => {
  const { data: movie } = Fetch({ apiPath });

  return (
    <section>
      <main
        className="grid flex-wrap grid-flow-row"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {movie.length > 0 ? (
          movie.map((item) => <Card key={item.id} movie={item} />)
        ) : (
          <p>No movies found.</p>
        )}
      </main>
    </section>
  );
};

export default MovieList;
