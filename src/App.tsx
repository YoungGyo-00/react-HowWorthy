import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RatingPage from './pages/RatingPage';

const App = () => {
  return (
    <Routes>
      <Route Component={PostPage} path="/post" />
      <Route Component={LoginPage} path="/" />
      <Route Component={RegisterPage} path="/register" />
      <Route Component={RatingPage} path="/rating" />
    </Routes>
  );
};

export default App;
