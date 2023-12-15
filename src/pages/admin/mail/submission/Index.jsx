import { DATA_PENGAJUAN } from '../../../../data/AdminData'
import { HiTrash, HiDocumentMagnifyingGlass } from "react-icons/hi2"
import { getStatus } from '../../../../utils/getStatus'
import AdminHeader from '../../../../components/AdminHeader'

export default function IndexMail() {
    const Title = "Surat Masuk"
    return (
        <main>
            <AdminHeader title={Title} />
            <div className="mt-5 bg-white rounded-lg text-black w-full overflow-y-hidden">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-white">
                        <thead class="text-sm text-white uppercase bg-blue-600">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nomor SUrat
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
                            {
                                DATA_PENGAJUAN.map((data, index) => (
                                    <tr className="bg-white border-b text-black" key={index}>
                                        <td className="px-6 py-4">
                                            <p>{index + 1}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>{data.nomor}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>{data.nik}</p>
                                        </td>
                                        <td className="px-6 py-4">{data.tanggal}</td>
                                        <td className="px-6 py-4">{getStatus(data.status)}</td>
                                        <td className="flex flex-wrap px-6 py-4 items-center gap-2 text-xl">
                                            <a href="/admin/mail/detail" className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <HiDocumentMagnifyingGlass className="w-5 h-5 text-white me-2" />
                                                Lihat
                                            </a>
                                            <button type="button" className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                                <HiTrash className="w-5 h-5 text-white me-2" />
                                                Hapus
                                            </button>
                                        </td>
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