import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main_page";
import Layanan from "./pages/layanan";
// import Berita from "./pages/berita";
// import Tentang from "./pages/tentang"; // Import your other components/pages

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/layanan" element={<Layanan />} />
          {/* <Route path="/berita" element={<Berita />} />
          <Route path="/tentang" element={<Tentang />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;