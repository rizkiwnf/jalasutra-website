import React from "react";
import Footer from "../widget/footer";
import Navbar from "../widget/navbar";
import Home from "../widget/home";

const MainPage = () => {
    return (
        <div className="mainpage">
            <div className="fixed bg-white top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            <div className="mt-[80px]">
                <Home />
                <Footer />
            </div>
        </div>
    )
}
export default MainPage;