import React from 'react';
import { motion } from 'framer-motion';

function About({ desc, photo }) {
    return (
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='flex flex-col h-screen md:text:left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'
            >
            {/* <h3 className='sectionTitle'>About</h3> */}
                    <div
                        className='bg-black bg-opacity-50 rounded-lg p-10 flex flex-col md:text:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
                    >
                        <motion.img
                            src={photo}
                            initial={{
                                x: -200,
                                opacity: 0,
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className='
                                mb-10
                                w-30
                                h-30
                                object-cover
                                rounded-lg
                                md:w-[450px]
                                md:h-[500px]
                                md:max-w-[300px]
                                md:max-h-[350px]
                                lg:max-w-[450px]
                                lg:max-h-[500px]
                                xl:w-[450px]
                                xl:h-[500px]
                                bg-black bg-opacity-50'
                        />

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            className='space-y-10 px-0 md:px-10'
                        >
                            <h4 className="text-4xl font-semibold tracking-widest">
                                H<span className='underline decoration-[#ffffff] tracking-widest underline-offset-8'>iii!</span> 
                            </h4>
                            <p className='md:text-base text-sm text-justify'>
                                {desc}
                            </p>
                        </motion.div>
                    </div>
            </motion.div>
        );
}

export default About;