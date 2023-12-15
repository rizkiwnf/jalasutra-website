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
            <div className="background relative md:mb-36 rounded-xl">
                <div className="py-12 flex flex-col gap-10 md:gap-16 lg:gap-20" >
                    <p className="text-2xl md:text-5xl lg:text-[78px] text-center font-extrabold text-white tracking-wide" >
                        Mall Pelayanan Publik
                    </p>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h1 className="font-bold text-white tracking-wider text-4xl" >
                            Jalasutra
                        </h1>
                        <p className="font-medium text-white tracking-wide text-xl">
                            Jenis Layanan Apapun Cukup di Kantor Kecamatan atau Desa
                        </p>
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
        </section>
    )
}

export default HeroSection