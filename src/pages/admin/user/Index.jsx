import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { Dialog, Transition } from "@headlessui/react"
import AdminHeader from "../../../components/AdminHeader"
import { HiUserPlus, HiTrash, HiDocumentMagnifyingGlass, HiXMark, HiMiniPencil } from "react-icons/hi2"
import { DATA_PENGGUNA } from "../../../data/AdminData"
import Profile from "../../../assets/images/blank-profile-picture.jpg"

export default function IndexUser() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

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
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kelurahan
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pekerjaan
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DATA_PENGGUNA.map((data, index) => (
                                    <tr className="bg-white border-b text-black" key={index}>
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{data.name}</td>
                                        <td className="px-6 py-4">{data.kelurahan}</td>
                                        <td className="px-6 py-4">{data.pekerjaan}</td>
                                        <td className="flex flex-wrap px-6 py-4 items-center gap-2 text-xl">
                                            <button type="button" onClick={openModal} className="px-2.5 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <HiDocumentMagnifyingGlass className="w-5 h-5 text-white me-2" />
                                                Lihat
                                            </button>
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
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl max-h-[450px] overflow-auto mt-16 rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                                    >
                                        <div className="flex flex-row gap-2">
                                            <h1 className="font-bold">
                                                Detail Pengguna
                                            </h1>
                                            <a href="/admin/user/edit">
                                                <HiMiniPencil className="cursor-pointer p-1 hover:text-white rounded-full hover:bg-light-blue" fontSize={25} />
                                            </a>
                                        </div>
                                        <HiXMark className="cursor-pointer p-1 hover:text-white rounded-full hover:bg-light-blue" fontSize={25} onClick={closeModal} />
                                    </Dialog.Title>
                                    <div className="mt-4 p-2 flex flex-col">
                                        <img src={Profile} className="mx-auto rounded-full w-24 h-24" alt="Default Profile" />
                                        <div className="mt-4">
                                            <dl class="divide-y divide-gray-100">
                                                <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Nama Lengkap</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                                                </div>
                                                <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Pekerjaan</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                                </div>
                                                <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                                </div>
                                                <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
                                                </div>
                                                <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Culpa adipisicing mollit laborum elit ullamco anim irure consectetur id sunt enim aliquip non Lorem. Veniam do quis in ut eiusmod. Do non id duis dolor do et et magna in officia ex laboris ut. Qui adipisicing anim dolore fugiat laboris aliquip reprehenderit. Deserunt sit laborum amet ea. Aliqua reprehenderit proident labore aliquip qui id eu duis magna est eu. Quis veniam enim nulla duis fugiat cillum eiusmod consequat et mollit cupidatat sunt aliqua adipisicing. Quis id labore enim cillum aute officia duis magna adipisicing amet.</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </main>
    )
}