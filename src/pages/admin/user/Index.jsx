import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Api from "../../../api/index.jsx"
import AdminHeader from "../../../components/AdminHeader"
import { HiUserPlus, HiTrash, HiDocumentMagnifyingGlass } from "react-icons/hi2"

export default function IndexUser() {
    const [users, setUsers] = useState([]);

    const fetchDataUsers = async () => {
        await Api.get('/api/user')
            .then(response => {
                setUsers(response.data.data.data);
            })
    }

    useEffect(() => {
        fetchDataUsers();
    }, []);

    const Title = "Daftar Pengguna"

    return (
        <main>
            <AdminHeader title={Title} />
            <div className="flex flex-row-reverse">
                <Link to="/admin/user/create" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
                    <HiUserPlus className="w-5 h-5 me-2" />
                    Tambah Pengguna
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
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ?
                                    users.map((user, index) => (
                                        <tr className="bg-white border-b text-black" key={index}>
                                            <td className="px-6 py-4 capitalize">{index + 1}</td>
                                            <td className="px-6 py-4 capitalize">{user.username}</td>
                                            <td className="px-6 py-4">{user.email}</td>
                                            <td className="px-6 py-4 capitalize">{user.role}</td>
                                            <td className="flex flex-wrap px-6 py-4 items-center gap-2 text-xl">
                                                <a href={`/admin/user/detail/${user.id}`} className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <HiDocumentMagnifyingGlass className="w-5 h-5 text-white me-2" />
                                                    Lihat
                                                </a>
                                                <button type="button" className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                                    <HiTrash className="w-5 h-5 text-white me-2" />
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    )) :
                                    <tr className="bg-white border-b text-black">
                                        <td colSpan="5" className="text-center p-4">
                                            <div className="px-6 py-4 bg-red-400 text-red-700 mb-0 border border-red-700 rounded">
                                                Data Belum Tersedia!
                                            </div>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
                {/* <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </main>
    )
}