import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg , title, summary, genres}){
    return( // parent component에게서 받아 올 props
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie___img} />
            <div>
                <h2 className={styles.movie___title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : 
                summary}</p>
                <ul className={styles.movie___genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
} 

export default Movie;