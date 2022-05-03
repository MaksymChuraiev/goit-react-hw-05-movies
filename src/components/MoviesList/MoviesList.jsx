import { Container } from 'components/Header/Header.styled';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { FilmsList } from './MoviesList.styled';

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
