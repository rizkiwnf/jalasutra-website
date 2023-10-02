import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main_page'
import Layanan from './pages/layanan';
import Berita from './pages/Berita';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main_page" element={<MainPage />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/berita" element={<Berita />} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;