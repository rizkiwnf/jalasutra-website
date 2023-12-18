import AdminHeader from "../../../components/AdminHeader";
import MailTemplate from "../../../assets/images/mail-template-1.jpg";

export default function DetailMail() {
    return (
        <main>
            <AdminHeader title="Detail Surat" />
            <div className="w-full mx-auto p-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="detail-tab" data-tabs-target="#detail" type="button" role="tab" aria-controls="detail" aria-selected="false">Detail</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="edit-tab" data-tabs-target="#edit" type="button" role="tab" aria-controls="edit" aria-selected="false">Edit</button>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Tolak</button>
                </div>
                <div id="default-tab-content">
                    <div className="hidden p-4 rounded-lg" id="detail" role="tabpanel" aria-labelledby="detail-tab">
                        <div className="flex flex-row items-start justify-between gap-4">
                            <img src={MailTemplate} className="max-w-lg border-2" alt="" />
                            <dl className="w-full text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                <div className="flex flex-col pb-3">
                                    <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">Pemohon</dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-400">Juwadi Edy</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">Keperluan</dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-400">Perayaan Pernikahan</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">Tempat Pelaksanaan</dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-400">Rumah Bpk. Juwadi Edy</dd>
                                </div>
                                <div className="flex flex-col pt-3">
                                    <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">Alamat</dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-400">Dsn. Banyuurip RT.002/RW.001, Ds. Mojorejo, Kec. Wates, Kab. Blitar</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="hidden p-4 rounded-lg" id="edit" role="tabpanel" aria-labelledby="edit-tab">
                        <form className="">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_nomor_surat" id="floating_nomor_surat" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_nomor_surat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomor Surat</label>
                            </div>
                            <div className="mb-5">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Unggah Tanda Tangan</label>
                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                            </div>
                            <div className="flex flex-row-reverse">
                                <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Terima</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}