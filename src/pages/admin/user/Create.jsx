import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from "../../../api/index.jsx";
import AdminHeader from "../../../components/AdminHeader";
import Loader from '../../../components/Loader.jsx';

export default function UserCreate() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [namaLengkap, setNamaLengkap] = useState("");
    const [nik, setNik] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [gender, setGender] = useState("");
    const [alamat, setAlamat] = useState("");
    const [pekerjaan, setPekerjaan] = useState("");
    const [kawin, setKawin] = useState("");
    const [photo, setPhoto] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
    }

    const storeData = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('uername', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('nama_lengkap', namaLengkap);
        formData.append('nik', nik);
        formData.append('tanggal_lahir', tanggalLahir);
        formData.append('gender', gender);
        formData.append('alamat', alamat);
        formData.append('pekerjaan', pekerjaan);
        formData.append('kawin', kawin);
        formData.append('foto', photo);

        await Api.post('/api/user', formData)
            .then(() => {
                navigate('/admin/user');
            })
            .catch(error => {
                // console.log(error.response.data);
                setErrors(error.response.data);
            })
    }

    if (!storeData) {
        <main><Loader /></main>
    }

    const Title = "Buat User Baru"

    return (
        <main>
            <AdminHeader title={Title} />
            <div className="mt-5 p-6 bg-white rounded-lg text-black w-full overflow-y-hidden">
                <form onSubmit={storeData}>
                    <div className="flex flex-row justify-between items-center mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#tab-content" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="main-tab" data-tabs-target="#main" type="button" role="tab" aria-controls="main" aria-selected="false">Main</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="detail-tab" data-tabs-target="#detail" type="button" role="tab" aria-controls="detail" aria-selected="false">Detail</button>
                            </li>
                        </ul>
                        <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                            </svg>
                            Tambah
                        </button>
                    </div>
                    <div id="tab-content">
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="main" role="tabpanel" aria-labelledby="main-tab">
                            <div className="px-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <select id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>--- Pilih Status ---</option>
                                        <option value="desa">Desa 1</option>
                                        <option value="desa">Operator Desa</option>
                                        <option value="warga">Warga</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="detail" role="tabpanel" aria-labelledby="detail-tab">
                            <div className="px-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="nik" id="nik" onChange={(e) => setNik(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="nik" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomor Induk Kependudukan</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="nama_lengkap" id="nama_lengkap" onChange={(e) => setNamaLengkap(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="nama_lengkap" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="pekerjaan" id="pekerjaan" onChange={(e) => setPekerjaan(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="pekerjaan" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pekerjaan</label>
                                    </div>
                                    <div className="mb-5">
                                        <select id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>--- Pilih Desa ---</option>
                                            <option value="desa">Desa 1</option>
                                            <option value="desa">Desa 2</option>
                                            <option value="desa">Desa 3</option>
                                            <option value="desa">Desa 4</option>
                                            <option value="desa">Desa 5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <textarea type="text" name="alamat" id="alamat" onChange={(e) => setAlamat(e.target.value)} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""></textarea>
                                    <label htmlFor="alamat" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Alamat</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Masukan Tanggal Lahir</label>
                                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="gender">Jenis Kelamin</label>
                                        <div className="grid md:grid-cols-2 md:gap-6">
                                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                <input id="bordered-radio-1" type="radio" value="pria" name="gender" onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pria</label>
                                            </div>
                                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                <input id="bordered-radio-2" type="radio" value="wanita" name="gender" onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wanita</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Unggah Foto</label>
                                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" name="foto" id="user_avatar" type="file" onChange={handlePhoto} />
                                    </div>
                                    <div class="flex items-center">
                                        <input name="kawin" id="link-checkbox" type="checkbox" value="true" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="link-checkbox" class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Sudah Menikah</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}