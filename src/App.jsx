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
import UserCreate from './pages/admin/user/Create';
import UserEdit from './pages/admin/user/Edit';
import MailSubmissionIndex from './pages/admin/mail/submission/Index';
import MailRecapIndex from './pages/admin/mail/recap/Index';
import MailDetail from './pages/admin/mail/Detail';
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
          <Route path="user/create" element={<UserCreate />} />
          <Route path="user/edit" element={<UserEdit />} />
          <Route path="mail/submission" element={<MailSubmissionIndex />} />
          <Route path="mail/recap" element={<MailRecapIndex />} />
          <Route path="mail/detail" element={<MailDetail />} />
          <Route path="news" element={<IndexNews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
