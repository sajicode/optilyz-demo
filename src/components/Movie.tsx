import { useState } from 'react';
import { MovieItem, MovieItemImage } from '../styles/Movie';
import { MovieType } from '../types';

const defaultPhoto = '/images/movie-placeholder.png';

const Movie = ({ movie: { Title, Poster } }: { movie: MovieType }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div>
      <MovieItem>
        {!loaded && (
          <MovieItemImage src={defaultPhoto} alt={Title} width={300} />
        )}
        <MovieItemImage
          src={Poster === 'N/A' ? defaultPhoto : Poster}
          alt={Title}
          width={300}
          onLoad={() => setLoaded(true)}
        />
      </MovieItem>
    </div>
  );
};

export default Movie;
