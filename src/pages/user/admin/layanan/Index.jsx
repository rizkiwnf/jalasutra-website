import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../../../api/index.jsx"
import AdminHeader from "../../../../components/AdminHeader";
import { HiSquaresPlus, HiTrash, HiDocumentMagnifyingGlass } from "react-icons/hi2";
import Swal from "sweetalert2";

export default function IndexServices() {
    const [services, setServices] = useState([]);

    const fetchDataServices = async () => {
        await Api.get('/api/service')
            .then(response => {
                setServices(response.data.data.data);
            })
    }

    useEffect(() => {
        fetchDataServices();
    }, []);

    function deleteConfirmation(id) {
        Swal.fire({
            title: "Apakah Anda yakin menghapus layanan ini?",
            text: "Mohon periksa kembali!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteService(id);
                Swal.fire({
                    title: "Dihapus!",
                    text: "Layanan telah dihapus.",
                    icon: "success"
                });
            }
        });
    }

    const deleteService = async (id) => {
        await Api.delete(`/api/service/${id}`)
            .then(() => {
                fetchDataServices();
            })
    }

    const Title = "Daftar Layanan"

    return (
        <main>
            <AdminHeader title={Title} />
            <div className="flex flex-row-reverse">
                <Link to="/admin/service/create" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
                    <HiSquaresPlus className="w-5 h-5 me-2" />
                    Tambah Layanan
                </Link>
            </div>
            <div className="mt-5 bg-white rounded-lg text-black w-full overflow-y-hidden">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-white">
                        <thead className="text-sm text-white uppercase bg-blue-600">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jenis
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Deskripsi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Logo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.length > 0 ?
                                    services.map((service, index) => (
                                        <tr className="bg-white border-b text-black" key={index}>
                                            <td className="px-6 py-4">{index + 1}</td>
                                            <td className="px-6 py-4">{service.nama}</td>
                                            <td className="px-6 py-4">{service.jenis}</td>
                                            <td className="px-6 py-4">{service.deskripsi}</td>
                                            <td className="px-6 py-4">
                                                <img src={service.gambar} alt={service.nama} width="100" className="rounded" />
                                            </td>
                                            <td className="flex flex-wrap px-6 py-4 items-center gap-2 text-xl">
                                                <a href={`/admin/service/detail/${service.id}`} className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <HiDocumentMagnifyingGlass className="w-5 h-5 text-white me-2" />
                                                    Lihat
                                                </a>
                                                <button type="button" onClick={() => deleteConfirmation(service.id)} className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                                    <HiTrash className="w-5 h-5 text-white me-2" />
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    )) :
                                    <tr className="bg-white border-b text-black">
                                        <td colSpan="6" className="text-center p-4">
                                            <div className="px-6 py-4 bg-red-400 text-red-700 mb-0 border border-red-700 rounded">
                                                Data Belum Tersedia!
                                            </div>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}