import React from "react";
import GambarLogo from "../assets/images/Logo Black.svg";
import Logo from "../components/logo";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Layanan", link: "/layanan" },
        { name: "Berita", link: "/berita" },
        { name: "Kontak Kami", link: "/Kontak Kami" },
    ]

    let [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <Logo width="w-[161px]" gambarLogo={GambarLogo} />
                    <div className="hidden md:block menu-navbar">
                        <ul className="flex flex-col md:flex-row gap-3 md:gap-10 font-bold">
                            {Links.map((link) => (
                                <li><a href={link.link}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden md:block login py-2 w-32 font-bold text-white bg-dark-blue rounded-full">
                        <a href="">Masuk</a>
                    </div>
                    <div onClick={() => setOpen(!open)} className="icon-menu md:hidden px-3">
                        {open ? <FaBarsStaggered size={25} /> : <FaXmark size={25} />}
                    </div>
                </div>
                {/* resp */}
                <div className={`${open ? 'hidden' : 'block'} md:hidden py-3 text-center flex flex-col justify-center items-center gap-4 mx-3`}>
                    <div className="menu-navbar-resp">
                        <ul className="flex flex-col md:flex-row gap-3 md:gap-10 font-bold">
                            {Links.map((link) => (
                                <li><a href={link.link}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="login py-2 w-full font-bold text-white bg-dark-blue rounded-full">
                        <a href="">Masuk</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;