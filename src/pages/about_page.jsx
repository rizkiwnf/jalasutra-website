import Navbar from "../widget/navbar";
import AboutUs from "../assets/images/about-us.png"
export default function AboutPage() {
    return (
        <div className="w-screen">
            <div className="container mx-auto my-24 p-10">
                <div className="fixed bg-white top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>
                <div className="about-page">
                    <img src={AboutUs} alt="" />
                </div>
            </div>
        </div>
    )
}