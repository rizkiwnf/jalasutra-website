import Navbar from "../widget/navbar";
export default function ServicePage() {
    return (
        <div className="w-screen mt-20">
            <div className="container mx-auto">
                <div className="fixed bg-white top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>
                <p className="text-center text-[100px]">Service Page</p>
            </div>
        </div>
    )
}