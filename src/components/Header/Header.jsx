import { HeaderSection, Container, Headerlink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Headerlink to="/">Home</Headerlink>
        <Headerlink to="/movies">Movies</Headerlink>
      </Container>
    </HeaderSection>
  );
};
