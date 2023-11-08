export function getStatus(status) {
	switch (status) {
		case 'MENUNGGU':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-yellow-500">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'SELESAI':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-green-500">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'DIPROSES':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-yellow-500">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'DITERIMA':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-green-500">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}