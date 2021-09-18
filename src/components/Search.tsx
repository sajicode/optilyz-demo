import { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { ContextType } from '../types';

const Search: React.FC = () => {
  const { fetchMovies, addKeyWord, keyword } = useContext(
    MoviesContext
  ) as ContextType;

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    addKeyWord(e.currentTarget.value);
  };

  const handleFetchMovies = async (
    e: React.FormEvent,
    keyword: string | null
  ) => {
    e.preventDefault();
    await fetchMovies(keyword);
    addKeyWord(null);
  };

  return (
    <div>
      <form onSubmit={(e) => handleFetchMovies(e, keyword)}>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Enter a movie title"
            onChange={handleForm}
          />
          <span>
            <button
              disabled={keyword === null || keyword === '' ? true : false}
            >
              Search
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Search;
