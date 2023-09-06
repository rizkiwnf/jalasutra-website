import React, { Component } from "react";
import Logo from './../../assets/images/jalasutra-logo.png'

class TopBar extends Component {
    openIcon = <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    closeIcon = <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className="bg-white top-bar border-b border-gray-200">
                <div className="container w-full mx-auto ">
                    <nav className="flex justify-between p-3 items-center">
                        <div className="title-topbar ">
                            <img src={Logo} alt="" className="w-36" />
                        </div>
                        <div className="menu-topbar hidden md:block">
                            <ul className="flex gap-5">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Layanan</a>
                                </li>
                                <li>
                                    <a href="">Berita</a></li>
                                <li>
                                    <a href="">Tentang</a>
                                </li>
                            </ul>
                        </div>
                        <div className="button-login hidden md:block bg-blue-600 font-bold py-2 px-4 rounded-xl text-white">
                            <button>
                                Masuk
                            </button>
                        </div>
                        <div className="open-button md:hidden cursor-pointer" onClick={this.handleClick}>
                            <svg className={this.state.clicked ? this.openIcon : this.closeIcon}></svg>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default TopBar;
