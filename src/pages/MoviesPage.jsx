import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { fetchSearchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MoviesPage = () => {
  const [searchName, setSearchName] = useState('');
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const onSearchName = name => {
    setSearchName(name);
    setSearchParams({ query: searchName });
  };

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    fetchSearchMovies(searchName).then(res => setSearchMovies(res));
  }, [searchName]);
  console.log(searchName);
  console.log(searchQuery);

  return (
    <>
      <SearchMovies onSub={onSearchName} />
      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};
