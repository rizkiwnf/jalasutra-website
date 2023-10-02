import React from 'react';
import TopBar from '../components/navbar/topbar';
import Footer from '../components/Footer';
import Figure from '../components/Figure';
import Carousel from '../components/Carousel';
import NewsList from '../components/NewsList';
import Banner1 from '../assets/images/banner-1.jpg';
import Banner2 from '../assets/images/banner-2.jpg';
import Banner3 from '../assets/images/banner-3.jpg';
import Banner4 from '../assets/images/banner-4.jpg';
import Banner5 from '../assets/images/banner-5.jpg';
import Banner6 from '../assets/images/banner-6.jpg';
import Figure1 from '../assets/images/figure-1.jpg';

const News = () => {
    let slides = [
        Banner1,
        Banner2,
        Banner3,
        Banner4,
        Banner5,
        Banner6,
    ]
    return (
        <>
            <TopBar />
            <div className='w-6/12 mx-auto my-5 p-5 rounded-xl bg-white'>
                <ul className="flex flex-wrap justify-center items-center mb-0 text-xs font-bold text-center text-gray-500 dark:text-gray-400">
                    <li className="mr-2">
                        <a href="/" className="inline-block px-4 py-3 text-white bg-blue-600 rounded-full active" aria-current="page">SEMUA</a>
                    </li>
                    <li className="mr-2">
                        <a href="/" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">KESEHATAN</a>
                    </li>
                    <li className="mr-2">
                        <a href="/" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">PEMERINTAHAN</a>
                    </li>
                    <li className="mr-2">
                        <a href="/" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">SOSIAL</a>
                    </li>
                    <li className="mr-2">
                        <a href="/" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">EKONOMI</a>
                    </li>
                </ul>
                <hr className="w-auto h-1 mx-auto bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
                <div className='w-[100%] m-auto'>
                    <Figure image={Figure1} />
                    <Carousel slides={slides} />
                    <NewsList images={slides} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default News