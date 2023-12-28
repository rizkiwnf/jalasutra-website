import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Api from "../../../api";
import AdminHeader from "../../../components/AdminHeader";
import Loader from '../../../components/Loader.jsx';
import { FaSave } from "react-icons/fa";

export default function EditServices() {
    const [nama, setNama] = useState("");
    const [jenis, setJenis] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [informasi, setInformasi] = useState("");
    const [persyaratan, setPersyaratan] = useState("");
    const [kontak, setKontak] = useState("");
    const [gambar, setGambar] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    const fetchDetailService = async () => {
        await Api.get(`/api/service/${id}`)
            .then(response => {
                setNama(response.data.data.nama);
                setJenis(response.data.data.jenis);
                setDeskripsi(response.data.data.deskripsi);
                setInformasi(response.data.data.informasi);
                setPersyaratan(response.data.data.persyaratan);
                setKontak(response.data.data.kontak);
                setGambar(response.data.data.gambar);
            })
    }

    useEffect(() => {
        // console.log(gambar)
        fetchDetailService();
        // eslint-disable-next-line
    }, [])

    const handlerGambar = (e) => {
        setGambar(e.target.value[0]);
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

        formData.append('nama', nama);
        formData.append('jenis', jenis);
        formData.append('deskripsi', deskripsi);
        formData.append('informasi', informasi);
        formData.append('persyaratan', persyaratan);
        formData.append('kontak', kontak);
        formData.append('gambar', gambar);
        formData.append('_method', 'PATCH');

        await Api.post(`/api/service/${id}`, formData)
            .then(() => {
                successNotification();
                navigate('/admin/services');
            })
            .catch(error => {
                setErrors(error.response.data);
                console.log(error.response.data);
            })
    }

    if (!updateData) {
        <main><Loader /></main>
    }

    const Title = "Edit Layanan";

    return (
        <main>
            <AdminHeader title={Title} />
            <div className="mt-5 p-6 bg-white rounded-lg text-black w-full overflow-y-hidden">
                <form onSubmit={updateData}>
                    <div className="px-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="nama" value={nama} id="nama" onChange={(e) => setNama(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="nama" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama</label>
                                {
                                    errors.nama && (
                                        <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                            <span className="font-semibold">Perhatian!</span> {errors.nama[0]}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="mb-5">
                                <select name="jenis" value={jenis} id="jenis" onChange={(e) => setJenis(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>-- Pilih Jenis Layanan --</option>
                                    <option value="desa">Internal Desa</option>
                                    <option value="kecamatan">Kecamatan</option>
                                    <option value="kota">Pemkab Blitar</option>
                                    <option value="provinsi">Provinsi Jatim</option>
                                    <option value="umum">Umum</option>
                                    <option value="email">Email</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea type="text" name="deskripsi" value={deskripsi} id="deskripsi" onChange={(e) => setDeskripsi(e.target.value)} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""></textarea>
                                <label htmlFor="deskripsi" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Deskripsi</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea type="text" name="informasi" value={informasi} id="informasi" onChange={(e) => setInformasi(e.target.value)} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""></textarea>
                                <label htmlFor="informasi" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Informasi</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="persyaratan" value={persyaratan} id="persyaratan" onChange={(e) => setPersyaratan(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="persyaratan" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Persyaratan</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="kontak" value={kontak} id="kontak" onChange={(e) => setKontak(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="kontak" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kontak</label>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="gambar">Unggah Gambar</label>
                            <input name="gambar" id="gambar" type="file" onChange={handlerGambar} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="gambar" />
                            {
                                errors.gambar && (
                                    <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                        <span className="font-semibold">Perhatian!</span> {errors.gambar[0]}
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex flex-row-reverse">
                            <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <FaSave className="w-4 h-4 me-2" />
                                Simpan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}