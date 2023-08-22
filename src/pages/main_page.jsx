import React from "react";
import TopBar from "../components/navbar/topbar";
import image1 from "./../assets/images/image-main-static.png"
import image2 from "./../assets/images/image-1.png"
import line from "./../assets/images/line-main.png"

const MainPage = () => {

    return (
        <div className="main-page">
            <TopBar />
            <div className="container w-full mx-auto my-9">
                <div className="text-left pb-3 text-lg">
                    <div className="flex items-center gap-44">
                        <p className="">Mall Pelayanan Publik Jalasutra</p>
                        <img src={line} alt="" />
                    </div>
                    <p className="font-extrabold ">Jenis Apapun Layanan Cukup di Kantor Kecamatan/Desa</p>
                </div>
                <div className="flex justify-between">
                    <div>

                        <img src={image1} alt="" />
                    </div>
                    <div className="w-96 text-left text-sm font-semibold flex flex-col gap-5">
                        <div className="flex gap-4">
                            <img src={image2} alt="" />
                            <div className="flex flex-col gap-2">
                                <p>Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?</p>
                                <p className="text-xs font-thin">20 Maret 2023</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src={image2} alt="" />
                            <div className="flex flex-col gap-2">
                                <p>Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?</p>
                                <p className="text-xs font-thin">20 Maret 2023</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src={image2} alt="" />
                            <div className="flex flex-col gap-2">
                                <p>Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?</p>
                                <p className="text-xs font-thin">20 Maret 2023</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src={image2} alt="" />
                            <div className="flex flex-col gap-2">
                                <p>Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?</p>
                                <p className="text-xs font-thin">20 Maret 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
