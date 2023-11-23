import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import News from './pages/News';
import 'flowbite';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
