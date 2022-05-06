import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { fetchSearchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MoviesPage = () => {
  const [searchName, setSearchName] = useState('');
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchName = name => {
    setSearchName(name);
    // решить с возвратом
    setSearchParams({ query: name });
  };

  useEffect(() => {
    if (searchName === '') {
      return;
    }
    fetchSearchMovies(searchName).then(res => setSearchMovies(res));
  }, [searchName]);

  console.log(searchName);
  console.log(searchMovies);
  console.log(searchParams);
  return (
    <>
      <SearchMovies onSub={onSearchName} />
      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};
