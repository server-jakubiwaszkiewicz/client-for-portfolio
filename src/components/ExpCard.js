import React from 'react';
import { motion } from 'framer-motion';


function ExpCard({ img, whatHaveIDoneHere, title, date }) {
    return (
        <div
            className='w-screen flex-shrink-1 snap-center flex flex-col space-y-5
            items-center justify-center p-5 md:p-5 md:pt-1 h-fit bg-black bg-opacity-50 md:m-13 m-10 max-h-[700px] rounded-lg'
        >
            <motion.img
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                }}
                viewport={{ once:true }}
                src={img}
                alt=""
                className='rounded-2xl shadow-xl sm:w-[500px] sm:h-[350px] w-[250px] h-[200px] object-contain p-5'
            />
            <div className='px-0 max-w-6xl flex flex-col'>
                <h4 className='decoration-1 font-light lg:text-2xl text-xl underline underline-offset-2 mb-3 sm:max-w-[500px] sm:max-h-[350px] max-w-[250px] max-h-[200px] tracking-[6px]'>
                    {title}
                </h4>
                <span className='text-md text-left pb-2 w-[250px] sm:w-[500px] text-slate-400'>
                    Date: {date}
                </span>

                <pre className='text-slate-200 text-md sm:w-[500px] w-[250px] text-justify'>
                    {whatHaveIDoneHere}
                </pre>

            </div>
        </div>
    );
}

export default ExpCard;