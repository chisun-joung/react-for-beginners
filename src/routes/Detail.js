import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);

  };
  useEffect(() => {
    getMovie();
  }, );

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.movie}>
          <h1 className={styles.movie_title}>{movie.title_long}</h1>
          
          <p className={styles.movie__description}>{movie.description_full}</p>
           <ul className={styles.movie__genres}>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
            </ul> 
            <img src={movie.large_cover_image} alt={movie.title} className={styles.movie_img} />  
        </div>
      )}
      
    </div>
  );
}

export default Detail;
