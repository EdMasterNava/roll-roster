import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import LogIn from './pages/LogIn';
import './pages/modules/styles/css/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
