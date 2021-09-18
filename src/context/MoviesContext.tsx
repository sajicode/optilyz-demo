import { createContext, useState } from 'react';
import { MovieType, ContextType } from '../types';
import axios from 'axios';

export const MoviesContext = createContext<ContextType | null>(null);

const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string | null>(null);

  const fetchMovies = async (keyword: string | null) => {
    setLoader(true);
    setError(null);

    try {
      const { data } = await axios.get(`/api/movies?keyword=${keyword}`);
      if (data.Response === 'False') {
        setKeyword(null);
        setLoader(false);
        setMovies([]);
        setError(data.Error);
        return;
      }
      setKeyword(null);
      setLoader(false);
      setMovies(data.Search);
    } catch (error) {
      setKeyword(null);
      setMovies([]);
      setLoader(false);
      setError('Server Error');
    }
  };

  const addKeyWord = async (keyword: string | null) => {
    setKeyword(keyword);
  };

  return (
    <MoviesContext.Provider
      value={{ movies, error, fetchMovies, loader, keyword, addKeyWord }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
