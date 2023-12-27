import React from "react"

const AdminHeader = ({ title }) => {
    return (
        <header className="text-xl font-semibold whitespace-nowrap text-black dark:text-white uppercase tracking-widest">
            {title}
            <hr className="h-px max-w-full my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </header>
    )
}

export default AdminHeader