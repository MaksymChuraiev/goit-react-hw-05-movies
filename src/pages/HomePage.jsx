import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchGetTrending } from 'services/api';
import { useLocation } from 'react-router-dom';

export const HomePage = () => {
  const [movies, setMovie] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetchGetTrending().then(res => setMovie(res));
  }, []);

  return movies && <MoviesList movies={movies} location={location} />;
};
