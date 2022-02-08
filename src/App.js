import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [ theme, setTheme ] = useState('light-theme');
  const isAuthenticated = false;

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme(theme => theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} isAuthenticated={false} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace={true} /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
