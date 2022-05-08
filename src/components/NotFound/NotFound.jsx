import { Container } from 'components/Header/Header.styled';
import { NotFoundText, NotFoundLink, NotFoundWrap } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <NotFoundWrap>
        <NotFoundText>
          Sorry, page not found!
          <NotFoundLink to="/">Go to homepage</NotFoundLink>
        </NotFoundText>
      </NotFoundWrap>
    </Container>
  );
};
