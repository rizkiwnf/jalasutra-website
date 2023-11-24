import React from 'react'
import ServiceSlider from "./ServiceSlider"
import ServiceIcon1 from "../assets/images/service-icon-1.png"
import ServiceIcon2 from "../assets/images/service-icon-2.png"
import ServiceIcon3 from "../assets/images/service-icon-3.png"
import ServiceIcon4 from "../assets/images/service-icon-4.png"

const HeroSection = () => {
    let services = [
        {
            image: ServiceIcon1,
            name: "Internal Desa"
        },
        {
            image: ServiceIcon2,
            name: "Kecamatan"
        },
        {
            image: ServiceIcon3,
            name: "Provinsi Jatim"
        },
        {
            image: ServiceIcon4,
            name: "Pemkab Blitar"
        },
        {
            image: ServiceIcon1,
            name: "Internal Desa"
        },
        {
            image: ServiceIcon2,
            name: "Kecamatan"
        },
        {
            image: ServiceIcon3,
            name: "Other"
        },
    ];
    return (
        <section id="hero">
            {/* <div className="my-[100px] xs:h-[500px] h-[450px] md:h-[600px] lg:h-[700px] w-screen">
                <div className="container my-auto">
                    <div className="relative background h-[400px] md:h-[500px] lg:h-[590px] " > */}
            <div className="background relative md:mb-36 rounded-xl">
                <div className="py-12 flex flex-col gap-10 md:gap-16 lg:gap-20" >
                    <p className="text-2xl md:text-5xl lg:text-[78px] text-center font-extrabold text-white tracking-wide" >
                        Mall Pelayanan Publik
                    </p>
                    { /* button slide kanan kiri blm sempurna */}
                    <div className="flex flex-row justify-center items-center gap-7">
                        <div className="border-white border-2 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <p className="font-bold text-white tracking-wider text-2xl" >
                            Jalasutra
                        </p>
                        <div className="border-white border-2 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center mx-5">
                        <form className="w-full md:w-[623px]">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm font-semibold tracking-wider text-gray-900 border border-dark-blue rounded-full bg-gray-50 focus:ring-dark-blue focus:border-dark-blue "
                                    placeholder="Pencarian" />
                                <button className="absolute top-2.5 right-2.5 bg-blue-600 px-7 py-1.5 rounded-full text-white font-bold hover:bg-blue-500">
                                    Cari
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="relative md:h-[100px]">
                        <ServiceSlider services={services} />
                    </div>
                </div>
            </div>
            {/* </div>
                </div>
            </div> */}
        </section>
    )
}

export default HeroSection