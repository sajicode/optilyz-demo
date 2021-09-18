import { MovieType } from '../types';

const defaultPhoto =
  'https://res.cloudinary.com/sajicode/image/upload/v1610909420/photo_not_found.jpg';

const Movie = ({ movie: { Title, Poster } }: { movie: MovieType }) => {
  return (
    <div>
      <figure>
        <img
          src={Poster === 'N/A' ? defaultPhoto : Poster}
          alt={Title}
          width={300}
        />
      </figure>
    </div>
  );
};

export default Movie;
