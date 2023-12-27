import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { HiMiniPencil } from "react-icons/hi2"
import Api from "../../../api";
import Profile from "../../../assets/images/blank-profile-picture.jpg"
import Loader from "../../../components/Loader";

export default function UserDetail() {
    const [profile, setProfile] = useState("");

    const { id } = useParams();

    const fetchDetailUser = async () => {
        await Api.get(`/api/user/${id}`)
            .then(response => {
                setProfile(response.data.data);
            })
    }

    useEffect(() => {
        fetchDetailUser();
        // eslint-disable-next-line
    }, []);

    if (!profile) {
        return <main><Loader /></main>
    }

    return (
        <main>
            <div className="w-full mt-auto rounded-lg bg-white p-6 text-left align-middle shadow-lg">
                <div className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <h1 className="font-bold uppercase">
                            Detail Data {profile.nama_lengkap}
                        </h1>
                        <Link to={`/admin/user/edit/${profile.user.id}`}>
                            <HiMiniPencil className="cursor-pointer p-1 hover:text-white rounded-full hover:bg-light-blue" fontSize={25} />
                        </Link>
                    </div>
                </div>
                <div className="mt-4 px-2 flex flex-col">
                    <img src={Profile} className="mx-auto rounded-full w-24 h-24" alt="Default Profile" />
                    <div className="mt-4">
                        <dl class="divide-y divide-gray-100">
                            <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900">NIK</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.nik}</dd>
                            </div>
                            <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900">Nama Lengkap</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.nama_lengkap}</dd>
                            </div>
                            <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize ">{profile.tanggal_lahir}</dd>
                            </div>
                            <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900">Jenis Kelamin</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.gender}</dd>
                            </div>
                            <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900">Alamat</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.alamat}</dd>
                            </div>
                            <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900">Pekerjaan</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.pekerjaan}</dd>
                            </div>
                            <div class="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900">Status</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.kawin ? 'berkeluarga' : 'belum kawin'}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </main>
    )
}