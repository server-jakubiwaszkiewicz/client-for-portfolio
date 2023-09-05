import React from 'react'

export default function Category({categoryName, categoryImg}) {
    return (
        <div className='
            bg-black
            flex
            flex-col
            justify-center
            items-center
            bg-opacity-50
            rounded-xl
            min-w-[300px]
            p-2
            m-3
            hover:m-1
            hover:p-4
            lg:p-5
            lg:m-10
            lg:hover:p-10
            lg:hover:m-5
            hover:bg-opacity-80
            transition-all
        '>
            <img
                className='
                    w-[120px]
                    h-[120px]
                    lg:w-[250px]
                    lg:h-[250px]
                    object-cover'
                src={categoryImg}
                alt=""
            />
            <h1 className='
                uppercase
                tracking-[4px]
                lg:tracking-[8px]
                text-white
                text-md
                transform
                lg:text-md
                mt-1
                lg:mt-3
            '>
                &nbsp;{categoryName}
            </h1>
        </div>
    )
}
