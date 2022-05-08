import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchGetTrending } from 'services/api';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetchGetTrending().then(res => setMovie(res));
  }, []);

  return (
    <>
      {movies && <MoviesList movies={movies} />}
      <Outlet />
    </>
  );
};

export default HomePage;
