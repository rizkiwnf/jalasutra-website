import React from 'react'

const Figure = (source) => {
    return (
        <div>
            <figure className="relative max-w-xl mx-auto mb-5">
                <img className="rounded-lg" src={source.image} alt="description" />
                <figcaption className="absolute p-4 text-lg text-white bg-gray-800/50 bottom-0 rounded-lg">
                    <p className='text-xs'>Incididunt eiusmod dolor velit proident Lorem. Ad in ad fugiat ut Lorem. Dolore dolor aliqua esse eiusmod aliqua cupidatat in esse aliqua tempor deserunt consectetur. Laborum id duis aliquip incididunt qui sit culpa. Consectetur est duis dolor ullamco dolor labore Lorem excepteur est nulla ullamco incididunt.</p>
                    <div className='flex justify-end mt-2'>
                        <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Selengkapnya! &#x226B;</button>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export default Figure