import classNames from "classnames"
import { Link } from "react-router-dom"
import { HiUsers, HiEnvelopeOpen, HiFaceSmile } from "react-icons/hi2"
import { DATA_BERANDA } from "../../data/AdminData"
import { getStatus } from "../../utils/getStatus"

export default function Home() {
    const styleBackground = 'bg-white rounded-lg p-3 text-white';
    return (
        <main className="flex flex-col m-2 gap-3">
            <header className="uppercase">
                Dashboard
            </header>
            <div className={classNames("information-box grid grid-cols-3 text-white gap-10", styleBackground)}>
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
            <div className="table-information bg-white rounded-lg p-5 text-black w-full overflow-y-hidden">
                <div className="table-information">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-white">
                            <thead class="text-sm text-white uppercase bg-blue-600">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Tanggal
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nama
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Keperluan
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    DATA_BERANDA.map((data) => (
                                        <tr className="bg-white border-b text-black" key={data.id}>
                                            <td className="px-6 py-4">
                                                <Link to="">{data.id}</Link>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to="">{data.date}</Link>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to="">{data.name}</Link>
                                            </td>
                                            <td className="px-6 py-4">{data.necessary}</td>
                                            <td className="px-6 py-4">{getStatus(data.status)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </main>
    )
}