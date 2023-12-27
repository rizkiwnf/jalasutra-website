import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function NewsSlider({ list }) {
    return (

        // let [current, setCurrent] = useState(0);

        // let previousSlide = () => {
        //     if (current === 0) setCurrent(list.length - 1);
        //     else setCurrent(current - 1);
        // }

        // let nextSlide = () => {
        //     if (current === list.length - 1) setCurrent(0);
        //     else setCurrent(current + 1);
        // }

        // return (
        //     <div className='max-w-max mx-auto p-4 rounded-lg bg-gray-100 shadow-md'>
        //         <div className='overflow-hidden relative'>
        //             <div
        //                 className={`flex transition ease-out duration-40`}
        //                 style={{
        //                     transform: `translateX(-${current * 100}%)`,
        //                 }}
        //             >
        //                 {
        //                     list.map((news, index) => {
        //                         return (
        //                             <div key={index} className="flex-none w-1/3 mx-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //                                 <img className="rounded-lg" src={news.pic} alt="" />
        //                                 <div className="my-2 px-2">
        //                                     <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{news.title}</h5>
        //                                     <p className="font-normal text-xs text-gray-700 dark:text-gray-400 truncate">{news.content}</p>
        //                                 </div>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </div>
        //             <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-2 text-2xl'>
        //                 <button onClick={previousSlide}>
        //                     <BsFillArrowLeftCircleFill color='white' />
        //                 </button>
        //                 <button onClick={nextSlide}>
        //                     <BsFillArrowRightCircleFill color='white' />
        //                 </button>
        //             </div>
        //             <div className='absolute bottom-0 py-4 flex justify-center gap-2 w-full'>
        //                 {
        //                     list.map((slide, index) => {
        //                         return (
        //                             console.log(slide, index),
        //                             <div
        //                                 key={index}
        //                                 className={`rounded-full w-3 h-3 ${index === current ? "bg-white" : "bg-gray-300"}`}>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </div>
        //         </div>
        //     </div>
        <section id="list-slider">
            <div className="bg-white mx-5 p-4 shadow-lg rounded-xl">
                <Swiper
                    breakpoints={{
                        1080: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        340: {
                            slidesPerView: 1,
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
                            list.map((news, index) => (
                                <SwiperSlide key={index}>
                                    {/* <div className="flex flex-col gap-4">
                                        <img className="block mx-auto mt-5 md:mt-10 w-16 md:w-auto" src={news.pic} alt="" />
                                        <p className="text-center text-sm md:text-base">{news.title}</p>
                                    </div> */}
                                    <div key={index} className="flex-none mx-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <img className="block rounded-lg max-w-full" src={news.pic} alt="" />
                                        <div className="my-2 px-2">
                                            <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{news.title}</h5>
                                            <p className="font-normal text-xs text-gray-700 dark:text-gray-400 truncate">{news.content}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                    <div className="button-prev top-24 left-0 absolute z-50 mx-1 bg-white p-1 rounded-full">
                        <button className="swiper-button-prev bg-dark-blue p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>

                        </button>
                    </div>
                    <div className="button-next absolute top-24 right-0 z-50 mx-1 bg-white p-1 rounded-full">
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