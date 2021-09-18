import Header from './components/Header';
import MovieList from './components/MovieList';
import MoviesProvider from './context/MoviesContext';

const App = () => {
  return (
    <MoviesProvider>
      <div>
        <Header />
        <MovieList />
      </div>
    </MoviesProvider>
  );
};

export default App;
