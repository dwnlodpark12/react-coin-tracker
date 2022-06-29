import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const res = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(res.data.movie);
    setMovie(res.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.large_cover_image} />
          <div>{movie.rating}</div>
          <div>{movie.year}</div>
          <div>
            {movie.genres.map((gen) => (
              <div key={gen}>{gen}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
