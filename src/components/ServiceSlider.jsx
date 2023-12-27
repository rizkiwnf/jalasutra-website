import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ServiceSlider = ({ services }) => {
    return (
        <section id="services-slider">
            <div className="bg-white md:mx-24 mx-5 p-4 shadow-lg rounded-xl">
                <Swiper
                    breakpoints={{
                        1080: {
                            slidesPerView: 5,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        340: {
                            slidesPerView: 3,
                        }
                    }}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper" // bg-white lg:w-[895px] h-40 md:h-56 rounded-xl shadow-lg
                >
                    <div className="swiperr-wrapper">
                        {
                            services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col gap-4">
                                        <img className="block mx-auto mt-5 md:mt-10 w-16 md:w-auto" src={service.image} alt="" />
                                        <p className="text-center text-sm md:text-base">{service.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                    <div className="button-prev top-16 left-0 absolute z-50 mx-1 bg-white p-1 rounded-full">
                        <button className="swiper-button-prev bg-dark-blue p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>

                        </button>
                    </div>
                    <div className="button-next absolute top-16 right-0 z-50 mx-1 bg-white p-1 rounded-full">
                        <button className="swiper-button-next bg-dark-blue p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}
export default ServiceSlider;