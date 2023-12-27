import { Link } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader";
import { HiSquaresPlus, HiTrash, HiDocumentMagnifyingGlass } from "react-icons/hi2";
import Pic from "../../../assets/images/service-logo-1.png";

export default function IndexServices() {
    const Title = "Daftar Layanan"

    return (
        <main>
            <AdminHeader title={Title} />
            <div className="flex flex-row-reverse">
                <Link to="/admin/services/create" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
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
                                    Instansi
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
                            <tr className="bg-white border-b text-black" key="">
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">BPJS Ketenagakerjaan</td>
                                <td className="px-6 py-4">Layanan Umum</td>
                                <td className="px-6 py-4">BPJS Ketenagakerjaan</td>
                                <td className="px-6 py-4">
                                    <img src={Pic} alt="" />
                                </td>
                                <td className="flex flex-wrap px-6 py-4 items-center gap-2 text-xl">
                                    <Link to="/admin/services/detail" className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <HiDocumentMagnifyingGlass className="w-5 h-5 text-white me-2" />
                                        Lihat
                                    </Link>
                                    <button type="button" className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <HiTrash className="w-5 h-5 text-white me-2" />
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}