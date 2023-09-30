import service from "../assets/images/home/self-service 1.png"
import kecamatan from "../assets/images/home/building-2.png"
import provjatim from "../assets/images/home/smart-city(1).png"
import pemkabblitar from "../assets/images/home/state2.png"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation} from 'swiper/modules';

const ServiceFirst = () => {
    let listService = [
        {
            Image: service,
            Name: "Internal Desa"
        },
        {
            Image: kecamatan,
            Name: "Kecamatan"
        },
        {
            Image: provjatim,
            Name: "Provinsi Jatim"
        },
        {
            Image: pemkabblitar,
            Name: "Pemkab Blitar"
        },
        {
            Image: kecamatan,
            Name: "Other"
        },
    ]
    return (
        <div className="service-first">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                }}
                // scrollbar={true}
                modules={[Pagination, Navigation]}
                className="mySwiper bg-white w-[895px] h-[220px] rounded-xl shadow-lg"
            >
                <div className="swiperr-wrapper">
                    {listService.map((slider) => (
                        <SwiperSlide>
                            <div className="field">
                                <img className="block ml-auto mr-auto mt-10" src={slider.Image} alt="" />
                                <p className="text-center">{slider.Name}</p>
                            </div>
                        </SwiperSlide>


                    ))}
                </div>
                <div class="button-prev top-20 left-0 absolute z-50">
                    <button class="swiper-button-prev bg-dark-blue p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                </div>
                <div class="button-next absolute top-20 right-0 z-50">
                    <button class="swiper-button-next bg-dark-blue p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </div>
            </Swiper>
        </div >
    )
}
export default ServiceFirst;