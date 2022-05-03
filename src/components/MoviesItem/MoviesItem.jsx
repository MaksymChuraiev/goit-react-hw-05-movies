import { FilmItems, FilmImage, FilmTitle } from './MoviesItem.styled';

export const MoviesItem = ({ id, img, title }) => {
  return (
    <FilmItems>
      <FilmImage alt="title" src={`https://image.tmdb.org/t/p/w500${img}`} />
      <FilmTitle>{title}</FilmTitle>
    </FilmItems>
  );
};
