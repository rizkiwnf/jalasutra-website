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
            title: 'BPJS Ketenagakerjaan',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
        {
            logo: mail,
            title: 'E-Mail',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
        {
            logo: pln,
            title: 'PLN',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
        {
            logo: mail,
            title: 'E-Mail',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
    ]
    return (
        <div className="service my-16">
            <div className="container mx-auto ">
                <div className="serv-title flex items-center justify-between px-10">
                    <p className="text-4xl font-bold">
                        Layanan
                    </p>
                    <div className="serv-see-all ">
                        <button className="bg-dark-blue flex gap-3 items-center px-4 py-2.5 rounded-full text-white font-medium text-sm">
                            <p>Lihat Semua</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // scrollbar={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper h-96">
                    <div className="serv-card">
                        {List.map((slider) => (
                            <SwiperSlide className="my-10">
                                <div className="card-serv h-64 rounded-xl p-4">
                                    <div className="card-field flex flex-col gap-3">
                                        <div className="image">
                                            <img src={slider.logo} alt="" />
                                        </div>
                                        <p className="text-2xl font-bold">{slider.title}</p>
                                        <p className="text-xs text-black opacity-70">{slider.description}</p>
                                    </div>
                                    <button className="mt-5 flex flex-row gap-2 items-center float-right bg-dark-blue py-3 px-4 text-white font-semibold rounded-full">
                                        <p className="text-xs">Selengkapnya</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                    <div class="button-prev bottom-8 right-14 absolute z-50">
                        <button class="swiper-button-prev bg-dark-blue p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    <div class="button-next absolute bottom-8 right-0 z-50">
                        <button class="swiper-button-next bg-dark-blue p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
export default Service



