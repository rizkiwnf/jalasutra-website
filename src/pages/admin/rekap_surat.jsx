import Sidebar from "../../widget/admin/sidebar"
import Topbar from "../../widget/admin/topbar"
import { Link, Outlet } from "react-router-dom"
import Users from "./users"
import { HiUsers, HiEnvelopeOpen, HiFaceSmile, HiUserPlus, HiTrash, HiDocumentMagnifyingGlass } from "react-icons/hi2";
import classNames from "classnames";
import { PENGGUNA_DATA, REKAP_DATA} from "../../lib/consts/data";

const styleBackground = 'bg-white rounded-lg p-3 text-white';
export default function RekapSurat() {
    return (
        <>
            <div className="w-screen flex flex-row bg-gray-admin">
                <Sidebar />
                <div className="flex-1">
                    <div className="top-bar">
                        <Topbar />
                        <div className="flex flex-col m-2 gap-3">
                            <div className={classNames("welcome text-3xl font-bold text-admin-blue", styleBackground)}>
                                <p>Rekap Surat</p>
                            </div>
                            <div className={classNames("information-box grid grid-cols-4 text-white gap-10", styleBackground)}>
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
                                <div className="letter flex flex-row items-center justify-around gap-4 bg-admin-blue rounded-lg p-4">
                                    <HiEnvelopeOpen fontSize={50} />
                                    <div className="text">
                                        <p className="font-bold">Surat Dibuat</p>
                                        <p className="text-sm">236 Surat</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="table-information bg-white rounded-lg p-5 text-black w-full overflow-y-hidden">
                                <div className="table-information">

                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table class="w-full text-sm text-left text-white">
                                            <thead class="text-sm text-white uppercase bg-gray-50 bg-[#D9D9D9]">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        id
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Nomor
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        NIK
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Tanggal
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Jenis
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {REKAP_DATA.map((data) => (
                                                    <tr className="bg-white border-b text-black" key={data.id}>
                                                        <td className="px-6 py-4">
                                                            <Link to="">{data.id}</Link>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <Link to="">{data.nomor}</Link>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <Link to="">{data.nik}</Link>
                                                        </td>
                                                        <td className="px-6 py-4">{data.tanggal}</td>
                                                        <td className="px-6 py-4">{data.jenis_surat}</td>
                                                        <td className="px-6 py-4 flex text-xl">
                                                            <HiDocumentMagnifyingGlass/>
                                                            <HiTrash/>
                                                        </td>
                                                        
                                                        
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}