import logo from './logo.svg';
import './App.css';
import MainPage from './pages/main_page'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layanan from './pages/layanan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main_page" element={<MainPage />} />
        <Route path="/layanan" element={<Layanan />} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
