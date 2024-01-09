import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../../../api";
import Loader from "../../../../components/Loader";
import { HiMiniPencil } from "react-icons/hi2";

export default function DetailServices() {
    const [service, setServices] = useState([]);

    const { id } = useParams();

    const fetchDetailService = async () => {
        await Api.get(`/api/service/${id}`)
            .then(response => {
                setServices(response.data.data);
            })
    }

    useEffect(() => {
        fetchDetailService();
        // eslint-disable-next-line
    }, []);

    if (!service) {
        return <main><Loader /></main>
    }


    return (
        <main>
            <div className="w-full mt-auto rounded-lg bg-white p-6 text-left align-middle shadow-lg">
                <div className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <h1 className="font-bold uppercase">
                            Detail Layanan {service.nama}
                        </h1>
                        <a href={`/admin/service/edit/${service.id}`}>
                            <HiMiniPencil className="cursor-pointer p-1 hover:text-white rounded-full hover:bg-light-blue" fontSize={25} />
                        </a>
                    </div>
                </div>
                <div className="mt-4 px-2 flex flex-col">
                    <img src={service.gambar} className="mx-auto rounded-full h-32" alt="Belum Ada Logo" />
                    <div className="mt-4">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Jenis</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.jenis}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Deskripsi</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.deskripsi}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Informasi</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.informasi}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Persyaratan</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.persyaratan}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Kontak</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.kontak}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </main>
    )
}