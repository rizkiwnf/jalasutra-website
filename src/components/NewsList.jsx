import { Link } from 'react-router-dom'

export default function NewsList({ list }) {
    return (
        <div className="max-w-max mx-auto mt-5 h-96 overflow-y-auto">
            <div className="">
                {
                    list.map((news, index) => {
                        return (
                            <Link key={index} to="#" className="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-max hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={news.pic} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal text-sm">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{news.title}</h5>
                                    <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{news.content}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}