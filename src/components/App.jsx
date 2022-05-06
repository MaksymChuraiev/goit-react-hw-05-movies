import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { HomePage } from 'pages/HomePage.jsx';
import { MoviesPage } from 'pages/MoviesPage.jsx';
import { MoviesDetailsPage } from 'pages/MovieDetailsPage.jsx';
import { Cast } from './Cast/Cast.jsx';
import { Reviews } from './Reviews/Reviews.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
