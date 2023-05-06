import React from 'react';
//Page Switcher
import { Route, Routes } from 'react-router-dom';
//Main Pages that will be assigned to specific endpoints 
import Home from './pages/Home';
import Join from './pages/Join';
import LogIn from './pages/LogIn';
import Events from './pages/Events';
//Providing Auth State across entire App
import { AuthProvider } from "./pages/modules/firebase/AuthContext";
//Applying non Material UI Styling 
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
