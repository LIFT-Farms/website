'use client'

import { motion, type Variants } from 'motion/react';
import { StatCard } from '@/components/StatCard';
import { ArrowRight, BadgeCheck, Infinity } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <>
            <motion.section 
                className="px-4 md:px-12 lg:px-20 py-16 md:py-30 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-x-5 bg-background-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <motion.div className="relative w-full md:w-[60%]" variants={fadeIn}>
                    <span className="text-tertiary text-[0.75rem] font-inter leading-[1rem] tracking-[-0.015rem] uppercase mb-4 block">Our Story</span>
                    <h2 className='text-primary-dark text-[2.8rem] md:text-[3.8rem] lg:text-[5rem] tracking-[-0.05rem] md:tracking-[-0.12rem] leading-[100%] font-manrope font-bold'>Cultivating <br />Dignity Through<br /><span className='text-primary-lighter'>Sustainable</span><br />Growth.</h2>
                </motion.div>
                <motion.div className="w-full md:w-[40%]" variants={fadeIn}>
                    <p className="font-inter font-medium text-[1rem] md:text-[1.2rem] leading-[1.6rem] md:leading-[1.9rem] text-gray">Lift Farms isn't just an agricultural venture; it's a bridge between potential and prosperity, rooted in the rich soils of Sierra Leone.</p>
                </motion.div>
            </motion.section>

            <motion.section 
                className="bg-background py-16 md:py-30 px-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="relative w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-x-6">
                    <motion.div className='relative' variants={scaleIn}>
                        <img src='/assets/images/farmer2.webp' alt='farmer 2' className='w-full h-auto object-cover' loading="lazy" />
                        <motion.div 
                            className='absolute bottom-0 right-0 w-[12rem] md:w-[15.6rem] h-[12rem] md:h-[15.6rem] bg-primary flex items-center text-center rounded-lg p-4'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className='text-white text-[1.1rem] md:text-[1.5rem] leading-[1.6rem] md:leading-[1.9rem] text-gray font-manrope'>Harvesting over 50 tons of organic produce annually.</p>
                        </motion.div>
                    </motion.div>
                    <div className='flex flex-col items-center mt-6 lg:mt-0'>
                        <motion.div className='w-full lg:w-[80%] mx-auto' variants={fadeIn}>
                            <h3 className='text-primary-dark text-[2rem] md:text-[2.8rem] tracking-[-0.05rem] md:tracking-[-0.12rem] leading-[100%] font-manrope font-bold'>A Seed Planted in Concrete.</h3>
                            <div className='font-inter font-light text-[1rem] md:text-[1.23rem] space-y-4 text-[#1B1D0E] mt-8 md:mt-10'>
                                <p>Lift Farms began as a response to the growing disconnect between the food we eat and the cities we inhabit. Founded in the heart of the industrial district, our first laboratory was a repurposed textile mill.</p>
                                <p>We didn't just want to grow food; we wanted to grow an ecosystem. By integrating advanced hydroponics with passive solar architecture, we created a self-sustaining loop that uses 95% less water than traditional farming.</p>
                                <p className='font-medium text-primary-dark mt-10'>"Our mission was never just about yield—it was about reclaiming the urban landscape for the living world."</p>
                            </div>
                            <motion.div 
                                className='mt-10 md:mt-15 flex items-center gap-x-4'
                                variants={staggerContainer}
                            >
                                <StatCard 
                                    value='0%'
                                    label='Pesticide usage'
                                    className='bg-background-light/50'
                                    variants={fadeIn}
                                />
                                <StatCard 
                                    value='24h'
                                    label='Farm To Table'
                                    className='bg-background-light/50'
                                    variants={fadeIn}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className='py-16 md:py-30 bg-background-light'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className='w-[90%] mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <motion.div 
                            className='bg-background-lighter rounded-lg p-6 md:p-10 py-10 md:py-15'
                            variants={fadeIn}
                        >
                            <img src='/assets/star.webp' alt='star' className='w-[2rem] h-[2rem]' loading="lazy" />
                            <div className='mt-5'>
                                <h3 className='font-manrope font-bold text-[2rem] md:text-[2.8rem] tracking-[-0.05rem] md:tracking-[-0.12rem] leading-[100%] text-primary-dark'>Our Mission</h3>
                                <p className='font-inter font-light text-[1rem] md:text-[1.25rem] space-y-4 text-gray mt-5'>To drive transformation through responsible
                                leadership, uncompromising integrity, and
                                development-driven initiatives that foster long-
                                term resilience.</p>
                            </div>
                            <motion.ul 
                                className='font-inter font-light text-[1rem] leading-[1.87rem] text-gray mt-10'
                                variants={staggerContainer}
                            >
                                <motion.li className='flex items-center gap-x-2' variants={fadeIn}>
                                    <span>
                                        <BadgeCheck className='w-3 h-3' />
                                    </span>
                                    <span>Sustainable Enterprise</span>
                                </motion.li>

                                <motion.li className='flex items-center gap-x-2' variants={fadeIn}>
                                    <span>
                                        <BadgeCheck className='w-3 h-3' />
                                    </span>
                                    <span>Community Leadership</span>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                        <motion.div 
                            className='bg-primary-dark rounded-lg p-6 md:p-10 py-10 md:py-15'
                            variants={fadeIn}
                        >
                            <img src='/assets/eye.webp' alt='vision' className='w-[2rem] h-[2rem] object-contain' loading="lazy" />
                            <div className='mt-5'>
                                <h3 className='font-manrope font-bold text-[2rem] md:text-[2.8rem] tracking-[-0.05rem] md:tracking-[-0.12rem] leading-[100%] text-white'>Our Vision</h3>
                                <p className='font-inter font-light text-[1rem] md:text-[1.25rem] space-y-4 text-[#D6D3D1] mt-5'>A future where lives are transformed through hope, economic empowerment, and sustainable development, creating a ripple effect of prosperity across Africa.</p>
                            </div>
                            <motion.ul 
                                className='flex items-center gap-x-10 mt-5'
                                variants={staggerContainer}
                            >
                                <motion.li className='flex flex-col uppercase' variants={fadeIn}>
                                    <span className='font-manrope font-bold text-[2.18rem] leading-[3.27rem] text-tertiary'>100%</span>
                                    <span className='font-inter font-medium text-[0.8rem] leading-[1.87rem] text-[#A8A29E]'>Community Focused</span>
                                </motion.li>

                                <motion.li className='flex flex-col gap-x-2 uppercase' variants={fadeIn}>
                                    <span>
                                        <Infinity className='w-12 h-12 text-tertiary' />
                                    </span>
                                    <span className='font-inter font-medium text-[0.8rem] leading-[1.87rem] text-[#A8A29E]'>Generational Impact</span>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className='py-16 md:py-30 bg-background'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className='w-[90%] mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <motion.div className='relative' variants={scaleIn}>
                            <div className='relative h-[24rem] md:h-[32rem] bg-background-lighter p-2 rounded-lg'>
                                <img src='/assets/images/ceo.webp' alt='ceo' className='w-full h-full object-cover bg-bottom' loading="lazy" />
                            </div>
                            <div className='absolute -top-5 -right-5 w-[4.75rem] h-[5.06rem] bg-tertiary rounded-lg flex items-center justify-center'>
                                <img src='/assets/quote.webp' alt='quote' loading="lazy" />
                            </div>
                            <motion.div 
                                className='absolute bottom-10 left-[50%] -translate-x-[50%] bg-primary-dark/50 backdrop-blur-md text-white p-4 rounded-lg w-[85%] md:w-auto'
                                variants={fadeIn}
                            >
                                <h4 className='font-manrope font-bold text-[1rem] md:text-[1.2rem] leading-[1.6rem] md:leading-[2rem] tracking-[-0.03rem]'>"Agriculture is the pathway to dignity for our people."</h4>
                                <span className='font-inter font-light text-[0.72rem] leading-[1rem] tracking-[0.075rem] uppercase block mt-3'>— Fatimata Sourie</span>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <div className='w-full lg:w-[80%] mx-auto'> 
                                <h3 className='font-manrope text-primary-dark text-[2rem] md:text-[2.59rem] leading-[2.5rem] md:leading-[2.88rem] tracking-[-0.065]'>The Journey Home</h3>

                                <div className='mt-6 space-y-5 font-inter font-light text-[1rem] leading-[1.7rem]'>
                                    <p>Fatimata Sourie's story began in the vibrant landscapes of Sierra Leone, but her path led her to the heart of Belgium. It was in this cultural intersection that the seeds of LiFT were planted.</p>
                                    <p>Witnessing the vast disparity between global food systems and the untapped potential of her homeland, Fatimata realized that the solution wasn't just aid it was enterprise. She understood that sustainable development requires more than charity; it requires the creation of value, the dignity of labor, and the integrity of leadership.</p>
                                    <p>Returning to Sierra Leone, she founded Lift Farms with a single-minded purpose: to transform the agricultural sector into a engine for social development and community empowerment.</p>
                                </div>
                                <div className='flex items-center gap-x-3 mt-7'>
                                    <span className='inline-block w-[2rem] h-[.2rem] bg-tertiary-medium'></span>
                                    <span className='text-tertiary-medium font-inter font-medium text-[0.87rem] leading-[1.15rem] tracking-[0.086rem] uppercase'>A Legacy in Motion</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className='py-16 md:py-35 bg-background-lighter'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className='w-[90%] mx-auto'>
                    <motion.div className='text-center' variants={fadeIn}>
                        <h2 className='font-manrope text-[2rem] md:text-[3.29rem] leading-[2.5rem] md:leading-[3.29rem] font-bold text-primary-dark'>The LiFT Ecosystem</h2>
                        <p className='font-inter font-light text-[1rem] md:text-[1.28rem] leading-[1.6rem] md:leading-[2.15rem] mt-5 text-gray'>The connection between Lift Farms and the Light Foundation for <br className="hidden md:block" />Transformation (LiFT) is at the heart of our purpose.</p>
                    </motion.div>
                    <div className='grid grid-cols-1 md:grid-cols-3 mt-12 md:mt-20'>
                        <motion.div className='bg-white p-6 py-8 md:rounded-tl-lg md:rounded-bl-sm flex flex-col justify-between border-b-12 border-background-light rounded-lg md:rounded-none mb-4 md:mb-0' variants={fadeIn}>
                            <h3 className='font-manrope font-bold text-[1.54rem] leading-[2.16rem]'>Job Creation</h3>
                            <p className='text-primary-dark font-inter font-light text-[1rem] leading-[1.7rem] text-gray mt-5'>We go beyond simple farming. By developing robust value chains, we create stable employment for local communities, providing a steady pathway out of poverty.</p>
                            <div className='mt-5'>
                                <img src='/assets/community.svg' alt='community' className='h-[1.5rem]' loading="lazy" />
                            </div>
                        </motion.div>
                        <motion.div className='bg-primary-dark p-6 py-8 flex flex-col justify-between border-b-12 border-background-light rounded-lg md:rounded-none mb-4 md:mb-0' variants={fadeIn}>
                            <h3 className='text-white font-manrope font-bold text-[1.54rem] leading-[2.16rem]'>The Foundation</h3>
                            <p className='font-inter font-light text-[1rem] leading-[1.7rem] text-[#D6D3D1] mt-5'>LiFT acts as the catalyst for systemic change, providing the educational and structural support that allows the farms to flourish as social enterprises.</p>
                            <Link href='/' className='sm:mt-3 w-[50%] md:w-[73%] text-[#C1ECD4] border-b border-[#C1ECD4] pb-2 font-inter font-medium text-[.9rem] leading-[1.84rem] flex items-center gap-x-2'>
                                <span>Explore Foundation initiatives</span>
                                <span><ArrowRight className='w-4 h-4' /></span>
                            </Link>
                        </motion.div>
                        <motion.div className='bg-white p-6 py-8 md:rounded-tr-lg md:rounded-br-sm flex flex-col justify-between border-b-12 border-background-light rounded-lg md:rounded-none' variants={fadeIn}>
                            <h3 className='text-primary-dark font-manrope font-bold text-[1.54rem] leading-[2.16rem]'>Holistic Impact</h3>
                            <p className='font-inter font-light text-[1rem] leading-[1.7rem] text-gray mt-5'>From soil health to community health, our integrated model ensures that every harvest translates into better schools, healthcare, and infrastructure.</p>
                            <div className='mt-5'>
                                <img src='/assets/leaf.svg' alt='leaf' className='h-[1.5rem]' loading="lazy" />
                            </div>
                        </motion.div>
                    </div>
                    <motion.div 
                        className='mt-16 md:mt-40 rounded-md bg-white font-manrope font-[900] text-[1.1rem] sm:text-[1.5rem] md:text-[2.2rem] lg:text-[3rem] uppercase flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-13 py-8 md:h-[12.8rem] text-[#DFDFDD] gap-2 md:gap-4'
                        variants={fadeIn}
                    >
                        <span>Integrity</span>
                        <span className='text-primary-dark'>Empowerment</span>
                        <span>Dignity</span>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}
