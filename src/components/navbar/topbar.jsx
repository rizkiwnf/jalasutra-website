import React from "react";
import Logo from "./../../assets/images/jalasutra-logo.png";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white top-bar border-b border-gray-200">
      <div className="container w-full mx-auto ">
        <nav className="flex justify-between p-3 items-center">
          <div className="title-topbar ">
            <img src={Logo} alt="" className="w-36" />
          </div>
          <div className="menu-topbar">
            <ul className="flex gap-5">
              <li>
                <Link to="/main_page">Home</Link>
              </li>
              <li>
                <Link to="/Layanan">Layanan</Link>
              </li>
              <li>
                <Link to="/Berita">Berita</Link>
              </li>
              <li>Tentang</li>
            </ul>
          </div>
          <div className="button-login bg-blue-600 font-bold py-2 px-4 rounded-xl text-white">
            <button>Masuk</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default TopBar;
