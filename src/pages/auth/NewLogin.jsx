import LoginPic from "../../assets/images/login-1.png"
import Logo from "../../assets/logo/logo-black.png"

export default function NewLogin() {
    return (
        <section className="bg-admin-blue h-screen p-10">
            <div className="grid grid-rows-1 md:grid-cols-2 gap-4 h-full">
                <div className="w-full max-w-sm p-6 m-auto order-2 md:order-1 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <header className="flex flex-col">
                            <img src={Logo} className="w-36 md:w-48 mx-auto" alt="" />
                        </header>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username@gamail.com" required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Belum terdaftar? <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Hubungi Petugas</a>
                        </div>
                    </form>
                </div>
                <div className="max-w-xl m-auto order-1 ">
                    <img src={LoginPic} alt="" />
                </div>
            </div>
        </section>
    )
}