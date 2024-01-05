import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Api from "../../api"

import LoginPic from "../../assets/images/login-1.png"
import Logo from "../../assets/logo/logo-black.png"
import Swal from "sweetalert2"

export default function NewLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Login Berhasil.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const failedNotification = async () => {
        Swal.fire({
            icon: "error",
            title: "Login gagal!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        await Api.post('/api/login', formData)
            .then((response) => {
                successNotification();
                localStorage.setItem('token', response.data.token);
                navigate(`/user/${response.data.user.id}`);
            })
            .catch((error) => {
                failedNotification();
                setValidation(error.response.data);
            })
    }
    return (
        <section className="bg-admin-blue h-screen p-10">
            <div className="grid grid-rows-1 md:grid-cols-2 gap-4 h-full">
                <div className="w-full max-w-sm p-6 m-auto order-2 md:order-1 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={loginHandler}>
                        <header className="flex flex-col">
                            <img src={Logo} className="w-36 md:w-48 mx-auto" alt="" />
                        </header>
                        {
                            validation.message && (
                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <span className="font-semibold">Perhatian!</span> {validation.message[0]}
                                </div>
                            )
                        }
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username@gamail.com" required />
                            {
                                validation.email && (
                                    <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                        <span className="font-semibold">Perhatian!</span> {validation.email[0]}
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            {
                                validation.password && (
                                    <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                        <span className="font-semibold">Perhatian!</span> {validation.password[0]}
                                    </div>
                                )
                            }
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