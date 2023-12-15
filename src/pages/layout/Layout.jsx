import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/partial/Navbar';
import Footer from '../../components/partial/Footer';

const Layout = () => {
    let links = [
        { name: "Beranda", link: "/", id: "home" },
        { name: "Layanan", link: "/services", id: "service" },
        { name: "Berita", link: "/news", id: "news" },
        { name: "Tentang Kami", link: "/about", id: "about" },
    ];

    return (
        <main>
            <div className="fixed bg-white top-0 left-0 right-0 z-50">
                <Navbar links={links} />
            </div>
            <div className="container mx-auto mt-20 p-10">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default Layout