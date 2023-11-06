import './App.css';
import MainPage from './pages/main_page';
import ServicePage from './pages/service_page';
import NewsPage from './pages/news_page';
import AboutPage from './pages/about_page';
import Footer from './widget/footer';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';

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
