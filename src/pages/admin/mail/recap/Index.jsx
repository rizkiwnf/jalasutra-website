import { REKAP_DATA } from "../../../../data/AdminData"
import { HiUsers, HiEnvelopeOpen, HiFaceSmile, HiTrash, HiDocumentMagnifyingGlass } from "react-icons/hi2";
import AdminHeader from "../../../../components/AdminHeader";

export default function IndexMail() {
    const Title = "Rekap Surat"
    return (
        <main>
            <AdminHeader title={Title} />
            {/* <div className={classNames("information-box grid grid-cols-4 text-white gap-10", styleBackground)}> */}
            <div className="grid grid-cols-4 text-white gap-10 bg-white rounded-lg">
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

            <div className="mt-5 bg-white rounded-lg text-black w-full overflow-y-hidden">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-white">
                        <thead class="text-sm text-white uppercase bg-blue-600">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nomor Surat
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
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                REKAP_DATA.map((data, index) => (
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
                                        <td className="px-6 py-4">{data.jenis_surat}</td>
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