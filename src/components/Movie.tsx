import React from 'react';
import { MovieItem, MovieItemImage } from '../styles/Movie';
import { MovieType } from '../types';

const defaultPhoto =
  'https://res.cloudinary.com/sajicode/image/upload/v1610909420/photo_not_found.jpg';

const Movie = ({ movie: { Title, Poster } }: { movie: MovieType }) => {
  return (
    <div>
      <MovieItem>
        <MovieItemImage
          src={Poster === 'N/A' ? defaultPhoto : Poster}
          alt={Title}
          width={300}
        />
      </MovieItem>
    </div>
  );
};

export default Movie;
