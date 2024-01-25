import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Api from "../../../api"
import { HiUsers, HiEnvelopeOpen, HiFaceSmile } from "react-icons/hi2"
import { DATA_BERANDA } from "../../../data/AdminData"
import { getStatus } from "../../../utils/getStatus"
import AdminHeader from "../../../components/AdminHeader"
import Profile from "../../../assets/images/blank-profile-picture.jpg"

export default function Home() {
    const [users, setUsers] = useState([]);

    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    const fetchDataUser = async () => {
        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await Api.get('/api/admin/users')
            .then((response) => {
                setUsers(response.data.data.data);
            })
    }

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        fetchDataUser();
        // eslint-disable-next-line
    }, []);

    const Title = "Dashboard"
    return (
        <main>
            <AdminHeader title={Title} />
            <div className="grid grid-cols-3 gap-10 text-white bg-white rounded-lg">
                <div className="users flex flex-row items-center justify-around gap-4 bg-admin-blue rounded-lg p-4">
                    <HiUsers fontSize={50} />
                    <div className="text">
                        <p className="font-bold">Pengguna Saat Ini</p>
                        <p className="text-sm">100 Pengguna</p>
                    </div>
                </div>
                <div className="letter flex flex-row items-center justify-around gap-4 bg-admin-blue rounded-lg p-4">
                    <HiEnvelopeOpen fontSize={50} />
                    <div className="text">
                        <p className="font-bold">Surat Dibuat</p>
                        <p className="text-sm">236 Surat</p>
                    </div>
                </div>
                <div className="rate flex flex-row items-center justify-around gap-4 bg-admin-blue rounded-lg p-4">
                    <HiFaceSmile fontSize={50} />
                    <div className="text">
                        <p className="font-bold">Kepuasan Layanan</p>
                        <p className="text-sm">4/5</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 mt-5">
                <div className="flex-2 bg-white rounded-lg text-black w-full overflow-y-hidden">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-white">
                            <thead className="text-sm text-white uppercase bg-blue-600">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Tanggal
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Keperluan
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    DATA_BERANDA.map((data, index) => (
                                        <tr className="bg-white border-b text-black" key={index}>
                                            <td className="px-6 py-4">{data.date}</td>
                                            <td className="px-6 py-4">{data.necessary}</td>
                                            <td className="px-6 py-4">{getStatus(data.status)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Pengguna Terbaru</h5>
                            <Link to="/admin/users" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                Lihat Semua
                            </Link>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    users.map((user, index) => (
                                        <li key={index} className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img className="w-8 h-8 rounded-full" src={user.profile.photo ?? Profile} alt="Profile" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {user.profile.nama_lengkap}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {user.email}
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-gray-900 dark:text-white">
                                                    <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">{user.role}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}