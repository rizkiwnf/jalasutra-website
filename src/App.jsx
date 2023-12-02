import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import LayoutAdmin from './pages/layout/LayoutAdmin';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Home from './pages/admin/Home';
import Services from './pages/Services';
import News from './pages/News';
import About from './pages/About';
import Login from './pages/auth/Login';
import UserIndex from './pages/admin/user/Index';
import UserDetail from './pages/admin/user/Detail';
import MailSubmissionIndex from './pages/admin/mail/submission/Index';
import MailSubmissionDetail from './pages/admin/mail/submission/Detail';
import MailRecapIndex from './pages/admin/mail/recap/Index';
import MailRecapDetail from './pages/admin/mail/recap/Detail';
import IndexNews from './pages/admin/news/Index';

import 'flowbite/dist/flowbite';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="services" element={<Services />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="user" element={<UserIndex />} />
          <Route path="user/detail" element={<UserDetail />} />
          <Route path="mail/submission" element={<MailSubmissionIndex />} />
          <Route path="mail/submission/detail" element={<MailSubmissionDetail />} />
          <Route path="mail/recap" element={<MailRecapIndex />} />
          <Route path="mail/recap/detail" element={<MailRecapDetail />} />
          <Route path="news" element={<IndexNews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
