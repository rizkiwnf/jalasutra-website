export default function NewsHero(news) {
    return (
        <figure className="relative max-w-max mx-auto mb-5">
            <img className="rounded-lg" src={news.image} alt="description" />
            <figcaption className="absolute p-4 text-lg text-white bg-gray-800/50 bottom-0 rounded-b-lg">
                <p className='text-xs'>{news.description}</p>
                <div className='flex justify-end mt-2'>
                    <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Selengkapnya! &#x226B;</button>
                </div>
            </figcaption>
        </figure>
    )
}