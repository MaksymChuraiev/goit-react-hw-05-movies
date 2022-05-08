import { Container } from 'components/Header/Header.styled';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { FilmsList } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      <FilmsList>
        {movies.map(({ id, title, img }) => (
          <MoviesItem key={id} id={id} title={title} img={img} />
        ))}
      </FilmsList>
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
