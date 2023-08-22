import React from "react";
import Logo from './../../assets/images/jalasutra-logo.png'

const TopBar = () => {
    return(
        <div className="top-bar border-b border-gray-200">
            <div className="container w-full mx-auto ">
                <nav className="bg-white flex justify-between p-3 items-center">
                    <div className="title-topbar ">
                        <img src={Logo} alt="" className="w-36"/>
                    </div>
                    <div className="menu-topbar">
                        <ul className="flex gap-5">
                            <li>
                                Home
                            </li>
                            <li>
                                Layanan
                            </li>
                            <li>
                                Berita
                            </li>
                            <li>
                                Tentang
                            </li>
                        </ul>
                    </div>
                    <div className="button-login bg-blue-jl font-bold py-2 px-4 rounded-xl text-white">
                        <button>
                            Masuk
                        </button>
                    </div>

                </nav>
            </div>
        </div>
    )
}
export default TopBar;