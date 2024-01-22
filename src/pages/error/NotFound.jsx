import React from 'react'
import { Link } from 'react-router-dom'
import Pic from '../../assets/svg/not-found.svg'

const NotFound = () => {
    return (
        <main className="p-10">
            <div className="flex flex-col justify-between items-center gap-6">
                <img src={Pic} className="h-auto w-1/2" alt="Page Not Found" />
                <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Back to Dashboard!
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </main>
    )
}

export default NotFound