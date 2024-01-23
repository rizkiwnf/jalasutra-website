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
            date: '4 Januari 2024',
            description: 'Badan Amil Zakat Naional (BAZNAS) Kabupaten Blitar melangsungkan Pentasyarufan Zakat Tahun 2024 di Desa Pasirharjo Kecamatan Talun, Kamis (04/01/2024). Acara ini dihadiri Bupati Blitar Rini Syarifah didampingi Ketua Baznas, OPD Terkait, Forkopimcam serta penerima zakat.'
        },
        {
            pic: GalleryPic2,
            title: 'Bupati Blitar Laksanakan Forum Konsultasi Publik',
            date: '23 Maret 2023',
            description: 'Pemerintah Kabupaten Blitar mengadakan Forum Konsultasi Publik Rancangan Awal Rencana Pembangunan Jangka Panjang Kabupaten Blitar (RPJPD) Kabupaten Blitar Tahun 2025-2045. Kegiatan yang dibuka oleh Bupati Blitar, Hj. Rini Syarifah ini dilaksanakan pada Kamis (21/12) di Ruang Rapat Candi Penataran Kanigoro.'
        },
        {
            pic: GalleryPic3,
            title: 'Bupati Blitar Resmikan Sabo Dam Kali Bentak',
            date: '24 Maret 2023',
            description: ' Bupati Blitar Rini Syarifah didampingi Kepala Dinas PUPR meresmikan Sabo Dam Kali Bentak di Kecamatan Panggungrejo, Rabu (13/12/2023). Mak Rini mengatakan sebelumnya, Sabo Dam Kali Bentak mengalami rusak parah akibat banjir tahun 2022. Mak Rini meminta Dinas PUPR untuk segera melakukan perbaikan sehingga dapat diresmikan pada hari ini.'
        },
        {
            pic: GalleryPic4,
            title: 'Monitoring Pos PAM Lilin Semeru',
            date: '25 Maret 2023',
            description: 'Kegiatan Monitoring POS PAM Natal 2023 dan Tahun Baru 2024 tempat Pos Pam Srengat. Tim UPP Kabupaten Blitar melakukan sidak monitoring pada tanggal 24 Desember 2023 pukul 10.00 s/d selesai. Situasi arus lalu lintas seputaran Pos Pam Srengat dilaporkan landai lancar, aktifitas masyarakat belum ada peningkatan.'
        },
        {
            pic: GalleryPic2,
            title: 'Bupati Blitar Laksanakan Forum Konsultasi Publik',
            date: '24 Maret 2023',
            description: 'Pemerintah Kabupaten Blitar mengadakan Forum Konsultasi Publik Rancangan Awal Rencana Pembangunan Jangka Panjang Kabupaten Blitar (RPJPD) Kabupaten Blitar Tahun 2025-2045. Kegiatan yang dibuka oleh Bupati Blitar, Hj. Rini Syarifah ini dilaksanakan pada Kamis (21/12) di Ruang Rapat Candi Penataran Kanigoro.'
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