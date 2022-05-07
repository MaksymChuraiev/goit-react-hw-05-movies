import { Container } from 'components/Header/Header.styled';
import { useLocation } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {
  MovieWrapp,
  MovieImage,
  MovieInfoWrapp,
  MovieTitle,
  MovieText,
  MovieInfoTitle,
  MovieGenresWrapp,
  GoBackButton,
  GoBackIcon,
  MovieMoreInfo,
  MovieMoreInfoTitle,
  MovieInfoLink,
  MovieInfoLinkWrapp,
} from './MovieDetails.styled';

export const MovieDetails = ({ details }) => {
  const location = useLocation();

  console.log(location);
  const { title, genres, overview, image, score } = details;

  return (
    <Container>
      <MovieWrapp>
        <MovieImage src={`https://image.tmdb.org/t/p/w500${image}`} />
        <MovieInfoWrapp>
          <MovieTitle>{title}</MovieTitle>
          <MovieText>User Score: {score * 10}%</MovieText>
          <MovieInfoTitle>Overview</MovieInfoTitle>
          <MovieText>{overview}</MovieText>
          <MovieInfoTitle>Genres</MovieInfoTitle>
          <MovieGenresWrapp>
            {genres.map(genre => (
              <MovieText key={genre.id}>{genre.name}</MovieText>
            ))}
          </MovieGenresWrapp>
          <GoBackButton>
            <GoBackIcon />
            Go back
          </GoBackButton>
        </MovieInfoWrapp>
      </MovieWrapp>
      <MovieMoreInfo>
        <MovieMoreInfoTitle>Additional information</MovieMoreInfoTitle>
        <MovieInfoLinkWrapp>
          <MovieInfoLink
            onClick={() => Scroll.animateScroll.scrollMore(500)}
            to="cast"
          >
            Cast
          </MovieInfoLink>
          <MovieInfoLink
            onClick={() => Scroll.animateScroll.scrollMore(500)}
            to="reviews"
          >
            Reviews
          </MovieInfoLink>
        </MovieInfoLinkWrapp>
      </MovieMoreInfo>
    </Container>
  );
};
