import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [ theme, setTheme ] = useState('light-theme');

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
