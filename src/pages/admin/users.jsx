import Sidebar from "../../widget/admin/sidebar"
import { Link } from "react-router-dom"
import Topbar from "../../widget/admin/topbar"
import { PENGGUNA_DATA } from "../../lib/consts/data";
import { getStatus } from "../../lib/helper/get_status";
import { HiUserPlus, HiTrash, HiDocumentMagnifyingGlass, HiXMark } from "react-icons/hi2";
import AddUser from "../../components/modal/add_user";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'



export default function Users() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className="w-screen flex flex-row bg-gray-admin">
                <Sidebar />
                <div className="flex-1">
                    <div className="top-bar">
                        <Topbar />
                        <div className="flex flex-col m-2 gap-3">
                            <div className="title px-4 flex justify-between items-center bg-white py-3 rounded-xl">
                                <p className="text-2xl font-bold text-admin-blue">Pengguna Jalasutra</p>
                                <div className="add-user flex items-center bg-green-500 text-wite p-3 rounded-lg text-white gap-3">
                                    <HiUserPlus fontSize={25} />
                                    <button type="button"
                                        onClick={openModal}>Tambah Pengguna</button>
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
                                                        <td className="px-6 py-4">
                                                            <Link to="">{data.id}</Link>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <Link to="">{data.name}</Link>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <Link to="">{data.kelurahan}</Link>
                                                        </td>
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
                        </div>
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
                                        <HiXMark fontSize={25} onClick={closeModal}/>
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
        </>
    )
}