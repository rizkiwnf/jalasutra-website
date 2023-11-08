import './App.css';
import MainPage from './pages/main_page';
import ServicePage from './pages/service_page';
import NewsPage from './pages/news_page';
import AboutPage from './pages/about_page';
import Login from './pages/login';
import Dashboard from './pages/admin/dashboard'
import Users from './pages/admin/users';
import { Route, Routes } from 'react-router-dom';
import RekapSurat from './pages/admin/rekap_surat';
import PengajuanSurat from './pages/admin/pengajuan_surat';
import DetailUser from './pages/admin/detail_user';

function App() {
  return (
    <>
      <div className="App">
        <div class="container">
          <Routes >
            <Route index element={<MainPage />}/>
            <Route path='/' element={<MainPage />} />
            <Route path='/layanan' element={<ServicePage />} />
            <Route path='/berita' element={<NewsPage />} />
            <Route path='/tentang-kami' element={<AboutPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
            <Route path='/rekap-surat' element={<RekapSurat />} />
            <Route path='/pengajuan-surat' element={<PengajuanSurat />} />
            <Route path='/profile-pengguna' element={<DetailUser />} />
          </Routes>
        </div>
      </div>
      {/* <div className="mt-[80px]">
          <Home />
          <Service />
          <News />
          <SubmissionFlow />
          <Footer />
        </div> */}

    </>
  );
}

export default App;
