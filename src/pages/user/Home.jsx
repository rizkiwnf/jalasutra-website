import ServiceCardUser from "../../components/ServiceCardUser";
import Logo1 from "../../assets/images/service-logo-1.png";
import Logo2 from "../../assets/images/service-logo-2.png";
import Logo3 from "../../assets/images/service-logo-3.png";
import Logo4 from "../../assets/images/service-logo-4.png";
import Logo from '../../assets/logo/logo-black.png';

export default function Home() {
    let services = [
        {
            logo: Logo1,
            name: "BPJS Ketenagakerjaan",
            desc: "Officia qui quis qui sint nulla excepteur in excepteur non cupidatat officia.",
        },
        {
            logo: Logo2,
            name: "Email",
            desc: "Lorem pariatur sunt occaecat velit veniam enim et magna exercitation aliqua labore cillum exercitation.",
        },
        {
            logo: Logo3,
            name: "PT PLN",
            desc: "Deserunt elit pariatur aliqua proident aute esse occaecat tempor nulla laborum fugiat cillum.",
        },
        {
            logo: Logo4,
            name: "PT KAI",
            desc: "Do veniam enim officia et est sunt laboris mollit laboris incididunt ipsum sit elit.",
        },
    ];
    return (
        <main className="container my-5 px-8 py-6 bg-white shadow-lg border-t-2 rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <img src={Logo} className="h-14" alt="" />
                <p className="text-2xl font-semibold">Pilih Layanan</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10">
                <ServiceCardUser services={services} />
            </div>
        </main>
    )
}