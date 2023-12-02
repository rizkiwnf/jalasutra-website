import React from "react";
import NewsBanner from '../assets/images/news-banner-1.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import SectionHeader from "./SectionHeader";

const FeaturedNews = ({ news }) => {
    return (
        <section id="news">
            {/* <div className="my-10 mx-3 md:mx-0 w-screen">
                <div className="container mx-auto bg-dark-blue/20 py-11 px-5 md:px-10 rounded-3xl"> */}
            <SectionHeader title='Berita Terkini' button='true' />
            <div className="bg-blue-500/20 mt-10 p-10 rounded-3xl">
                <div className="flex flex-col gap-9">
                    <div className="first-content relative">
                        <img src={NewsBanner} alt="" className="h-80 md:w-full md:h-auto rounded-lg" />
                        {/* <div className="flex justify-center">
                        </div> */}
                        <div className="bg-black bg-opacity-50 w-full absolute bottom-0 rounded-b-lg">
                            <div className="pt-5 pb-16 px-6 md:px-10 lg:pt-10 lg:pb-16 lg:px-10">
                                <div className="news-text text-white flex flex-col gap-5 ">
                                    <p className="text-lg md:text-xl lg:text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                    <p className="hidden lg:block text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="hidden md:block lg:hidden text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p className="block md:hidden text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <button className="bg-white flex gap-3 items-center px-4 py-2.5 rounded-full font-semibold text-xs md:text-sm absolute bottom-3 right-4 lg:right-14">
                                    <p>Selengkapnya</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="second-content bg-white py-5 rounded-3xl">
                        <Swiper
                            breakpoints={{
                                1080: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                340: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                }
                            }}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                news.map((news, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="card-field shadow-lg p-4">
                                            <div className="flex justify-center">
                                                <img src={news.logo} alt="" className="h-40 md:h-36 lg:h-28" />
                                            </div>
                                            <div className="card-text text-justify flex flex-col justify-center mx-4 my-3">
                                                <p className="text-center font-semibold mb-2">{news.title}</p>
                                                <p className="text-xs tracking-wide">{news.description}</p>
                                                <p className="text-xs text-right opacity-70 mt-3 ">{news.date}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            <div className="button-prev top-24 left-1 absolute z-50 bg-white p-2 rounded-3xl">
                                <button className="swiper-button-prev bg-dark-blue p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                            <div className="button-next absolute top-24 right-1 z-50 bg-white p-2 rounded-3xl">
                                <button className="swiper-button-next bg-dark-blue p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* </div>
            </div> */}
        </section>
    )
}

export default FeaturedNews