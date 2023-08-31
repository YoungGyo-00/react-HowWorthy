import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostPage from './app/post/PostPage';
import LoginPage from './app/login/LoginPage';
import RegisterPage from './app/register/RegisterPage';
import RatingPage from './app/rating/RatingPage';

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
