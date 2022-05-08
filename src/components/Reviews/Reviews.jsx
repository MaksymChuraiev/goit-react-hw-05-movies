import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/api';
import { useParams } from 'react-router-dom';
import {
  ReviewsListWrapp,
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  ReviewsText,
  ReviewsNoText,
} from './Reviews.styled';
import { Container } from 'components/Header/Header.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(res => setMovieReviews(res));
  }, [movieId]);

  return (
    <>
      {movieReviews ? (
        <Container>
          <ReviewsListWrapp>
            <ReviewsList>
              {movieReviews.map(({ id, author, content }) => (
                <ReviewsItem key={id}>
                  <ReviewsTitle>Author: {author}</ReviewsTitle>
                  <ReviewsText>{content}</ReviewsText>
                </ReviewsItem>
              ))}
            </ReviewsList>
          </ReviewsListWrapp>
        </Container>
      ) : (
        <ReviewsNoText>We don't have reviews for this movie</ReviewsNoText>
      )}
    </>
  );
};

export default Reviews;
