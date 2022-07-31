import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  const sumamryWords = summary.split(" ");
  // if (wordBreak.length > 100) {
  console.log(genres);
  // wordBreak.splice(100, wordBreak.length - 1, "...");
  // }
  return (
    <div className={styles.movieBox}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} className={styles.movie_img} />
        <h2 className={styles.movie_title}>{title}</h2>
        <p className={styles.movie_year}>({year})</p>
        <ul className={styles.movie_genres_title}>
          <div className={styles.movie_genres}>GENRE :</div>
          {genres.map((gr) => (
            <li key={gr} className={styles.movie_genre}>
              {gr}
            </li>
          ))}
        </ul>
        <p className={styles.movie_summary}>
          {summary.length > 240 ? `${summary.slice(0, 240)}...` : summary}
        </p>
      </Link>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
