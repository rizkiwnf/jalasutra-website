import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams, Link } from 'react-router-dom';
import Api from '../../api';
import Footer from '../../components/partial/Footer';
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Fill, RiMailFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import Loader from '../../components/Loader';
import BlankPic from '../../assets/images/blank-profile-picture.jpg';

const LayoutUserVerified = () => {
    const [profile, setProfile] = useState("");

    const token = localStorage.getItem('token');

    const { id } = useParams();

    const navigate = useNavigate();

    const fetchDataUser = async () => {
        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await Api.get(`/api/user/${id}`)
            .then((response) => {
                setProfile(response.data.data);
            })
    }

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        fetchDataUser();
        // eslint-disable-next-line
    }, []);

    if (!profile) {
        return <main><Loader /></main>
    }

    const logoutHandler = async () => {
        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await Api.post('/api/logout')
            .then(() => {
                localStorage.removeItem("token");
                navigate('/');
            });
    };

    return (
        <main>
            <div className="fixed top-10 start-10 group flex flex-col gap-2">
                <Link to={`/warga/${profile.user.id}`} className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <FaHome className="w-6 h-6" />
                    <span className="sr-only">Open actions menu</span>
                </Link>
                <Link to={`/warga/${profile.user.id}/layanan`} className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <RiCustomerService2Fill className="w-6 h-6" />
                    <span className="sr-only">Layanan</span>
                </Link>
                <div className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Layanan
                </div>
                <Link to={`/warga/${profile.user.id}/surat`} className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <RiMailFill className="w-6 h-6" />
                    <span className="sr-only">Surat</span>
                </Link>
                <div className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Surat
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <img className="w-8 h-8 rounded-full" src={BlankPic} alt="user"></img>
                    <span className="sr-only">Profile</span>
                </button>
                <div className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Profile
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button onClick={logoutHandler} className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <IoLogOut className="w-6 h-6" />
                    <span className="sr-only">Logout</span>
                </button>
                <div className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Logout
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <div className="mx-20 p-10">
                {/* <h1 className="mb-12 text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Selamat Datang, {profile.user.username}!</h1> */}
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default LayoutUserVerified