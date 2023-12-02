import Logo from "../../assets/logo/logo-black.png"
import LoginBanner from "../../assets/images/login-page.png"

export default function Login() {
    return (
        <div className="p-7 bg-admin-blue">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-content-between items-center bg-white md:rounded-xl">
                <div className="form my-2 md:my-0 order-2 md:order-1 w-full md:mx-auto px-10 py-4 md:p-0 md:max-w-md">
                    <img className="mx-auto h-16 md:h-24" src={Logo} alt="Jalasutra" />
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="mx-auto" action="/" method="POST">
                            <div className="mb-5">
                                <label for="email" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Email/Username</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                            </div>
                            <div className="mb-5">
                                <label for="password" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                </div>
                                <label for="remember" className="ms-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm sm:px-3 md:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</button>
                        </form>
                    </div>
                </div>
                <div className="bg-[#839CFF] py-4 order-1 md:order-2 md:rounded-r-xl">
                    <div className="image flex flex-col justify-center gap-0 items-center px-5 md:px-10 py-4">
                        <div className="login-text text-right">
                            <p className="font-semibold text-sm md:text-md">Jalasutra</p>
                            <p className="text-xs">Jenis Apapun Layanan Cukup di kantor Kecamatan/Desa</p>
                            <p className="text-xs mt-1">Memudahkan Anda dalam menggunakan pelayanan yang ada di Kabupaten Blitar</p>
                        </div>
                        <img src={LoginBanner} alt="" width={450} />
                    </div>
                </div>
            </div>
            {/* <div className="footer text-center text-white opacity-70">
                    Jalasutra @ 2023
                </div> */}
        </div>
    )
}