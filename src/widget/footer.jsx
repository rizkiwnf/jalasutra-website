import React from "react";
import GambarLogo from "../assets/images/Logo White.svg"
import Logo from "../components/Logo"
import { FaWhatsapp, FaEnvelope, FaSquareFacebook, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (<
        div className="footer bg-dark-blue text-white w-screen" >
        <
        div className="container mx-auto py-4" >
            <
        div className="footer-content flex flex-col lg:flex-row justify-between items-center" >
                <
        div className="first-col lg:w-[293px] flex flex-col gap-4" >
                    <
        div className="about-footer flex flex-col justify-center lg:justify-normal items-center lg:items-start" >
                        <
                            Logo width="w-[161px]"
                            gambarLogo={GambarLogo}
                        /> <
        p className="text-sm text-center lg:text-left pl-3" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor < /p> <
                /div> <
                div className="about-us text-left pl-3 flex flex-col justify-center lg:justify-normal items-center lg:items-start" >
                                <
                p className="text-xl font-bold" >
                                    Kontak Kami <
                /p> <
                ul className="flex flex-row gap-5 mt-4" >
                                        <
                li >
                                            <
                                                a href="/email" > < FaEnvelope size={30}
                                                /></a >
                                            <
            /li> <
            li >
                                                <
                                                    a href="/email" > < FaWhatsapp size={30}
                                                    /></a >
                                                <
        /li> <
        li >
                                                    <
                                                        a href="/email" > < FaYoutube size={30}
                                                        /></a >
                                                    <
        /li> <
        li >
                                                        <
                                                            a href="/email" > < FaSquareFacebook size={30}
                                                            /></a >
                                                        <
        /li> <
        /ul> <
        /div> <
        /div> <
        div className="second-col flex flex-col text-left my-5 lg:my-0" >
                                                            <
        p className=" text-xl font-bold mb-3" > Layanan Kami < /p> <
        ul className="text-sm flex flex-col text-center lg:text-left gap-3" >
                                                                    <
        li >
                                                                        <
        a href="" > Layanan < /a> <
        /li> <
        li >
                                                                                <
        a href="" > Berita < /a> <
        /li> <
        li >
                                                                                        <
        a href="" > Alur Pengajuan < /a> <
        /li> <
        li >
                                                                                                <
        a href="" > Kontak Kami < /a> <
        /li> <
        /ul> <
        /div> <
        div className="third-col rounded-lg py-4" >
                                                                                                        <
        iframe className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]"
                                                                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126466.82832122744!2d110.04564251879441!3d-7.885821447173409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae4a4039fa535%3A0x4027a76e352fba0!2sWates%2C%20Kec.%20Wates%2C%20Kabupaten%20Kulon%20Progo%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1694112338069!5m2!1sid!2sid"
                                                                                                            allowfullscreen=""
                                                                                                            loading="lazy"
                                                                                                            style={
                                                                                                                { borderRadius: "30px" }}
                                                                                                            referrerpolicy="no-referrer-when-downgrade" > < /iframe> <
        /div>

                                                                                                            <
        /div> <
        p className="text-center" > ©copyright 2023 Jalasutra < /p> <
        /div>


                                                                                                                <
        /div>
                                                                                                                )
}
                                                                                                                export default Footer;