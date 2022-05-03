import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { HomePage } from 'pages/HomePage.jsx';
import { MoviesPage } from 'pages/MoviesPage.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
};
