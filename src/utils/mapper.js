export const mapper = films =>
  films.map(({ poster_path, id, title }) => ({
    img: poster_path,
    id,
    title,
  }));
