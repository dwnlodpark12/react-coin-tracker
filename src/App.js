import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // short version like '김밥'
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    // long step1

    // .then((res) => res.json())
    // .then((json) => {
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // });

    // step 2
    // const json =  await response.json();
    // setMovies(json.data.movies);
    // setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                <div className="test">GENRE : </div>
                {movie.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
