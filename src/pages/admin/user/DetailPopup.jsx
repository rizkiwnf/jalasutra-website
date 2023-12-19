import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { Dialog, Transition } from "@headlessui/react"
import Profile from "../../../assets/images/blank-profile-picture.jpg"
import { HiXMark, HiMiniPencil } from "react-icons/hi2"

const DetailPopup = (props) => {

    let [isOpen, setIsOpen] = useState(props.isOpen)

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
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
                                            <Link to="/admin/user/edit">
                                                <HiMiniPencil className="cursor-pointer p-1 hover:text-white rounded-full hover:bg-light-blue" fontSize={25} />
                                            </Link>
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
        </>
    )
}

export default DetailPopup