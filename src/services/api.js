import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '092a845a33f61eebb0542bc73fc3415f';

export const fetchGetTrending = async () => {
  const trendingMovies = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return trendingMovies.data.results.map(({ poster_path, id, title }) => ({
    img: poster_path,
    id,
    title,
  }));
};

export const fetchSearchMovies = async query => {
  const searchMovies = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}`
  );
  return searchMovies.data.results.map(({ poster_path, id, title }) => ({
    img: poster_path,
    id,
    title,
  }));
};

export const fetchDetailsMovies = async id => {
  const moviesDetails = await axios.get(`movie/${id}?api_key=${KEY}`);
  const { title, genres, overview, poster_path, vote_average } =
    moviesDetails.data;
  const movieInfo = {
    title,
    genres,
    overview,
    image: poster_path,
    score: vote_average,
  };

  return movieInfo;
};

export const fetchMovieCast = async id => {
  const movieCast = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
  return movieCast.data.cast.map(({ id, name, profile_path, character }) => ({
    id,
    name,
    image: profile_path,
    character,
  }));
};

export const fetchMovieReviews = async id => {
  const movieReviews = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
  return movieReviews.data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
};
