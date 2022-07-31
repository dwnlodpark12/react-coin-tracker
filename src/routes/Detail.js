import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

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
    <div className={styles.detail_wrap}>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.movie_container}>
          <h2 className={styles.movie_title}>{movie.title}</h2>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            className={styles.movie_img}
          />
          <div className={styles.movie_rate}>RATE : {movie.rating}</div>
          <div className={styles.movie_year}>YEAR : {movie.year}</div>
          <div className={styles.movie_genres}>
            GENRE :
            {movie.genres.map((gen) => (
              <div key={gen} className={styles.genres}>
                {gen}
              </div>
            ))}
          </div>
          <div className={styles.movie_desc}>
            DESCRIPTION : <br />
            <br />
            {movie.description_full}
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
