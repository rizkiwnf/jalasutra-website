import React from "react";
import berita1 from '../assets/images/news/berita1.png';
import berita2 from '../assets/images/news/berita2.png';
import berita3 from '../assets/images/news/berita3.png';
import berita4 from '../assets/images/news/berita4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const News = () => {
    let List = [
        {
            logo: berita2,
            title: 'Berita 2',
            date: '22 Maret 2023',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
        },
        {
            logo: berita3,
            title: 'Berita 3',
            date: '23 Maret 2023',
            description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
        },
        {
            logo: berita4,
            title: 'Berita 4',
            date: '24 Maret 2023',
            description: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
        {
            logo: berita3,
            title: 'Berita 3',
            date: '25 Maret 2023',
            description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
        },
    ]
    return (
        <div className="news my-10">
            <div className="container mx-auto bg-dark-blue/20 py-11 px-10 rounded-3xl">
                <div className="news-title flex items-center justify-between">
                    <p className="text-4xl font-bold">
                        Berita
                    </p>
                    <hr />
                    <div className="serv-see-all ">
                        <button className="bg-white flex gap-3 items-center px-4 py-2.5 rounded-full font-semibold text-sm">
                            <p>Lihat Semua</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="news-content mt-11 flex flex-col gap-9">
                    <div className="first-content relative">
                        <div className="flex justify-center">
                            <img src={berita1} alt="" className="" />
                        </div>
                        <div className="bg-black bg-opacity-60 w-[1005px] absolute bottom-0 rounded-3xl left-[96px]">
                            <div className="pt-10 pb-16">
                                <div className="news-text text-white px-10 flex flex-col gap-5 ">
                                    <p className="text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                    <p className="text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <button className="bg-white flex gap-3 items-center px-4 py-2.5 rounded-full font-semibold text-sm absolute right-14">
                                    <p>Selengkapnya</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="second-content bg-white rounded-3xl py-7">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            // navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            // scrollbar={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper h-72"
                        >
                            {List.map((slider) => (
                                <SwiperSlide className="">
                                    <div className="card-field">
                                        <div className="flex justify-center">
                                            <img src={slider.logo} alt="" />
                                        </div>
                                        <div className="card-text text-justify flex flex-col justify-center mx-14 my-3">
                                            <p className="text-center font-semibold mb-2">{slider.title}</p>
                                            <p className="text-xs tracking-wide">{slider.description}</p>
                                            <p className="text-xs text-right opacity-70 mt-3 ">{slider.date}</p>
                                        </div>
                                        
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div class="button-prev top-24 left-1 absolute z-50 bg-white p-2 rounded-3xl">
                                <button class="swiper-button-prev bg-dark-blue p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                            <div class="button-next absolute top-24 right-1 z-50 bg-white p-2 rounded-3xl">
                                <button class="swiper-button-next bg-dark-blue p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default News;