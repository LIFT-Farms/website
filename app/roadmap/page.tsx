'use client'

import { motion, type Variants } from "motion/react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Eye, 
    GraduationCap, 
    House, 
    Mail, 
    MessageSquareText, 
    Motorbike, 
    Target 
} from "lucide-react";
import Link from "next/link";

interface IStrategyProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: {
        url: string;
        text: string
    };
    variants?: Variants;
};

interface IImpactCard {
    value: string;
    title: string;
    description: string;
    variants?: Variants;
}

const StrategyCard = ({ icon, title, description, link, variants }: IStrategyProps) => {
    return (
        <motion.div variants={variants}>
            <div className="bg-primary-dark/30 h-[3.9rem] w-[3.9rem] rounded-lg flex items-center justify-center transition-colors group-hover:bg-primary-dark/50">
                {icon}
            </div>
            <h4 className="font-manrope font-bold text-[1.48rem] leading-[2.3rem] text-primary-dark mt-5">{title}</h4>
            <p className="mt-4 font-inter font-light text-[1rem] leading-[1.9rem] text-gray">{description}</p>
            <Link href={link.url} className="mt-4 flex items-center gap-x-1 font-inter font-medium text-[1rem] leading-[1.78rem] text-primary-dark group">
                <span>{link.text}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
            </Link>
        </motion.div>
    )
}

const ImpactCard = ({ value, title, description, variants }: IImpactCard) => {
    return (
        <motion.div variants={variants}>
            <h3 className="font-inter font-medium text-[3rem] md:text-[4.4rem] text-tertiary-light-3">{value}</h3>
            <span className="font-manrope font-bold text-[1.2rem] md:text-[1.33rem] leading-[2.06rem] text-white">{title}</span>
            <p className="w-full md:w-[90%] mt-2 font-inter font-light text-[0.9rem] md:text-[1rem] leading-[1.48rem] text-primary-lighter-2">{description}</p>
        </motion.div>
    )
}

const links = [
    { path: '/about', label: 'About' },
    { path: '#ecosystem', label: 'Ecosystem' },
    { path: '#impact', label: 'Impact' },
    { path: '/investments', label: 'Partner' },
    { path: '/roadmap', label: 'Roadmap' },
]

