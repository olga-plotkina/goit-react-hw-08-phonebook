import React from 'react';
// import { lazy } from 'react';
import HomePage from 'pages/Home';
import RegisterPage from 'pages/Register';
import LoginPage from 'pages/Login';
import ContactsPage from 'pages/Contacts';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => dispatch(refreshUser), [dispatch]);
  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
