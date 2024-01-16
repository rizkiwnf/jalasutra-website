import { useState } from "react";
import { Modal, Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ services }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {
                services.map((service, index) => {
                    return (
                        <div key={index} className="max-w-sm p-6 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-wrap items-center gap-2">
                                    <img src={service.gambar} className="h-10" alt="" />
                                    <Link to="#">
                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{service.nama}</h5>
                                    </Link>
                                </div>
                                <div className="h-32 my-4 overflow-auto">
                                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400">{service.deskripsi}</p>
                                </div>
                                <div className="w-1/2">
                                    <button onClick={() => setOpenModal(true)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Selengkapnya
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Info</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            (Deskripsi Lyananan)
                            Exercitation culpa esse mollit dolore fugiat quis nulla id consequat aliqua sunt fugiat. Ut sint irure excepteur proident in proident labore nisi fugiat exercitation consequat magna. Eiusmod nulla nostrud tempor magna aliquip. Exercitation duis nostrud dolore anim laboris et magna sit ullamco reprehenderit. In aliqua exercitation tempor ullamco aute laborum proident reprehenderit enim ut magna irure.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            (Daftar Persyaratan)
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Footer.Copyright href="#" by="Jalasutra" year={2023} />
                </Modal.Footer>
            </Modal>
        </>
    )
}