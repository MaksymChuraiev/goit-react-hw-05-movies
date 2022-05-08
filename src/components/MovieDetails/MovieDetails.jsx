import { Container } from 'components/Header/Header.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import PropTypes from 'prop-types';
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
  const [backLocation, setBackLocation] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (backLocation === null) {
      setBackLocation(location?.state?.from ?? '/');
    }
  }, [backLocation, location?.state?.from]);

  const { title, genres, overview, image, score } = details;

  const onGoBack = () => {
    navigate(backLocation);
  };

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
          <GoBackButton type="button" onClick={onGoBack}>
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

MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