export default function Roadmap() {
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
            <Navigation
                logo='/assets/logo1.webp' 
                links={links} 
                imageClassName="-mt-6"
            />
            <motion.section 
                className="min-h-[85vh] md:h-[95vh] py-20 md:py-10 bg-background-light flex items-center overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <div className="flex flex-col items-center">
                        <motion.h3 
                            className="font-manrope font-[900] text-[1.8rem] sm:text-[2.5rem] md:text-[5rem] leading-[115%] md:leading-[100%] text-primary-dark text-center"
                            variants={fadeIn}
                        >
                            Building Sustainable Systems. <br className="hidden md:block" />
                            <span className="text-tertiary">Empowering Communities.</span><br className="hidden md:block" /> 
                            Transforming Futures.
                        </motion.h3>
                        <motion.p 
                            className="mt-6 w-full md:w-[70%] font-inter font-light text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] leading-[1.6rem] md:leading-[2.63rem] text-gray text-center"
                            variants={fadeIn}
                        >
                            Lift Group is a purpose-driven organization creating impact through agriculture, education, and economic development initiatives across Sierra Leone and beyond.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto" variants={fadeIn}>
                            <Button className="w-full sm:w-auto font-inter font-medium text-[1rem] md:text-[1.2rem] py-3 px-6 h-auto">Explore Our Work</Button>
                            <Button className="w-full sm:w-auto font-inter font-medium text-[1rem] md:text-[1.2rem] py-3 px-6 h-auto text-primary-dark bg-transparent border border-primary-dark hover:bg-primary-dark/5">Partner With Us</Button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="py-16 md:py-30 bg-background overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-6">
                        <motion.div className="relative" variants={scaleIn}>
                            <div className="w-full h-[20rem] sm:h-[25rem] md:h-[35rem] relative rounded-md overflow-hidden group">
                                <img src='/assets/images/learning-center.webp' alt='learning center' className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/10 rounded-md"></div>
                            </div>
                            <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 md:-right-10 md:-bottom-5 bg-tertiary/90 backdrop-blur-md rounded-lg p-2 sm:p-0 w-[9rem] sm:w-[12rem] md:w-[17.3rem] h-[3rem] sm:h-[4rem] md:h-[5rem] flex items-center justify-center shadow-lg">
                                <span className="font-inter font-medium text-[1.1rem] sm:text-[1.5rem] md:text-[2.25rem] leading-none text-tertiary-medium">Coming Soon</span>
                            </div>
                        </motion.div>
                        <motion.div className="relative flex items-center justify-center" variants={fadeIn}>
                            <div className="w-full md:w-[90%] mt-6 md:mt-0">
                                <span className="font-inter font-medium text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] leading-[1.2rem] tracking-[0.21rem] uppercase text-tertiary inline-block mb-3">Our Identity</span>
                                <h3 className="font-manrope font-[800] text-[1.8rem] sm:text-[2rem] md:text-[2.75rem] leading-[120%] md:leading-[2.75rem] text-primary-dark">A Multi-Sector Force for Sustainable Development.</h3>
                                <div className="font-inter font-light text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] leading-[1.6rem] sm:leading-[1.8rem] md:leading-[2.2rem] text-gray mt-6 space-y-4 md:space-y-6">
                                    <p>At Lift Learning Center, we equip people with hands-on skills that drive self-reliance, career growth, and sustainable livelihoods.</p>
                                    <p>By structuring our initiatives into three core pillars, we create a resilient ecosystem where each venture supports the growth of the others, ensuring that progress in Sierra Leone is both deep- rooted and scalable.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="bg-background-light py-16 md:py-25 overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div className="h-[12rem] sm:h-[15rem] md:h-[20rem] relative group overflow-hidden rounded-md" variants={fadeIn}>
                            <img src='/assets/images/learning-center1.webp' alt='learning center' className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-md"></div>
                        </motion.div>
                        <motion.div className="h-[12rem] sm:h-[15rem] md:h-[20rem] relative group overflow-hidden rounded-md" variants={fadeIn}>
                            <img src='/assets/images/learning-center2.webp' alt='learning center' className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-md"></div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[40%_60%] mt-12 sm:mt-20 md:mt-30 gap-10 md:gap-x-5">
                        <motion.div className="relative" variants={scaleIn}>
                            <div className="h-[15rem] sm:h-[20rem] md:h-[30rem] relative group overflow-hidden rounded-md">
                                <img src='/assets/images/estate.webp' alt='estate' className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute top-0 left-0 w-full h-full bg-black/10 rounded-md"></div>
                                </div>
                            <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 md:-right-10 md:-bottom-5 bg-tertiary/90 backdrop-blur-md rounded-lg p-2 sm:p-0 w-[9rem] sm:w-[12rem] md:w-[17.3rem] h-[3rem] sm:h-[4rem] md:h-[5rem] flex items-center justify-center shadow-lg">
                                <span className="font-inter font-medium text-[1.1rem] sm:text-[1.5rem] md:text-[2.25rem] leading-none text-tertiary-medium">Coming Soon</span>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center justify-center mt-6 md:mt-0" variants={fadeIn}>
                            <div className="w-full md:w-[80%]">
                                <h4 className="font-inter font-medium text-[1.8rem] sm:text-[2.5rem] md:text-[3.7rem] leading-[120%] md:leading-[5.7rem] uppercase text-primary-dark">Lift Estates</h4>
                                <p className="mt-4 md:mt-5 text-medium text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] leading-[1.6rem] sm:leading-[1.8rem] md:leading-[2.63rem] text-gray">Own verified land in strategic locations with Lift Estates. Your trusted partner for property investment in Sierra Leone.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 sm:mt-20 md:mt-30">
                        <motion.div className="h-[12rem] sm:h-[15rem] md:h-[20rem] relative group overflow-hidden rounded-md" variants={fadeIn}>
                            <img src='/assets/images/estate1.webp' alt='estate' className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-md"></div>
                        </motion.div>
                        <motion.div className="h-[12rem] sm:h-[15rem] md:h-[20rem] relative group overflow-hidden rounded-md" variants={fadeIn}>
                            <img src='/assets/images/estate2.webp' alt='estate' className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-md"></div>
                        </motion.div>
                    </div>

                    <motion.div className="mt-12 sm:mt-20 md:mt-30 bg-primary-dark/30 backdrop-blur-sm py-8 md:py-15 px-4 md:px-8 rounded-xl" variants={fadeIn}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray/20 overflow-hidden rounded-md">
                            <div className="min-h-[15rem] sm:min-h-[18rem] md:h-[20rem] bg-primary-dark flex items-center justify-center">
                                <div className="text-white px-6 md:px-10 py-8">
                                    <Target className="w-8 h-8 md:w-10 md:h-10 text-tertiary"/>
                                    <h4 className="mt-4 md:mt-5 font-bold font-manrope text-[1.3rem] md:text-[1.5rem] leading-[1.8rem]">Our Mission</h4>
                                    <p className="mt-3 md:mt-4 w-full md:w-[80%] font-inter font-light text-[0.95rem] md:text-[1rem] leading-[1.6rem] md:leading-[1.8rem]">To drive sustainable development through structured systems, responsible leadership, and community-focused initiatives.</p>
                                </div>
                            </div>
                            <div className="min-h-[15rem] sm:min-h-[18rem] md:h-[20rem] bg-white flex items-center justify-center">
                                <div className="text-primary-dark px-6 md:px-10 py-8">
                                    <Eye className="w-8 h-8 md:w-10 md:h-10 text-primary"/>
                                    <h4 className="mt-4 md:mt-5 font-bold font-manrope text-[1.3rem] md:text-[1.5rem] leading-[1.8rem]">Our Vision</h4>
                                    <p className="mt-3 md:mt-4 w-full md:w-[80%] font-inter font-light text-[0.95rem] md:text-[1rem] leading-[1.6rem] md:leading-[1.8rem]">To build a future where individuals and communities thrive through empowerment, opportunity, and innovation.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                id="ecosystem"
                className="bg-background py-16 md:py-30 overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <motion.div className="text-center" variants={fadeIn}>
                        <span className="font-inter font-medium text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] leading-[1.4rem] tracking-[0.2rem] uppercase text-tertiary-dark">The Pillars</span>
                        <h3 className="font-manrope font-bold text-[1.8rem] sm:text-[2rem] md:text-[3.26rem] leading-[120%] md:leading-[3.26rem] text-primary-dark mt-2">Our Strategic Ecosystem</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-6 mt-12 md:mt-20">
                        <StrategyCard 
                            icon={<Motorbike className="text-primary-dark" />}
                            title='Lift Farms'
                            description='Revolutionizing local agriculture through sustainable farming techniques, high-yield systems, and regional distribution networks.'
                            link={{ url: '/', text: 'Explore Agriculture'}}
                            variants={fadeIn}
                        />
                        <StrategyCard 
                            icon={<GraduationCap className="text-primary-dark" />}
                            title='Lift Learn'
                            description='Empowering the next generation through vocational training, digital literacy, and community-based education centers.'
                            link={{ url: '/', text: 'Explore Education'}}
                            variants={fadeIn}
                        />
                        <StrategyCard 
                            icon={<House className="text-primary-dark" />}
                            title='Lift Realty'
                            description='Building structured infrastructure and professional commercial spaces that anchor economic development in emerging hubs.'
                            link={{ url: '/', text: 'Explore Real Estate'}}
                            variants={fadeIn}
                        />
                    </div>
                </div>
            </motion.section>

            <motion.section 
                id='impact' 
                className="bg-primary-dark py-16 md:py-20 relative overflow-hidden overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="absolute top-0 right-0 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-primary-lighter/5 rounded-full blur-3xl -mr-20 sm:-mr-40 -mt-20 sm:-mt-40"></div>
                
                <div className="w-[90%] mx-auto relative z-10">
                    <motion.div className="w-full md:w-[60%] text-white" variants={fadeIn}>
                        <span className="font-inter font-medium text-[0.7rem] sm:text-[0.8rem] leading-[1.2rem] tracking-[0.2rem] uppercase text-tertiary">Our Impact</span>
                        <h3 className="mt-4 font-manrope font-bold text-[1.8rem] sm:text-[2rem] md:text-[3.26rem] leading-[120%] md:leading-[3.26rem]">Driving measurable change across key sectors.</h3>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-10 sm:mt-15">
                        <ImpactCard value='95%' title='Food Security' description='Of harvested crops supporting regional nutrition programs.' variants={fadeIn} />
                        <ImpactCard value='500+' title='Job Creation' description='Direct and indirect employment opportunities established.' variants={fadeIn} />
                        <ImpactCard value='1.2k' title='Youth Empowerment' description='Graduates from our vocational and digital training programs.' variants={fadeIn} />
                        <ImpactCard value='150+' title='Hectares' description='Managed under climate-smart agriculture practices.' variants={fadeIn} />
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="bg-background py-20 md:py-40"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <div className="w-[90%] mx-auto">
                    <div className="text-center">
                        <div className="flex justify-center mb-10">
                            <motion.div
                                initial={{ rotate: -10, scale: 0.9 }}
                                whileInView={{ rotate: 0, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75ZM10 13.75C11.0417 13.75 11.9271 13.3854 12.6562 12.6562C13.3854 11.9271 13.75 11.0417 13.75 10C13.75 8.95833 13.3854 8.07292 12.6562 7.34375C11.9271 6.61458 11.0417 6.25 10 6.25C8.95833 6.25 8.07292 6.61458 7.34375 7.34375C6.61458 8.07292 6.25 8.95833 6.25 10C6.25 11.0417 6.61458 11.9271 7.34375 12.6562C8.07292 13.3854 8.95833 13.75 10 13.75ZM32.5 13.75C33.5417 13.75 34.4271 13.3854 35.1562 12.6562C35.8854 11.9271 36.25 11.0417 36.25 10C36.25 8.95833 35.8854 8.07292 35.1562 7.34375C34.4271 6.61458 33.5417 6.25 32.5 6.25C31.4583 6.25 30.5729 6.61458 29.8438 7.34375C29.1146 8.07292 28.75 8.95833 28.75 10C28.75 11.0417 29.1146 11.9271 29.8438 12.6562C30.5729 13.3854 31.4583 13.75 32.5 13.75Z" fill="#735C00"/>
                                </svg>
                            </motion.div>
                        </div>
                        <p className="font-manrope font-bold text-[1.8rem] md:text-[3.2rem] leading-[130%] md:leading-[3.4rem] text-primary-dark">"We exist to bridge the gap between potential and opportunity. In every community we enter, we see an abundance of talent and resource—it simply needs the structure to flourish."</p>
                        <p className="inline-block mt-10 font-manrope font-bold text-[0.8rem] md:text-[0.9rem] leading-[2rem] tracking-[0.13rem] uppercase text-gray relative px-10 before:absolute before:top-[50%] before:-left-[18%] before:md:left-0 before:-translate-y-[50%] before:w-[30%] before:h-[.05rem] before:bg-gray/30 after:absolute after:top-[50%] after:-right-[18%] after:md:right-0 after:-translate-y-[50%] after:w-[30%] after:h-[.05rem] after:bg-gray/30">The Lift Group Ethos</p>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="bg-background-light pb-10 md:pb-25 overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <div className="w-full bg-primary-dark py-12 md:py-20 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-[15rem] sm:w-[20rem] h-[15rem] sm:h-[20rem] bg-tertiary/10 rounded-full blur-3xl -ml-15 sm:-ml-20 -mb-15 sm:-mb-20"></div>
                    <div className="w-[90%] mx-auto relative z-10">
                        <div className="w-full flex justify-center">
                            <div className="w-full md:w-[80%] text-white text-center flex flex-col items-center">
                                <h3 className="font-manrope font-bold text-[1.8rem] sm:text-[2.2rem] md:text-[3.5rem] leading-[120%] md:leading-[4.2rem]">Ready to Build the Future?</h3>
                                <p className="mt-4 font-inter font-light text-[0.95rem] sm:text-[1.1rem] md:text-[1.29rem] leading-[1.5rem] sm:leading-[1.6rem] md:leading-[2.2rem] opacity-90">Join us in building sustainable impact. Our team is ready to connect and explore how we can move forward together.</p>
                                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                    <Button className="w-full sm:w-auto font-inter font-medium text-[1rem] sm:text-[1.1rem] md:text-[1.27rem] py-6 md:py-7 px-6 bg-white text-primary-dark hover:bg-gray-100 flex items-center justify-center gap-x-2 transition-transform hover:scale-105 active:scale-95">
                                        <Mail className="w-5 h-5"/>
                                        <span>Email Our Team</span>
                                    </Button>
                                    <Button className="w-full sm:w-auto font-inter font-medium text-[1rem] sm:text-[1.1rem] md:text-[1.27rem] py-6 md:py-7 px-6 bg-tertiary text-tertiary-medium hover:bg-tertiary/90 flex items-center justify-center gap-x-2 transition-transform hover:scale-105 active:scale-95">
                                        <MessageSquareText className="w-5 h-5"/>
                                        <span>WhatsApp Us</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
