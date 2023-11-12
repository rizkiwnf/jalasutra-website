import React from 'react'

const NewsList = ({ images }) => {
    return (
        <div className="max-w-xl mx-auto mt-5">
            {
                images.map((images) => {
                    return (
                        <a href="#" className="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={images} alt="" />
                            <div className="flex flex-col justify-between p-2 leading-normal text-sm">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default NewsList