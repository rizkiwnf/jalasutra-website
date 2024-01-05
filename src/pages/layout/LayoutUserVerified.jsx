import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Api from '../../api';
import Footer from '../../components/partial/Footer';
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Fill, RiMailFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

const LayoutUserVerified = () => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const fetchDataUser = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await Api.get('/api/user')
            .then((response) => {
                setUser(response.data);
            })
    }

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        fetchDataUser();
        // eslint-disable-next-line
    }, []);

    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await Api.post('/api/logout')
            .then(() => {
                localStorage.removeItem("token");
                navigate('/');
            });
    };

    return (
        <main>
            <div data-dial-init className="fixed top-6 start-6 group">
                <button type="button" data-dial-toggle="speed-dial-menu-top-left" aria-controls="speed-dial-menu-top-left" aria-expanded="false" className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <FaHome className="w-6 h-6" />
                    <span className="sr-only">Open actions menu</span>
                </button>
                <div id="speed-dial-menu-top-left" className="flex flex-col items-center hidden mt-4 space-y-2">
                    <button type="button" data-tooltip-target="tooltip-layanan" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                        <RiCustomerService2Fill className="w-6 h-6" />
                        <span className="sr-only">Layanan</span>
                    </button>
                    <div id="tooltip-layanan" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Layanan
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button type="button" data-tooltip-target="tooltip-surat" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                        <RiMailFill className="w-6 h-6" />
                        <span className="sr-only">Surat</span>
                    </button>
                    <div id="tooltip-surat" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Surat
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button type="button" data-tooltip-target="tooltip-profile" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                        <img className="w-8 h-8 rounded-full" src={user.photo} alt="user"></img>
                        <span className="sr-only">Open user menu</span>
                    </button>
                    <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button onClick={logoutHandler} data-tooltip-target="tooltip-logout" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                        <IoLogOut className="w-6 h-6" />
                        <span className="sr-only">Logout</span>
                    </button>
                    <div id="tooltip-logout" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Logout
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
            <div className="mx-16 p-10">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default LayoutUserVerified