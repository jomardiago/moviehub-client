import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/auth';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const ContentContainer = styled.div`
  margin-top: 100px;
`;

function App() {
  const { user } = React.useContext(AuthContext);
  const isAuthenticated = user ? Object.keys(user).length > 0 : false;

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <ContentContainer>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" /> } />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" /> } />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" /> } />
        </Routes>
      </ContentContainer>
    </>
  );
}

export default App;
