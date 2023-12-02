export default function SectionHeader({ title, button }) {
    return (
        <section className="mt-8">
            <div className="flex flex-row items-center justify-between gap-5 px-6 lg:px-0 ">
                <p className="flex-none text-2xl md:text-4xl md:font-bold font-semibold">
                    {title}
                </p>
                <hr className="flex-auto md:w-screen h-1 mx-auto my-4 bg-gray-200 md:border-0 border-1 rounded md:my-10 dark:bg-gray-600" />
                {
                    button = 'true' ?
                        <button className="bg-dark-blue w-auto flex flex-none lg:gap-2 items-center px-2 md:px-4 py-2 md:py-3 rounded-full text-white font-normal md:font-medium text-xs md:text-sm">
                            <p>Lihat Semua</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                        : ''
                }
            </div>
        </section>
    )
}