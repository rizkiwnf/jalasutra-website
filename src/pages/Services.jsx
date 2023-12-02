import ServiceCard from "../components/ServiceCard";
import { BsFilterLeft } from "react-icons/bs";
import Logo1 from "../assets/images/service-logo-1.png";
import Logo2 from "../assets/images/service-logo-2.png";
import Logo3 from "../assets/images/service-logo-3.png";

export default function Service() {
    let services = [
        {
            logo: Logo1,
            name: "BPJS Ketenagakerjaan",
            desc: "Non reprehenderit proident aliqua minim mollit aliquip. Qui nulla mollit voluptate ex ex velit laborum tempor dolore. Mollit dolor in fugiat est minim occaecat. Qui eu qui fugiat cupidatat tempor nisi exercitation eiusmod officia do.",
        },
        {
            logo: Logo2,
            name: "Email",
            desc: "Consequat ut officia proident nostrud Lorem sunt aute eiusmod non pariatur velit. Id proident velit in adipisicing voluptate. Lorem aliqua et non excepteur in. Officia veniam veniam proident exercitation aute culpa laboris consectetur esse non et cupidatat. Aliquip proident tempor deserunt proident eiusmod aliqua minim est nulla minim non.",
        },
        {
            logo: Logo3,
            name: "PT PLN",
            desc: "Irure ullamco dolore eiusmod magna exercitation sit id amet. Excepteur id nisi ut ex. Laboris voluptate aliquip aliqua sunt cillum nostrud aliqua. Lorem cillum et amet ipsum pariatur minim do voluptate sit nisi dolor aliquip.",
        },
        {
            logo: Logo1,
            name: "BPJS Ketenagakerjaan",
            desc: "Non reprehenderit proident aliqua minim mollit aliquip. Qui nulla mollit voluptate ex ex velit laborum tempor dolore. Mollit dolor in fugiat est minim occaecat. Qui eu qui fugiat cupidatat tempor nisi exercitation eiusmod officia do.",
        },
        {
            logo: Logo2,
            name: "Email",
            desc: "Consequat ut officia proident nostrud Lorem sunt aute eiusmod non pariatur velit. Id proident velit in adipisicing voluptate. Lorem aliqua et non excepteur in. Officia veniam veniam proident exercitation aute culpa laboris consectetur esse non et cupidatat. Aliquip proident tempor deserunt proident eiusmod aliqua minim est nulla minim non.",
        },
        {
            logo: Logo3,
            name: "PT PLN",
            desc: "Irure ullamco dolore eiusmod magna exercitation sit id amet. Excepteur id nisi ut ex. Laboris voluptate aliquip aliqua sunt cillum nostrud aliqua. Lorem cillum et amet ipsum pariatur minim do voluptate sit nisi dolor aliquip.",
        },
    ];
    return (
        <main className="container my-5 px-8 py-6 bg-white shadow-lg border-t-2 rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <form className="w-1/3">
                    <div className="flex">
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-3xl border-s-gray-300 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Cari disini..." required />
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-3xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-flex items-center gap-2">
                    <span><BsFilterLeft size={"20px"} /></span>Filter
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10">
                <ServiceCard services={services} />
            </div>
        </main>
    )
}