import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Logo from "../../assets/logo/logo-black.png";

const Navbar = ({ links }) => {
    let [open, setOpen] = useState(true);
    return (
        <div className="navbar px-6 py-2">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <Link to="/">
                        <img src={Logo} className="h-16" alt="" />
                    </Link>
                    <div className="hidden md:block menu-navbar">
                        <ul className="flex flex-col md:flex-row gap-4 md:gap-10">
                            {
                                links.map((link, index) => (
                                    <li key={index} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                                        <Link to={link.link} id={link.id}>{link.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <a href="/user" className="hidden md:block login py-1.5 w-24 font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-full text-center">
                        Masuk
                    </a>
                    {/* <Link to="/login" className="hidden md:block login py-1.5 w-24 font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-full text-center">
                        Masuk
                    </Link> */}
                    <div onClick={() => setOpen(!open)} className="icon-menu md:hidden px-3">
                        {open ? <FaBarsStaggered size={25} /> : <FaXmark size={25} />}
                    </div>
                </div>
                {/* responsive */}
                <div className={`${open ? 'hidden' : 'block'} md:hidden py-3 text-center flex flex-col justify-center items-center gap-4 mx-3`}>
                    <div className="menu-navbar-resp">
                        <ul className="flex flex-col md:flex-row gap-3 md:gap-10 font-bold">
                            {
                                links.map((link, index) => (
                                    <li key={index}><Link href={link.link} id={link.id}>{link.name}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="login py-2 w-full font-semibold text-white bg-dark-blue rounded-full">
                        {/* <Link to="/login">Masuk</Link> */}
                        <a href="/user">Masuk</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;