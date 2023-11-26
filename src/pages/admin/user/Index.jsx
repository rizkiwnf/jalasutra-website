import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { Dialog, Transition } from "@headlessui/react"
import { HiUserPlus, HiTrash, HiDocumentMagnifyingGlass, HiXMark } from "react-icons/hi2"
import { PENGGUNA_DATA } from "../../../lib/consts/data"
import AdminHeader from "../../../components/AdminHeader"

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
                <button type="button" onClick={openModal} className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
                    <HiUserPlus className="w-5 h-5 me-2" />
                    Tambah Pengguna
                </button>
            </div>
            <div className="table-information mt-5 bg-white rounded-lg text-black w-full overflow-y-hidden">
                <div className="table-information">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-white">
                            <thead class="text-sm text-white uppercase bg-blue-600">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        id
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nama
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Kelurahan
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Pekerjaan
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {PENGGUNA_DATA.map((data) => (
                                    <tr className="bg-white border-b text-black" key={data.id}>
                                        <td className="px-6 py-4">{data.id}</td>
                                        <td className="px-6 py-4">{data.name}</td>
                                        <td className="px-6 py-4">{data.kelurahan}</td>
                                        <td className="px-6 py-4">{data.pekerjaan}</td>
                                        <td className="px-6 py-4 flex text-xl">
                                            <HiDocumentMagnifyingGlass />
                                            <HiTrash />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                                    >
                                        <p className="font-bold">
                                            Tambahkan Pengguna
                                        </p>
                                        <HiXMark fontSize={25} onClick={closeModal} />
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form className="space-y-3" action="/" method="POST">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    NIK
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        // required
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                                        placeholder="Masukkan Nomor NIK"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Nama
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        // required
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                                        placeholder="Masukkan Nama"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Kelurahan
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        // required
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                                        placeholder="Masukkan Kelurahan yang ditempati"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Pekerjaan
                                                    </label>
                                                </div>
                                                <div className="mt-2">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        // required
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                                        placeholder="Masukkan Pekerjaan Sekarang"
                                                    />
                                                </div>
                                            </div>

                                            <button type="submit" className="text-center w-full bg-admin-blue py-2 rounded-xl text-white ">
                                                <Link to="/dashboard">
                                                    Buat
                                                </Link>
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </main >
    )
}