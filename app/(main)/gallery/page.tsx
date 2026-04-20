'use client'

import { motion, type Variants } from 'motion/react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemFadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const GalleryItem = ({ src, alt, className, overlay, description, variants }: { src: string, alt: string, className?: string, overlay?: boolean, description?: string, variants?: Variants }) => {
    return (
        <motion.div 
            variants={variants}
            className={`h-[16rem] sm:h-[22rem] w-full relative ${className}`}
        >
            <img src={src} alt={alt} className='w-full h-full object-cover' loading="lazy" />
            {overlay && <div className='absolute inset-0 bg-gray/30'></div>}
            {description && <p className='absolute bottom-5 left-5 font-manrope font-bold text-white text-[1.2rem] md:text-[1.5rem] leading-[2.4rem]'>{description}</p>}
        </motion.div>
    )
}

export default function Gallery() {
    return (
        <>
            <section className="bg-background py-12 md:py-20">
                <div className="w-[90%] mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6"
                    >
                        <motion.div variants={fadeInUp}>
                            <h3 className="font-manrope text-primary-dark font-[900] text-[2.5rem] md:text-[4.5rem] lg:text-[6.75rem] leading-[2.8rem] md:leading-[5rem] lg:leading-[6.75rem] tracking-[-0.05rem] md:tracking-[-0.18rem]">Cultivating Visual Stories</h3>
                            <p className="mt-6 text-[1.1rem] md:text-[1.4rem] lg:text-[1.8rem] font-inter leading-[1.7rem] md:leading-[2.8rem] font-light">A cinematic journey through the soul of African sustainable agriculture. From the rich deep soils to the vibrant community harvests.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="self-end pb-5 pr-5 flex items-center justify-start lg:justify-end gap-x-3 font-inter text-primary-dark">
                            <span className="font-bold text-[2.5rem] md:text-[3.8rem] leading-[3.8rem]">01</span>
                            <span className="block w-[5rem] h-[.1rem] bg-primary-dark"></span>
                            <span className="font-medium text-[.8rem] leading-[1.2rem] tracking-[0.11rem] uppercase">The Perspective</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className="py-12 pt-5 md:py-20">
                <div className="w-[90%] mx-auto">
                    <motion.h4 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="font-manrope font-bold text-primary-dark text-[1.4rem] md:text-[1.67rem] leading-[2rem] relative before:absolute before:bottom-[-10px] before:left-0 before:w-[5rem] before:h-[.2rem] before:bg-primary-dark"
                    >
                        Farm Landscapes
                    </motion.h4>
                    <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-x-4 mt-12 md:mt-15">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className='h-[22rem] md:h-[35rem] w-full relative'
                        >
                            <img src='/assets/images/farmer3.webp' alt='farmer 3' className='w-full h-full object-cover' loading="lazy" />
                        </motion.div>
                        <div className='flex items-center px-0 lg:px-4 mt-6 lg:mt-0'>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <motion.span variants={fadeInUp} className='font-inter font-medium text-[.8rem] leading-[1.2rem] tracking-[0.11rem] uppercase text-tertiary-medium'>Farm Landscapes</motion.span>
                                <motion.h3 variants={fadeInUp} className='font-manrope text-primary-dark font-bold text-[1.3rem] md:text-[1.5rem] leading-[1.5rem] mt-3'>Preserving the African Skyline</motion.h3>
                                <motion.p variants={fadeInUp} className='font-inter font-light text-[1rem] md:text-[1.23rem] leading-[1.7rem] md:leading-[1.9rem] text-gray mt-5'>Our farms are curated ecosystems where indigenous flora and modern sustainable techniques meet the sky.</motion.p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-25'
                    >
                        <GalleryItem src='/assets/images/farmer4.webp' alt='farmer 4' overlay variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/gathering.webp' alt='gathering' overlay className='col-span-1 md:col-span-3' variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/farmer7.webp' alt='farmer 7' overlay variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/farmer5.webp' alt='farmer 5' overlay variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/farmer6.webp' alt='farmer 6' overlay variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/farmer8.webp' alt='farmer 8' overlay variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/farmer9.webp' alt='farmer 9' overlay className='col-span-2 md:col-span-4' variants={itemFadeIn} />
                    </motion.div>
                </div>
            </section>

            <section className='py-12 md:py-20'>
                <div className="w-[90%] mx-auto">
                    <div className='text-center'>
                        <motion.h3 
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className='font-manrope text-primary-dark font-bold text-[2rem] md:text-[3.8rem] leading-[2.5rem] md:leading-[4.5rem]'
                        >
                            Animal Husbandry
                        </motion.h3>
                        <motion.div 
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 md:mt-15'
                        >
                            <GalleryItem src='/assets/images/animal6.webp' alt='poultry' overlay description='Chicken Poultry' variants={itemFadeIn} />
                            <GalleryItem src='/assets/images/animal4.webp' alt='goat' overlay description='Goat Farming' variants={itemFadeIn} />
                            <GalleryItem src='/assets/images/animal3.webp' alt='cattle' overlay description='Cattle Rearing' variants={itemFadeIn} />
                            <GalleryItem src='/assets/images/animal1.webp' alt='catfish' overlay description='Fish Farm' variants={itemFadeIn} />
                            <GalleryItem src='/assets/images/animal2.webp' alt='tilapia' overlay description='Fish Pond' variants={itemFadeIn} />
                            <GalleryItem src='/assets/images/animal5.webp' alt='pig' overlay description='Pig Farming' variants={itemFadeIn} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className='py-8 md:py-10'>
                <div className='w-[90%] mx-auto'>
                    <motion.h3 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className='font-manrope text-primary-dark font-bold text-[1.8rem] md:text-[2.5rem] leading-[2.5rem]'
                    >
                        Fresh Farm Produce
                    </motion.h3>
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 md:mt-15'
                    >
                        <GalleryItem src='/assets/images/produce8.webp' alt='Black Pepper' overlay className='col-span-1 md:col-span-2' description='Black Pepper' variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/produce2.webp' alt='Eggs' overlay description='Eggs' variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/produce3.webp' alt='Red Pepper' overlay description='Red Pepper' variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/produce4.jpg' alt='Beans' overlay description='Beans' variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/produce5.webp' alt='Tomatoes' overlay description='Tomatoes' variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/produce6.webp' alt='Rice' overlay description='Rice' variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/produce7.webp' alt='Cassava' overlay description='Cassava' variants={itemFadeIn} />
                        <GalleryItem src='/assets/images/produce9.webp' alt='Garri' overlay description='Garri' variants={itemFadeIn} />
                    </motion.div>
                </div>
            </section>

            <section className='py-16 md:py-35 pb-10'>
                <div className='w-[90%] mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-3'>
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className='h-[22rem] md:h-[30rem] w-full relative p-4 bg-white shadow-md rounded-md'
                        >
                            <img src='/assets/images/packaged-garri.webp' alt='packaged garri' className='w-full h-full object-cover' loading="lazy" />
                        </motion.div>
                        <div className='h-auto md:h-[30rem] w-full relative px-0 md:px-5'>
                            <motion.div 
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className='flex flex-col justify-center h-full gap-y-4 py-6 md:py-0'
                            >
                                <motion.h4 variants={fadeInUp} className='font-manrope font-[800] text-[1.8rem] md:text-[2.2rem] leading-[2rem] text-primary-dark'>Product Packaging</motion.h4>
                                <motion.p variants={fadeInUp} className='font-inter font-light text-gray text-[1rem] leading-[1.5rem] mt-2'>Our commitment to sustainability doesn't end at the gate. We use 100% biodegradable, plant-based packaging that returns to the soil as gracefully as our crops emerge from it.</motion.p>

                                <div className='flex items-center gap-x-10 mt-2'>
                                    <div className='basis-[50%] flex flex-col items-start justify-start'>
                                        <span className='font-manrope font-bold text-[1.8rem] leading-[2.4rem] text-tertiary-dark'>0%</span>
                                        <span className='font-inter font-light text-gray text-[1rem] leading-[1.5rem]'>Plastic Used</span>
                                    </div>
                                    <div className='basis-[50%] flex flex-col items-start justify-start'>
                                        <span className='font-manrope font-bold text-[1.8rem] leading-[2.4rem] text-tertiary-dark'>100%</span>
                                        <span className='font-inter font-light text-gray text-[1rem] leading-[1.5rem]'>Compostable</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
