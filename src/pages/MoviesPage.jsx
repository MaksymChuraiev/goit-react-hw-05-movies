import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { fetchSearchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  // const [searchName, setSearchName] = useState('');
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const onSearchName = name => {
    // setSearchName(name);
    setSearchParams({ query: name });
  };

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }

    if (searchQuery === '') {
      return;
    }

    fetchSearchMovies(searchQuery).then(res => setSearchMovies(res));
  }, [searchQuery]);

  return (
    <>
      <SearchMovies onSub={onSearchName} />
      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};

export default MoviesPage;
