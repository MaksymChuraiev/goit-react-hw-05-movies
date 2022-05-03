import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchGetTrending } from 'services/api';
import { mapper } from 'utils/mapper';

export const HomePage = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetchGetTrending().then(movies => {
      const mapperMovies = mapper(movies.data.results);
      setMovie(mapperMovies);
    });
  }, []);

  return movies && <MoviesList movies={movies} />;
};
