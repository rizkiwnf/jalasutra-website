import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedServices from "../components/FeaturedServices";
import FeaturedNews from "../components/FeaturedNews";
import ServiceLogo1 from "../assets/images/service-logo-1.png";
import ServiceLogo2 from "../assets/images/service-logo-2.png";
import ServiceLogo3 from "../assets/images/service-logo-3.png";
import NewsPic1 from "../assets/images/news-pic-1.png";
import NewsPic2 from "../assets/images/news-pic-2.png";
import NewsPic3 from "../assets/images/news-pic-3.png";
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
    ];

    let news = [
        {
            logo: NewsPic1,
            title: 'Berita 1',
            date: '22 Maret 2023',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
        },
        {
            logo: NewsPic2,
            title: 'Berita 2',
            date: '23 Maret 2023',
            description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
        },
        {
            logo: NewsPic3,
            title: 'Berita 3',
            date: '24 Maret 2023',
            description: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
        {
            logo: NewsPic1,
            title: 'Berita 4',
            date: '25 Maret 2023',
            description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
        },
        {
            logo: NewsPic2,
            title: 'Berita 5',
            date: '24 Maret 2023',
            description: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
        },
    ];
    return (
        <main>
            <HeroSection />
            <FeaturedServices services={services} />
            <FeaturedNews news={news} />
            <FeaturedServiceFlow />
        </main>
    )
}
export default Dashboard;