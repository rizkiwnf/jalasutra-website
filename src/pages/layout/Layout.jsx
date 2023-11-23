import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Layout = () => {
    let Links = [
        { name: "Beranda", link: "/", id: "home" },
        { name: "Layanan", link: "/services", id: "service" },
        { name: "Berita", link: "/news", id: "news" },
        { name: "Tentang Kami", link: "/about", id: "about" },
    ];
    return (
        <>
            <div className="fixed bg-white top-0 left-0 right-0 z-50">
                <Navbar links={Links} />
            </div>
            <div className="w-screen mt-20">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout