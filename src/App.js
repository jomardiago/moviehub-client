import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/auth';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const { user } = React.useContext(AuthContext);
  const isAuthenticated = Object.keys(user).length > 0;

  return (
    <>
      <Header isAuthenticated={Object.keys(user).length > 0} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace={true} /> } />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" replace={true} /> } />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" replace={true} /> } />
      </Routes>
    </>
  );
}

export default App;
