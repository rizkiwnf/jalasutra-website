import { HiUsers, HiEnvelopeOpen, HiFaceSmile } from "react-icons/hi2"
import { DATA_BERANDA } from "../../data/AdminData"
import { getStatus } from "../../utils/getStatus"
import AdminHeader from "../../components/AdminHeader"

export default function Home() {
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
            <div className="mt-5 bg-white rounded-lg text-black w-full overflow-y-hidden">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-white">
                        <thead className="text-sm text-white uppercase bg-blue-600">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama
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
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{data.date}</td>
                                        <td className="px-6 py-4">{data.name}</td>
                                        <td className="px-6 py-4">{data.necessary}</td>
                                        <td className="px-6 py-4">{getStatus(data.status)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}