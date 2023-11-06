import React from "react";
import bpjs from '../assets/images/service/bpjs.png'
import mail from '../assets/images/service/mail.png'
import pln from '../assets/images/service/pln.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';


const Service = () => {
    let List = [
        {
            logo: bpjs,
            title: 'BPJS',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: mail,
            title: 'E-Mail',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: pln,
            title: 'PLN',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: bpjs,
            title: 'BPJS',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: mail,
            title: 'E-Mail',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
    ]
    return (
        <div id="service" className="service my-16 h-[400px] md:h-[450px] w-screen">
            <div className="container mx-auto ">
                <div className="serv-title flex items-center justify-between px-7 lg:px-0 ">
                    <p className="text-2xl md:text-4xl font-bold">
                        Layanan
                    </p>
                    <div className="serv-see-all ">
                        <button className="bg-dark-blue flex lg:gap-3 items-center px-2 md:px-4 py-2 md:py-2.5 rounded-full text-white font-medium text-sm">
                            <p className="hidden md:block">Lihat Semua</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </div>
                </div>
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
                        <div className="serv-card">
                            {List.map((slider) => (
                                <SwiperSlide className="my-10">
                                    <div className="card-serv lg:h-64 rounded-xl p-4">
                                        <div className="card-field flex flex-col gap-3 justify-between">
                                            <div className="image">
                                                <img src={slider.logo} alt="" />
                                            </div>
                                            <p className="text-sm lg:text-xl font-bold ">{slider.title}</p>
                                            <p className="text-xs text-black opacity-70">{slider.description1}<span className="hidden lg:block">{slider.description2}</span></p>
                                        <button className="mt-5 flex flex-row gap-2 w-36 items-center bg-dark-blue py-3 px-4 text-white font-semibold rounded-full">
                                            <p className="text-xs">Selengkapnya</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                            </svg>
                                        </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                        <div class="button-prev bottom-0 right-10 md:right-14 absolute z-50">
                            <button class="swiper-button-prev bg-dark-blue px-2 py-1 md:p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-4 md:w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                        <div class="button-next absolute bottom-0 right-0 z-50">
                            <button class="swiper-button-next bg-dark-blue  px-2 py-1 md:p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-4 md:w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Service



