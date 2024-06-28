// AppRouter.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/login';
import Dashoard from '../pages/dashboard';
// import HomePage from './HomePage';
// import ProfilePage from './ProfilePage';
// import NotFoundPage from './NotFoundPage';

const AppRouter: React.FC = () => {
  const isLoggedIn = true; // Replace with your authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashoard />} />
        {/* <PrivateRoute
          path="/home"
          element={<HomePage />}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          path="/profile"
          element={<ProfilePage />}
          isLoggedIn={isLoggedIn}
        />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
