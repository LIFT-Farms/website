'use client'

import { motion, type Variants } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { StatCard } from '@/components/StatCard';
import { SystemCard } from '@/components/SystemCard';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { Modal } from '@/components/Modal';
import { InputField } from '@/components/ui/InputField';
import { ArrowRight, Loader2 } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MetricCard } from '@/components/MetricCard';
import { motion as m } from 'motion/react';

const carousel_images = [
    { image: '/assets/images/home_banner.webp' },
    { image: '/assets/images/home-banner1.webp' },
    { image: '/assets/images/home-banner2.webp' },
    { image: '/assets/images/home-banner4.webp' },
    { image: '/assets/images/home-banner5.webp' },
];

export default function Home() {
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

    const MotionLink = motion(Link);

    const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
    const [partnerFormData, setPartnerFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handlePartnerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "contact",
                    data: {
                        name: partnerFormData.name,
                        email: partnerFormData.email,
                        subject: `Partnership Inquiry: ${partnerFormData.company}`,
                        message: `Company: ${partnerFormData.company}\n\n${partnerFormData.message}`
                    }
                }),
            });

            if (!response.ok) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const err = await response.json();
                    throw new Error(err.error || "Failed to send enquiry");
                } else {
                    const text = await response.text();
                    console.error("Non-JSON error response:", text);
                    throw new Error("Server returned an invalid response. Please try again later.");
                }
            }

            toast.success("Request sent! We'll contact you soon.");
            setPartnerFormData({ name: "", email: "", company: "", message: "" });
            setStatus("idle");
            setTimeout(() => {
                setIsPartnerModalOpen(false);
            }, 2000);
        } catch (error: any) {
            console.error("Submission error:", error);
            toast.error(error.message || "An unexpected error occurred.");
            setStatus("idle");
        }
    };

    return (
        <>
            <section className="w-full h-[100vh] flex items-center justify-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        })
                    ]}
                    className="relative w-full h-full"
                >
                    <CarouselContent className='w-full h-full ml-0'>
                        { carousel_images.map((image, index) => (
                            <CarouselItem key={index} className='relative w-full h-[100vh] pl-0 pr-0'>
                                <div className="relative w-full h-full">
                                    <div className='w-full h-full absolute top-0 left-0 -z-10'>
                                        <img src={image.image} alt="banner" className='w-full h-full object-cover' fetchPriority='high' />
                                        <div className='w-full h-full absolute top-0 left-0 bg-black/50'></div>
                                    </div>
                                    <div className='z-20 h-full flex flex-col justify-center px-4 md:px-0'>
                                        <motion.h1
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="font-bold text-white text-[3.3rem] sm:text-[2.9rem] md:text-[4rem] lg:text-[6.916875rem] tracking-[-0.05rem] md:tracking-[-0.198125rem] leading-[2.8rem] md:leading-[4rem] lg:leading-[6.291875rem] text-center z-20"
                                        >
                                            Sustainable <br />Innovation,<br />From Soil to Soul
                                        </motion.h1>
                                        <motion.div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 justify-center mt-7 px-4 md:px-0">
                                            <MotionLink 
                                                href='/products' 
                                                className="inline-block btn-cta btn-cta-gradient text-white hover:scale-105 transition-all duration-300 text-sm md:text-base"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 1, delay: 1.5 }}
                                            >
                                                Order Farm Produce
                                            </MotionLink>
                                            <MotionLink 
                                                href='/investments' 
                                                className="inline-block btn-cta text-white border border-white/10 hover:scale-105 transition-all duration-300 text-sm md:text-base"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 1, delay: 1.9 }}
                                            >
                                                Partner With Us
                                            </MotionLink>
                                        </motion.div>
                                    </div>
                                </div>
                            </CarouselItem>
                        )) }
                    </CarouselContent>
                </Carousel>
            </section>
            
            <motion.section 
                className="py-16 lg:py-[10rem] pb-20 lg:pb-[13rem] px-4 md:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
                        <motion.div variants={fadeIn}>
                            <Badge className='font-inter text-[0.79375rem] text-[#755E4B] bg-[#F8DAC2] w-[8.94rem] h-[2.213rem]'>Our Mission</Badge>
                            <h4 className="font-bolder text-[2.5rem] md:text-[3.5rem] lg:text-[4.75rem] tracking-[-0.05rem] md:tracking-[-0.12rem] leading-[2.8rem] md:leading-[4rem] lg:leading-[4.75rem] font-manrope mt-5">Growing Good for Every Community.</h4>
                            <p className="font-inter leading-[1.8rem] md:leading-[2.4rem] text-[1rem] md:text-[1.2rem] lg:text-[1.423rem] font-light mt-6 md:mt-10">At Lift Farms (LiFT), we believe agriculture is the bedrock of societal transformation. By integrating modern sustainable techniques with deep community engagement, we are securing food for thousands while creating lasting economic value for rural smallholders.</p>
                            <div className='mt-8 md:mt-12 flex gap-x-3'>
                                <StatCard value='10+' label='HECTARES CULTIVATED' />
                                <StatCard value='500+' label='JOBS CREATED' />
                            </div>
                        </motion.div>
                        <motion.div className='relative lg:pl-12 mt-10 lg:mt-0 pb-28 lg:pb-0' variants={scaleIn}>
                            <img 
                                src='/assets/images/farmer.webp' 
                                alt="farmer" 
                                className='w-full lg:w-[36.18rem] h-[24rem] md:h-[30rem] lg:h-[36.34rem] rounded-[2rem] object-cover shadow-[0_2.091rem_4.182rem_-1.004rem] shadow-[#00000040]'
                                loading="lazy"
                            />
                            <motion.div 
                                className='absolute left-0 lg:left-[5%] bottom-[-5%] lg:bottom-[-20%] bg-primary-dark rounded-[1.3rem] text-primary-lighter w-full sm:w-[25.43rem] h-auto lg:h-[14.1rem] flex items-center justify-center px-6 py-6 lg:py-0'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <div className='flex flex-col gap-y-4'>
                                    <img src='/assets/leaf.svg' alt='Leaf Icon' className='w-[2rem] h-[2rem]' loading="lazy" />
                                    <p className='font-inter text-[1rem] lg:text-[1.1rem] leading-[1.6rem] lg:leading-[1.90rem] font-light'>Every harvest at LiFT is grown with respect for the soil and the people who tend it.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            
            <motion.section 
                className='relative w-full pt-16 lg:pt-[10rem] pb-10 lg:pb-[6rem] bg-background-light/70'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <div className='w-[90vw] mx-auto'>
                    <motion.div className='bg-primary-dark rounded-[1.886rem] text-white py-12 md:py-20 pb-16 md:pb-25' variants={fadeIn}>
                        <div className='relative text-center mx-auto w-[90%] md:w-[80%] lg:w-[65%]'>
                            <h3 className='font-manrope font-bolder text-[2rem] md:text-[2.8rem] lg:text-[3.75rem] tracking-[-0.05rem] md:tracking-[-0.12rem] leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.75rem]'>A Complete System</h3>
                            <p className='font-inter font-light text-[1rem] md:text-[1.2rem] lg:text-[1.414rem] leading-[1.7rem] md:leading-[2.201rem] mt-3'>From the first seed to the final packaged product, LiFT manages the entire agricultural value chain.</p>
                        </div>
                        <motion.div 
                            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 md:mt-20 px-4 md:px-6'
                            variants={staggerContainer}
                        >
                            <SystemCard
                                icon='/assets/bike.svg'
                                title='Agricultural Production'
                                description='High-yield cultivation of Rice, Maize, Pepper, and Cassava using regenerative practices.'
                                list={['Regenerative Soil Health', 'Regenerative Soil Health']}
                                variants={fadeIn}
                            />
                            <SystemCard
                                icon='/assets/factory.svg'
                                title='Food Processing'
                                description='Processing fresh harvests into high-quality Garri, Fufu, and refined grains.'
                                list={['Standard Facilities', 'Hygienic Packaging']}
                                variants={fadeIn}
                            />
                            <SystemCard
                                icon='/assets/vehicle.svg'
                                title='Bulk Distribution'
                                description='Efficient logistics networks ensuring our produce reaches markets and industrial partners on time.'
                                list={['Timely Delivery', 'Quality Assurance']}
                                variants={fadeIn}
                            />
                            <SystemCard
                                icon='/assets/community.svg'
                                title='Community Support'
                                description='Empowering local smallholders through training, input supply, and guaranteed buy-back schemes.'
                                list={['Outgrower Programs', 'Financial Literacy Training']}
                                variants={fadeIn}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div className='mt-16 md:mt-28 flex flex-col sm:flex-row justify-between items-end gap-6' variants={fadeIn}>
                        <div className='relative w-full sm:w-[40.375rem]'>
                            <h4 className='font-manrope text-[2rem] md:text-[3rem] leading-[2.5rem] md:leading-[3rem] font-bolder text-primary-dark'>The LiFT Collection</h4>
                            <p className='font-inter font-light text-[1rem] md:text-[1.125rem] leading-[1.6rem] md:leading-[1.75rem] text-gray mt-3'>Taste the difference of earth-conscious farming and meticulous processing. Our staple products represent the best of our fields.</p>
                        </div>
                        <Link href='/' className='font-inter font-medium text-[1rem] leading-[1.5rem] shrink-0 text-primary-dark border-b-2 border-primary-dark flex items-center gap-x-[0.031rem] group py-2 pb-3'>
                            <span>View Full Catalog</span>
                            <ArrowRight className='w-4 h-4 group-hover:-mr-2 duration-300 transition-all' />
                        </Link>
                    </motion.div>

                    <motion.div 
                        className='w-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 md:mt-15'
                        variants={staggerContainer}
                    >
                        <ProductCard
                            image={{ src: '/assets/catalogues/garri.webp', alt: 'Garri Catalogue' }}
                            title='Premium Garri'
                            description='Extra-fine, dry, and perfectly processed. Our signature staple for every African kitchen.'
                            badge='Best Seller'
                            className='sm:col-span-2'
                            titleClassName='text-[2.25rem] leading-[2.5rem]'
                            descriptionClassName='w-full md:w-[70%] lg:w-[26.125rem]'
                            variants={scaleIn}
                        />
                        <ProductCard
                            image={{ src: '/assets/catalogues/pepper.webp', alt: 'Pepper Catalogue' }}
                            title='Aromatic Peppers'
                            description='Freshly harvested daily'
                            className=''
                            variants={scaleIn}
                        />
                        <ProductCard
                            image={{ src: '/assets/catalogues/maize.webp', alt: 'Maize Catalogue' }}
                            title='Golden Maize'
                            contentClassName='bg-primary-gradient'
                            variants={scaleIn}
                        />
                        <ProductCard
                            image={{ src: '/assets/catalogues/rice.webp', alt: 'Rice Catalogue' }}
                            title='Parboiled Rice'
                            className='bg-primary-gradient'
                            contentClassName='bg-primary-gradient'
                            variants={scaleIn}
                        />
                        <ProductCard
                            image={{ src: '/assets/catalogues/fufu.webp', alt: 'Foo-foo Catalogue' }}
                            title='Authentic Foo-foo'
                            variants={scaleIn}
                        />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className='relative w-full py-16 lg:py-[10rem] bg-primary-dark overflow-hidden metric'
            >
                <div className='w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-20 items-center'>
                    <motion.div variants={fadeIn}>
                        <h3 className='font-manrope font-bold text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] leading-[2.5rem] md:leading-[3.2rem] lg:leading-[4rem] tracking-[-1.5px] text-white'>
                            Growth is Only Real<br />When it's Shared.
                        </h3>
                        <motion.ul 
                            className='mt-8 md:mt-12 space-y-6 md:space-y-10'
                            variants={staggerContainer}
                        >
                            <MetricCard
                                icon='/assets/bag.webp'
                                title="Sustainable Livelihoods"
                                description="Over 500 direct jobs and 2000+ indirect opportunities created for women and youth in rural clusters."
                                variants={fadeIn}
                            />
                            <MetricCard
                                icon='/assets/piggy-box.webp'
                                title="Poverty Eradication"
                                description="By eliminating middlemen, we ensure farmers receive 40% more value for their produce."
                                variants={fadeIn}
                            />
                            <MetricCard
                                icon='/assets/utensils.webp'
                                title="Food Security"
                                description="Stabilizing local food supply by improving yields and reducing post-harvest losses by 60%."
                                variants={fadeIn}
                            />
                        </motion.ul>
                    </motion.div>
                    
                    <motion.div 
                        className='relative flex flex-col sm:flex-row items-center justify-center gap-4'
                        variants={staggerContainer}
                    >
                        <motion.img 
                            src='/assets/metrics/community-meeting.webp' 
                            alt='Community Meeting' 
                            className='w-full sm:w-[21rem] h-[20rem] sm:h-[23rem] object-cover sm:mt-25' 
                            variants={fadeIn}
                            loading="lazy"
                        />
                        <motion.img 
                            src='/assets/metrics/harvest-joy.webp' 
                            alt='Harvest Joy' 
                            className='w-full sm:w-[21rem] h-[20rem] sm:h-[23rem] object-contain sm:-ml-5' 
                            variants={fadeIn}
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </motion.section>
            
            <motion.section 
                className='bg-background-light py-4'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <div className='partner-section py-16 md:py-[10rem]'>
                    <motion.div 
                        className='w-[92%] md:w-[80%] lg:w-[70%] mx-auto bg-[#EFEFD7] border border-[#C1C8C2] rounded-lg text-center py-12 md:py-20 px-4'
                        variants={scaleIn}
                    >
                        <motion.div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto' variants={staggerContainer}>
                            <motion.h3 variants={fadeIn} className='font-manrope font-bold text-[1.8rem] md:text-[2.8rem] lg:text-[3.5rem] leading-[2.5rem] md:leading-[3.2rem] lg:leading-[4rem] tracking-[-1.5px] text-primary-dark'>Partner With Us to Grow Sustainable Agriculture.</motion.h3>
                            <motion.p variants={fadeIn} className='font-inter font-light text-[1rem] md:text-[1.125rem] leading-[1.6rem] md:leading-[1.75rem] text-gray mt-3'>Join our ecosystem of investors, distributors, and community champions to redefine the future of food in Africa.</motion.p>
                            <motion.div variants={fadeIn}>
                                <button 
                                    onClick={() => setIsPartnerModalOpen(true)}
                                    className='w-full sm:w-[20rem] block font-inter font-medium text-[1rem] leading-[1.5rem] mx-auto text-white bg-primary-dark rounded-lg py-3 px-4 mt-10 hover:scale-[1.1] transition-all duration-300 cursor-pointer'
                                >
                                    Become a Partner
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            <Modal
                isOpen={isPartnerModalOpen}
                onClose={() => setIsPartnerModalOpen(false)}
                title="Become a Partner"
            >
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <InputField
                        label="Full Name"
                        id="partner-name"
                        placeholder="John Doe"
                        required
                        value={partnerFormData.name}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, name: e.target.value })}
                    />
                    <InputField
                        label="Email"
                        id="partner-email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={partnerFormData.email}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, email: e.target.value })}
                    />
                    <InputField
                        label="Company / Organization"
                        id="partner-company"
                        placeholder="Your Company Name"
                        required
                        value={partnerFormData.company}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, company: e.target.value })}
                    />
                    <InputField
                        label="Message"
                        id="partner-message"
                        type="textarea"
                        placeholder="Tell us how you'd like to partner..."
                        required
                        value={partnerFormData.message}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, message: e.target.value })}
                    />
                    
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-primary-dark text-white font-manrope font-bold text-[0.9rem] leading-[1.47rem] mt-3 text-center uppercase py-3 px-4 rounded-md hover:bg-primary transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Sending...
                            </>
                        ) : "Send Request"}
                    </button>
                </form>
            </Modal>
        </>
    )
}
