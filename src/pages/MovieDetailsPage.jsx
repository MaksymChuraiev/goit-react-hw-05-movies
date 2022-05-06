import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetailsMovies } from '../services/api.js';
import { MovieDetails } from 'components/MovieDetails/MovieDetails.jsx';

export const MoviesDetailsPage = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchDetailsMovies(movieId).then(setDetails);
  }, [movieId]);

  return (
    <>
      {details && <MovieDetails details={details} />}
      <Outlet />
    </>
  );
};
