import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
// import { HomePage } from 'pages/HomePage.jsx';
// import { MoviesPage } from 'pages/MoviesPage.jsx';
// import { MoviesDetailsPage } from 'pages/MovieDetailsPage.jsx';
// import { Cast } from './Cast/Cast.jsx';
// import { Reviews } from './Reviews/Reviews.jsx';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../pages/MoviesPage.jsx'));
const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
