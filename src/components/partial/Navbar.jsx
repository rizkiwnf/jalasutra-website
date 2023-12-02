import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo-black.png";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = ({ links }) => {
    let [open, setOpen] = useState(true);
    return (
        <div className="navbar py-2">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <Link to="/">
                        <img src={Logo} className="h-16" alt="" />
                    </Link>
                    <div className="hidden md:block menu-navbar">
                        <ul className="flex flex-col md:flex-row gap-3 md:gap-10 font-bold">
                            {
                                links.map((link, index) => (
                                    <li key={index}><Link to={link.link} id={link.id}>{link.name}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="hidden md:block login py-2 w-32 font-bold text-white bg-dark-blue rounded-full text-center">
                        <Link to="/login">Masuk</Link>
                    </div>
                    <div onClick={() => setOpen(!open)} className="icon-menu md:hidden px-3">
                        {open ? <FaBarsStaggered size={25} /> : <FaXmark size={25} />}
                    </div>
                </div>
                {/* resp */}
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
                    <div className="login py-2 w-full font-bold text-white bg-dark-blue rounded-full">
                        <Link to="/login">Masuk</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;