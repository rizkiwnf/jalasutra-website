export function getStatus(status) {
    switch (status) {
        case 'MENUNGGU':
            return (
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'DITOLAK':
            return (
                <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'DIPROSES':
            return (
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'DITERIMA':
            return (
                <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )

        default:
            return (
                <span classNameName="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
    }
}