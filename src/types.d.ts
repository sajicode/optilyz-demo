export interface MovieType {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface APIResponse {
  Search: MovieType[];
}

interface ErrorResponse {
  Response: string;
  Error: string;
}

type ContextType = {
  movies: MovieType[];
  error: string | null;
  loader: boolean;
  keyword: string | null;
  fetchMovies: (keyword: string | null) => Promise<void>;
  addKeyWord: (keyword: string | null) => void;
};
