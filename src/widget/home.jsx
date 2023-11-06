import ServiceFirst from "./service_first";
const Home = () => {
    return (
        <div className="home my-[100px] xs:h-[500px] h-[450px] md:h-[600px] lg:h-[700px] w-screen">
            <div className="container mx-auto my-auto">
                <div className="relative background h-[400px] md:h-[500px] lg:h-[590px] ">
                    <div className="py-12 flex flex-col gap-10 md:gap-16 lg:gap-20">
                        <p className="text-2xl md:text-5xl lg:text-[78px] text-center font-extrabold text-white tracking-wide">Mall Pelayanan Publik </p>
                        {/* button slide kanan kiri blm sempurna */}
                        <div className="flex flex-row justify-center items-center gap-7">
                            <div className="border-white border-2 p-1 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </div>

                            <p className="font-bold text-white tracking-wider text-2xl">Fasilitas A</p>
                            <div className="border-white border-2 p-1 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>

                            </div>
                        </div>
                        <div className="flex justify-center mx-5">
                            <form className="w-full md:w-[623px]">
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                                <div class="relative">
                                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm font-semibold tracking-wider text-gray-900 border border-dark-blue rounded-full bg-gray-50 focus:ring-dark-blue focus:border-dark-blue " placeholder="Pencarian" />
                                    <button className="absolute top-2.5 right-2.5 bg-blue-600 px-7 py-1.5 rounded-full text-white font-bold hover:bg-blue-500">Cari</button>
                                </div>
                            </form>
                        </div>
                        <div className="relative w-full">
                            <ServiceFirst />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;