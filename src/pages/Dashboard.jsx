import React from "react";
import Navbar from "../widget/navbar";
import Home from "../widget/home";
import Service from "../widget/service";
import News from "../widget/news";
import SubmissionFlow from "../widget/submission_flow";

const Dashboard = () => {
    return (
        <div className="mainpage">
            {/* <div className="fixed bg-white top-0 left-0 right-0 z-50">
                <Navbar />
            </div> */}
            <div className="mt-[80px]">
                <Home />
                <Service />
                <News />
                <SubmissionFlow />
            </div>
        </div>
    )
}
export default Dashboard;