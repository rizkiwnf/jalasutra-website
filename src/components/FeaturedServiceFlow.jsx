import Picture from "../assets/images/service-flow.png"

export default function FeaturedServiceFlow() {
    return (
        <section id="submission-flow">
            <div className="flex justify-between items-start gap-3 mt-8 p-4 md:mx-20">
                <img src={Picture} className="w-2/3" alt="" />
                <div className="w-full md:p-5">
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Standard Pelayanan Publik</h2>
                    <ul className="max-w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            Persyaratan
                        </li>
                        <li>
                            Sistem, Mekanisme, dan Prosedur
                        </li>
                        <li>
                            Jangka Waktu Pelayanan
                        </li>
                        <li>
                            Biaya atau Tarif
                        </li>
                        <li>
                            Penanganan Pengaduan, Saran dan Masukan
                        </li>
                    </ul>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-transparent dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                                <span>Apa itu Jalasutra?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-2">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                                <span>Apa fungsi Jalasutra?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-3">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                                <span>Apa bedanya dengan aplikasi sebelumnya?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}