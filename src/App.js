import './App.css';
import MainPage from './pages/main_page';
import Navbar from './widget/navbar';
import Home from './widget/home';
import Service from './widget/service';
import News from './widget/news';
import SubmissionFlow from './widget/submission_flow';
import Footer from './widget/footer';
import Blank from './widget/blank';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <div className="fixed bg-white top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div class="container">
          <Routes >
            <Route path='/' element={<MainPage />} />
            <Route path='/layanan' element={<Service />} />
            <Route path='/berita' element={<News />} />
            <Route path='/kontak-kami' element={<Footer />} />
            <Route path='/login' element={<MainPage />} />
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
