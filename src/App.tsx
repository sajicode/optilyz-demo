import Header from './components/Header';
import MovieList from './components/MovieList';
import MoviesProvider from './context/MoviesContext';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <MoviesProvider>
      <div>
        <GlobalStyles />
        <Header />
        <MovieList />
      </div>
    </MoviesProvider>
  );
};

export default App;
