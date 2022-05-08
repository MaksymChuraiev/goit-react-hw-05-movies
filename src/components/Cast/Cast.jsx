import { useState, useEffect } from 'react';
import {
  CastList,
  CastItem,
  CastImage,
  CastNameTitle,
  CastCharacterTitle,
  CastNoImage,
} from './Cast.styled';
import { fetchMovieCast } from 'services/api';
import { useParams } from 'react-router-dom';
import { Container } from 'components/Header/Header.styled';
import imageno from '../../image/noimage.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  useEffect(() => {
    fetchMovieCast(movieId).then(res => setMovieCast(res));
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <Container>
          <CastList>
            {movieCast.map(({ id, name, image, character }) => (
              <CastItem key={id}>
                {image ? (
                  <CastImage
                    alt="title"
                    src={`https://image.tmdb.org/t/p/w300/${image}`}
                  />
                ) : (
                  <CastNoImage src={imageno} />
                )}

                <CastNameTitle>{name}</CastNameTitle>
                <CastCharacterTitle>{character}</CastCharacterTitle>
              </CastItem>
            ))}
          </CastList>
        </Container>
      )}
    </>
  );
};

export default Cast;
