import GambarLogo from "../assets/images/Logo Black.svg"
import GambarLogin from "../assets/images/login-page.png"
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="w-screen bg-admin-blue h-screen py-10 lg:py-12 overflow-y-hidden">
                <div className="container mx-auto rounded-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 place-content-between items-center bg-white rounded-xl mx-2">
                        <div className="form ">
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <img
                                        className="mx-auto h-24 w-auto"
                                        src={GambarLogo}
                                        alt="Your Company"
                                    />
                                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                        Selamat Datang
                                    </h2>
                                </div>
                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <form className="space-y-6" action="#" method="POST">
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
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                                    placeholder="Masukkan Nomor NIK"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                                    placeholder="Masukkan Password"
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="text-center w-full bg-admin-blue py-2 rounded-xl text-white ">
                                            Masuk
                                        </button>
                                        <p className="text-center">Belum punya akun? <span className="text-dark-blue"><Link to="/">Buat disini!</Link></span></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block bg-[#839CFF] py-4 rounded-r-xl">
                            <div className="image flex flex-col justify-center gap-0 items-center  px-10 py-4">
                                <div className="login-text text-right">
                                    <p className="font-bold text-lg">Jalasutra</p>
                                    <p className="text-sm">Jenis Apapun Layanan Cukup di kantor Kecamatan/Desa</p>
                                    <p className="text-sm">Memudahkan Anda dalam menggunakan pelayanan yang ada di Kabupaten Blitar</p>
                                </div>
                                <img src={GambarLogin} alt="" width={500} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer text-center text-white opacity-70 pt-4">
                    Jalasutra @ 2023
                </div>
            </div>
        </>
    )
}