import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MoviesContext } from '../context/MoviesContext';
import {
  SearchBox,
  SearchInputGroup,
  SearchInput,
  SearchInputGroupBtn,
  SearchBtn
} from '../styles';
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
    <SearchBox>
      <form onSubmit={(e) => handleFetchMovies(e, keyword)}>
        <SearchInputGroup>
          <SearchInput
            type="text"
            name="search"
            placeholder="Enter a movie title"
            onChange={handleForm}
          />
          <SearchInputGroupBtn>
            <SearchBtn
              disabled={keyword === null || keyword === '' ? true : false}
            >
              <FontAwesomeIcon icon={faSearch} />
            </SearchBtn>
          </SearchInputGroupBtn>
        </SearchInputGroup>
      </form>
    </SearchBox>
  );
};

export default Search;
