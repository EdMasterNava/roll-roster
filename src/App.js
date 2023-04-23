import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import LogIn from './pages/LogIn';
import Events from './pages/Events';
import { AuthProvider } from "./pages/modules/firebase/AuthContext";
import './pages/modules/styles/css/App.css';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
