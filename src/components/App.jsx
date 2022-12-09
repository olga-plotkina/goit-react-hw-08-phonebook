import React from 'react';
// import { lazy } from 'react';
import HomePage from 'pages/Home';
import { RegisterPage } from 'pages/Register';

import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/logim" element={<LoginPage />} /> */}
        {/* <Route path="/contacts" element={<ContactsPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
