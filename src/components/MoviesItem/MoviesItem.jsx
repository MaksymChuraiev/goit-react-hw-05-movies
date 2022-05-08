import { useLocation } from 'react-router-dom';
import { FilmItems, FilmImage, FilmTitle, FilmLink } from './MoviesItem.styled';
import PropTypes from 'prop-types';

export const MoviesItem = ({ id, img, title }) => {
  const location = useLocation();

  return (
    <FilmItems>
      <FilmLink to={`/movies/${id}`} state={{ from: location }}>
        <FilmImage alt="title" src={`https://image.tmdb.org/t/p/w500/${img}`} />
        <FilmTitle>{title}</FilmTitle>
      </FilmLink>
    </FilmItems>
  );
};

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
