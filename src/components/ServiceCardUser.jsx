import { Link } from "react-router-dom";

export default function ServiceCard({ services }) {
    return (
        <>
            {
                services.map((service, index) => {
                    return (
                        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-wrap items-center gap-2">
                                <img src={service.logo} className="h-10" alt="" />
                                <Link to="#">
                                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{service.name}</h5>
                                </Link>
                            </div>
                            <div className="flex flex-col justify-stretch">
                                <p className="my-3 text-sm font-normal text-gray-700 dark:text-gray-400">{service.desc}</p>
                                <button type="button" className="w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Pilih
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}