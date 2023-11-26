import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import LayoutAdmin from './pages/layout/LayoutAdmin';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import News from './pages/News';
import About from './pages/About';
import Home from './pages/admin/Home';
import IndexUser from './pages/admin/user/Index';

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
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="user" element={<IndexUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
