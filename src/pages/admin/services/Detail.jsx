import Pic from "../../../assets/svg/coming-soon-1.svg"

export default function DetailServices() {
    return (
        <main>
            <div className="flex flex-col justify-center items-center gap-6 py-5">
                <h1 className="font-medium text-xl text-gray-500">Your page request is under maintanance, please coming back later!</h1>
                <img src={Pic} className="h-auto md:h-[300px]" alt="Coming Soon" />
                <p className="font-light text-gray-500">Coming Soon...</p>
            </div>
        </main>
    )
}