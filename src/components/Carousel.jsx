import React, { useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'

const Carousel = ({ slides }) => {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

    return (
        <div className='max-w-xl mx-auto p-4 rounded-lg bg-gray-100'>
            <div className='overflow-hidden relative'>
                <div
                    className={`flex transition ease-out duration-40`}
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {
                        slides.map((s) => {
                            return (
                                <div className="flex-none w-1/3 mx-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <img className="rounded-lg" src={s} alt="" />
                                    <div className="my-2 px-2">
                                        <h5 className="mb-0 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Title</h5>
                                        <p className="font-normal text-xs text-gray-700 dark:text-gray-400">Id consequat sint exercitation occaecat pariatur et sit est adipisicing amet enim.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-2 text-2xl'>
                    <button onClick={previousSlide}>
                        <BsFillArrowLeftCircleFill color='#3F83F8' />
                    </button>
                    <button onClick={nextSlide}>
                        <BsFillArrowRightCircleFill color='#3F83F8' />
                    </button>
                </div>
                <div className='absolute bottom-0 py-4 flex justify-center gap-2 w-full'>
                    {slides.map((slide, index) => {
                        return (
                            console.log(slide, index),
                            <div
                                key={index}
                                className={`rounded-full w-3 h-3 ${index === current ? "bg-white" : "bg-gray-300"}`}>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel