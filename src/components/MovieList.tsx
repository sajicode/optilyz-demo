import React, { Fragment, useContext, useEffect } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { Container, Movies } from '../styles';
import { ContextType } from '../types';
import Error from './Error';
import LoadingPage from './Loader';
import Movie from './Movie';

const MovieList = () => {
  const DefaultMovieList = [
    'matrix',
    'caribbean',
    'toy story',
    'jurassic',
    'star wars',
    'star trek',
    'indiana jones',
    'harry potter',
    'mad max',
    'lord of the rings'
  ];

  const randomMovie =
    DefaultMovieList[Math.floor(Math.random() * DefaultMovieList.length)];

  const { movies, error, loader, fetchMovies } = useContext(
    MoviesContext
  ) as ContextType;

  useEffect(() => {
    fetchMovies(randomMovie);
  }, []);

  if (loader) {
    return <LoadingPage />;
  }

  if (error) {
    console.log({ error });
    return <Error message={error} />;
  }

  return (
    <Fragment>
      <Container>
        <Movies>
          {movies &&
            movies.map((movie) => <Movie movie={movie} key={movie.imdbID} />)}
        </Movies>
      </Container>
    </Fragment>
  );
};

export default MovieList;
