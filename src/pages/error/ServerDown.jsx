import React from "react"
import Pic from "../../assets/svg/server-down.svg"

const ServerDown = () => {
    return (
        <main className="flex flex-col justify-center items-center gap-6 py-5">
            <img src={Pic} alt="" />
        </main>
    )
}

export default ServerDown