import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedServices from "../components/FeaturedServices";
import FeaturedNews from "../components/FeaturedNews";
import ServiceLogo1 from "../assets/images/service-logo-1.png";
import ServiceLogo2 from "../assets/images/service-logo-2.png";
import ServiceLogo3 from "../assets/images/service-logo-3.png";
import ServiceLogo4 from "../assets/images/service-logo-4.png";
import GalleryPic1 from "../assets/images/gallery/gallery-1.jpg";
import GalleryPic2 from "../assets/images/gallery/gallery-2.jpeg";
import GalleryPic3 from "../assets/images/gallery/gallery-3.jpg";
import GalleryPic4 from "../assets/images/gallery/gallery-4.jpeg";
import FeaturedServiceFlow from "../components/FeaturedServiceFlow";

const Dashboard = () => {
    let services = [
        {
            logo: ServiceLogo1,
            title: 'BPJS',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: ServiceLogo2,
            title: 'E-Mail',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: ServiceLogo3,
            title: 'PLN',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: ServiceLogo4,
            title: 'PT KAI',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: ServiceLogo3,
            title: 'PLN',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            logo: ServiceLogo4,
            title: 'PT KAI',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
    ];

    let galleries = [
        {
            pic: GalleryPic1,
            title: 'Bupati Blitar Serahkan Zakat',
            date: '22 Maret 2023',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
        },
        {
            pic: GalleryPic2,
            title: 'Bupati Blitar Laksanakan Forum Konsultasi Publik',
            date: '23 Maret 2023',
            description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
        },
        {
            pic: GalleryPic3,
            title: 'Bupati Blitar Resmikan Sabo Dam Kali Bentak',
            date: '24 Maret 2023',
            description: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
        {
            pic: GalleryPic4,
            title: 'Monitoring Pos PAM Lilin Semeru',
            date: '25 Maret 2023',
            description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
        },
        {
            pic: GalleryPic2,
            title: 'Bupati Blitar Laksanakan Forum Konsultasi Publik',
            date: '24 Maret 2023',
            description: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
    ];
    return (
        <main>
            <HeroSection />
            <FeaturedServices services={services} />
            <FeaturedNews galleries={galleries} />
            <FeaturedServiceFlow />
        </main>
    )
}
export default Dashboard;