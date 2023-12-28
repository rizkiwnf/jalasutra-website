import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Api from "../../../api/index.jsx";
import AdminHeader from "../../../components/AdminHeader";
import Loader from '../../../components/Loader.jsx';
import { FaSave } from "react-icons/fa";

export default function UserEdit() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [userId, setUserId] = useState("");
    const [nik, setNik] = useState("");
    const [namaLengkap, setNamaLengkap] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [gender, setGender] = useState("");
    const [alamat, setAlamat] = useState("");
    const [pekerjaan, setPekerjaan] = useState("");
    const [kawin, setKawin] = useState("");
    const [photo, setPhoto] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    const fetchDetailUser = async () => {
        await Api.get(`/api/user/${id}`)
            .then(response => {
                setUsername(response.data.data.user.username);
                setEmail(response.data.data.user.email);
                setPassword(response.data.data.user.password);
                setRole(response.data.data.user.role);
                setUserId(response.data.data.user_id);
                setNik(response.data.data.nik);
                setNamaLengkap(response.data.data.nama_lengkap);
                setTanggalLahir(response.data.data.tanggal_lahir);
                setAlamat(response.data.data.alamat);
                setPekerjaan(response.data.data.pekerjaan);
                setKawin(response.data.data.kawin);
                setPhoto(response.data.data.foto);
            })
    }

    useEffect(() => {
        // console.log(pekerjaan);
        fetchDetailUser();
        // eslint-disable-next-line
    }, []);

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
    }

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Data berhasil disimpan.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const updateData = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        formData.append('nama_lengkap', namaLengkap);
        formData.append('user_id', userId);
        formData.append('nik', nik);
        formData.append('tanggal_lahir', tanggalLahir);
        formData.append('gender', gender);
        formData.append('alamat', alamat);
        formData.append('pekerjaan', pekerjaan);
        formData.append('kawin', kawin);
        formData.append('foto', photo);
        formData.append('_method', 'PATCH');

        await Api.post(`/api/user/${id}`, formData)
            .then(() => {
                successNotification();
                navigate('/admin/users');
            })
            .catch(error => {
                setErrors(error.response.data);
                console.log(error.response.data);
            });
    }

    if (!updateData) {
        <main><Loader /></main>
    }

    const Title = "Edit Data Pengguna";

    return (
        <main>
            <AdminHeader title={Title} />
            <div className="mt-5 p-6 bg-white rounded-lg text-black w-full overflow-y-hidden">
                <form onSubmit={updateData}>
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
                            <FaSave className="w-4 h-4 me-2" />
                            Simpan
                        </button>
                    </div>
                    <div id="tab-content">
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="main" role="tabpanel" aria-labelledby="main-tab">
                            <div className="px-4 text-sm text-gray-500 dark:text-gray-400">
                                <input type="text" value={userId} hidden />
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="username" value={username} id="username" onChange={(e) => setUsername(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                                    {
                                        errors.username && (
                                            <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                <span className="font-semibold">Perhatian!</span> {errors.username[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="email" name="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                        {
                                            errors.email && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.email[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group"> {/* value={password}  */}
                                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                        {
                                            errors.password && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.password[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>--- Ubah Status ---</option>
                                        <option value="kecamatan">Admin Kecamatan</option>
                                        <option value="desa">Operator Desa</option>
                                        <option value="warga">Warga</option>
                                    </select>
                                    {
                                        errors.role && (
                                            <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                <span className="font-semibold">Perhatian!</span> {errors.role[0]}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="detail" role="tabpanel" aria-labelledby="detail-tab">
                            <div className="px-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="nik" value={nik} id="nik" onChange={(e) => setNik(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="nik" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomor Induk Kependudukan</label>
                                        {
                                            errors.nik && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.nik[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="nama_lengkap" value={namaLengkap} id="nama_lengkap" onChange={(e) => setNamaLengkap(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="nama_lengkap" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap</label>
                                        {
                                            errors.nama_lengkap && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.nama_lengkap[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="pekerjaan" value={pekerjaan} id="pekerjaan" onChange={(e) => setPekerjaan(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="pekerjaan" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pekerjaan</label>
                                        {
                                            errors.pekerjaan && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.pekerjaan[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="mb-5">
                                        <select id="role" name="desa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
                                            <option value="desa">--- Pilih Desa ---</option>
                                            <option value="desa">Desa 1</option>
                                            <option value="desa">Desa 2</option>
                                            <option value="desa">Desa 3</option>
                                            <option value="desa">Desa 4</option>
                                            <option value="desa">Desa 5</option>
                                        </select>
                                        {
                                            errors.desa && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.desa[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <textarea type="text" name="alamat" value={alamat} id="alamat" onChange={(e) => setAlamat(e.target.value)} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""></textarea>
                                    <label htmlFor="alamat" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Alamat</label>
                                    {
                                        errors.alamat && (
                                            <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                <span className="font-semibold">Perhatian!</span> {errors.alamat[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="foto">Masukan Tanggal Lahir</label>
                                        <input type="date" name="tanggal_lahir" value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        {
                                            errors.tanggal_lahir && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.tanggal_lahir[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="gender">Jenis Kelamin</label>
                                        <div className="grid md:grid-cols-2 md:gap-6">
                                            {
                                                gender === 'pria' ?
                                                    <>
                                                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                            <input id="bordered-radio-1" type="radio" checked value="pria" name="gender" onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pria</label>
                                                        </div>
                                                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                            <input id="bordered-radio-2" type="radio" value="wanita" name="gender" onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wanita</label>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                            <input id="bordered-radio-1" type="radio" value="pria" name="gender" onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pria</label>
                                                        </div>
                                                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                            <input id="bordered-radio-2" type="radio" checked value="wanita" name="gender" onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wanita</label>
                                                        </div>
                                                    </>
                                            }
                                            {
                                                errors.gender && (
                                                    <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                        <span className="font-semibold">Perhatian!</span> {errors.gender[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Unggah Foto</label>
                                        <input name="foto" id="foto" type="file" onChange={handlePhoto} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="foto" />
                                        {
                                            errors.foto && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.foto[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="flex items-center">
                                        {/* {
                                            kawin ?
                                                <input checked name="kawin" id="link-checkbox" type="checkbox" value="true" onChange={(e) => setKawin(e.target.value)} className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                :
                                                <input name="kawin" id="link-checkbox" type="checkbox" value="true" onChange={(e) => setKawin(e.target.value)} className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        } */}
                                        <input name="kawin" id="link-checkbox" type="checkbox" onChange={(e) => setKawin(e.target.value = true)} className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="link-checkbox" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Sudah Menikah</label>
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