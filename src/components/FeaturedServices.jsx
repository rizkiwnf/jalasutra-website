import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SectionHeader from "./SectionHeader";
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedServices = ({ services }) => {
    return (
        <section id="services">
            {/* <div className="my-16 h-[400px] md:h-[450px] w-screen"> */}
            <div className="container mx-auto mb-auto">
                <SectionHeader title='Layanan' button='true' />
                <div className="slider-services mx-8 md:mx-0">
                    <Swiper
                        breakpoints={{
                            1080: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            200: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            }
                        }}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        // scrollbar={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper md:h-[22rem]">
                        {
                            services.map((service, index) => (
                                <SwiperSlide key={index} className="my-10">
                                    <div className="bg-white lg:h-64 rounded-xl p-4">
                                        <div className="card-field flex flex-col gap-3 justify-between">
                                            <div className="image">
                                                <img src={service.logo} alt="" />
                                            </div>
                                            <p className="text-sm lg:text-xl font-bold ">{service.title}</p>
                                            <p className="text-xs text-black opacity-70">{service.description1}<span className="hidden lg:block">{service.description2}</span></p>
                                            <button className="mt-5 flex flex-row gap-2 w-36 items-center bg-dark-blue py-3 px-4 text-white font-semibold rounded-full">
                                                <p className="text-xs">Selengkapnya</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <div className="button-prev bottom-0 right-10 md:right-14 absolute z-50">
                            <button className="swiper-button-prev bg-dark-blue px-2 py-1 md:p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-4 md:w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="button-next absolute bottom-0 right-0 z-50">
                            <button className="swiper-button-next bg-dark-blue  px-2 py-1 md:p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-4 md:w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default FeaturedServices



