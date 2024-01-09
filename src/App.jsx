import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import LayoutAdmin from './pages/layout/LayoutAdmin';
import LayoutUserVerified from './pages/layout/LayoutUserVerified';
import Login from './pages/auth/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import News from './pages/News';
import About from './pages/About';
import AdminHome from './pages/user/admin/Home';
import AdminServicesIndex from './pages/user/admin/layanan/Index';
import AdminServicesCreate from './pages/user/admin/layanan/Create';
import AdminServicesDetail from './pages/user/admin/layanan/Detail';
import AdminServicesEdit from './pages/user/admin/layanan/Edit';
import AdminUserIndex from './pages/user/admin/warga/Index';
import AdminUserCreate from './pages/user/admin/warga/Create';
import AdminUserEdit from './pages/user/admin/warga/Edit';
import AdminUserDetail from './pages/user/admin/warga/Detail';
import AdminMailSubmissionIndex from './pages/user/admin/surat/pengajuan/Index';
import AdminMailRecapIndex from './pages/user/admin/surat/rekap/Index';
import AdminMailDetail from './pages/user/admin/surat/Detail';
import AdminNewsIndex from './pages/user/admin/berita/Index';
import UserHome from './pages/user/warga/Home';
import UserService from './pages/user/warga/layanan/Index';
import UserMail from './pages/user/warga/surat/Index';

import 'flowbite-datepicker';
import 'flowbite/dist/flowbite';
import 'flowbite/dist/datepicker.turbo.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        {/* Unauthenticate User Page Route Path */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* User Page Route Path */}
        <Route path="/warga/:id" element={<LayoutUserVerified />}>
          <Route index element={<UserHome />} />
          <Route path="layanan" element={<UserService />} />
          <Route path="surat" element={<UserMail />} />
        </Route>
        {/* Admin Page Route Path */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminHome />} />
          <Route path="services" element={<AdminServicesIndex />} />
          <Route path="service/create" element={<AdminServicesCreate />} />
          <Route path="service/detail/:id" element={<AdminServicesDetail />} />
          <Route path="service/edit/:id" element={<AdminServicesEdit />} />
          <Route path="mail/submission" element={<AdminMailSubmissionIndex />} />
          <Route path="mail/recap" element={<AdminMailRecapIndex />} />
          <Route path="mail/detail" element={<AdminMailDetail />} />
          <Route path="users" element={<AdminUserIndex />} />
          <Route path="user/create" element={<AdminUserCreate />} />
          <Route path="user/detail/:id" element={<AdminUserDetail />} />
          <Route path="user/edit/:id" element={<AdminUserEdit />} />
          <Route path="news" element={<AdminNewsIndex />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
