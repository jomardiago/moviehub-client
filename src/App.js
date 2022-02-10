import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/auth';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const { user } = React.useContext(AuthContext);
  const [ theme, setTheme ] = React.useState('light-theme');
  const isAuthenticated = false;

  React.useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme(theme => theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  return (
    <>
      <AuthProvider>
        <Header toggleTheme={toggleTheme} theme={theme} isAuthenticated={user} />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace={true} /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
