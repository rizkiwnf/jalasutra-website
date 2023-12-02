import Sidebar from "../../widget/admin/sidebar"
import Topbar from "../../widget/admin/topbar"
import { Link, Outlet } from "react-router-dom"
import Users from "./users"
import {HiTrash, HiDocumentMagnifyingGlass } from "react-icons/hi2";
import classNames from "classnames";
import { PENGAJUAN_DATA} from "../../lib/consts/data";
import { getStatus } from "../../lib/helper/get_status";
const styleBackground = 'bg-white rounded-lg p-3 text-white';
export default function PengajuanSurat() {
    return (
        <>
            <div className="w-screen flex flex-row bg-gray-admin">
                <Sidebar />
                <div className="flex-1">
                    <div className="top-bar">
                        <Topbar />
                        <div className="flex flex-col m-2 gap-3">
                            <div className={classNames("welcome text-3xl font-bold text-admin-blue", styleBackground)}>
                                <p>Pengajuan Surat</p>
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
                                                        Status
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {PENGAJUAN_DATA.map((data) => (
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
                                                        <td className="px-6 py-4">{getStatus(data.status)}</td>
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