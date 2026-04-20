'use client'

import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { InputField } from "@/components/ui/InputField";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function Investments() {
    const [formData, setFormData] = useState({
        fullname: "",
        institution: "",
        tier: "Strategic Equity",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "investment",
                    data: formData
                }),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error || "Failed to send enquiry");
            }

            setStatus("success");
        } catch (error: any) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error.message || "An unexpected error occurred.");
        }
    };

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
                className="investor-section min-h-[60vh] md:h-[95vh] flex items-center justify-center py-20 md:py-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <motion.div className="w-full md:w-[75%]" variants={staggerContainer}>
                        <motion.div variants={fadeIn}>
                            <Badge className="bg-primary-lighter-2 text-primary-medium-2 font-manrope font-medium text-[0.83rem] leading-[1.11rem] tracking-[0.083rem] uppercase">Strategic Partnership</Badge>
                        </motion.div>
                        <motion.h2 className="text-white font-manrope font-[800] text-[2.5rem] md:text-[3.5rem] lg:text-[4.3rem] leading-[100%] mt-4" variants={fadeIn}>
                            Investing in Sierra <br />Leone's <br />
                            <span className="text-tertiary">Agricultural <br />Future.</span>
                        </motion.h2>
                        <motion.p className="w-full md:w-[70%] text-[#ECFDF5] font-manrope font-light text-[1rem] leading-[1.8rem] md:leading-[2rem] mt-4" variants={fadeIn}>
                            Join us in transforming West Africa's agritech landscape. We blend high-precision technology with fertile landscapes to deliver sustainable returns and local empowerment.
                        </motion.p>

                        <motion.div variants={fadeIn}>
                            <Link href='#investments' className="inline-flex items-center gap-2 bg-primary-dark text-white px-5 py-4 rounded-md text-[.8rem] leading-[1rem] mt-5 hover:bg-primary transition-colors duration-200">
                                <span>Partner With Us</span>
                                <span><ArrowRight className="w-3 h-3"/></span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                className="py-16 md:py-25 bg-background-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <div className="text-center">
                        <motion.div className="mb-10 md:mb-15" variants={fadeIn}>
                            <h3 className="relative text-primary-dark font-manrope font-[800] text-[1.8rem] md:text-[2.5rem] leading-[100%] before:absolute before:-bottom-[.8rem] before:left-[50%] before:w-[10%] before:h-[.15rem] before:bg-tertiary before:translate-x-[-50%] before:bg-tertiary-dark">Investment Verticals</h3>
                            <p className="w-full md:w-[70%] mt-5 mx-auto text-gray font-inter font-light text-[1rem] leading-[1.8rem] md:leading-[2.25rem]">Diverse avenues for capital placement in high-growth sustainable agriculture.</p>
                        </motion.div>
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left" variants={staggerContainer}>
                            <motion.div className="h-auto md:h-[27.3rem] rounded-lg col-span-1 md:col-span-2 lg:col-span-2 bg-primary-dark py-8 md:py-10 px-6 flex items-center" variants={scaleIn}>
                                <div className="w-full md:w-[70%]">
                                    <img src='/assets/mount.webp' alt='mount' className="h-4 object-cover mb-8" loading="lazy" />
                                    <h3 className="text-white font-manrope font-[700] text-[1.5rem] md:text-[2.1rem] leading-[2rem] md:leading-[2.6rem]">Regenerative Land Acquisition</h3>
                                    <p className="w-full md:w-[80%] text-white font-inter font-light text-[1rem] leading-[1.7rem] md:leading-[1.94rem] mt-2">Strategic investment in fertile landscapes utilizing regenerative practices to increase soil organic matter and long-term land valuation.</p>

                                    <ul className="mt-5 space-y-2">
                                        <li className="flex items-center gap-3">
                                            <span>
                                                <CheckCircle className="w-4 h-4 text-tertiary" />
                                            </span>
                                            <span className="text-white font-inter font-medium text-[1rem] leading-[1.94rem]">12% Projected Annual Appreciation</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span>
                                                <CheckCircle className="w-4 h-4 text-tertiary" />
                                            </span>
                                            <span className="text-white font-inter font-medium text-[1rem] leading-[1.94rem]">ESG-Compliance Integrated</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div className="h-auto md:h-[27.3rem] bg-background-lighter rounded-lg p-6 flex items-center" variants={scaleIn}>
                                <div className="text-left">
                                    <img src='/assets/machine-arm.webp' alt='machine' className="h-6 object-cover mb-5" loading="lazy" />
                                    <h3 className="text-primary-dark font-manrope font-[700] text-[1.4rem] md:text-[1.7rem] leading-[2rem] md:leading-[2.3rem]">Ag-Tech R&D</h3>
                                    <p className="text-primary-dark font-inter font-light text-[1rem] md:text-[1.1rem] leading-[1.7rem] md:leading-[1.94rem] mt-3">Funding precision farming tools and data-driven irrigation systems for peak efficiency.</p>
                                    <Link href='/' className="inline-block text-primary-dark text-[.9rem] leading-[1.94rem] mt-5 border-b border-primary-dark/40 hover:scale-[1.05] duration-200">Learn More</Link>
                                </div>
                            </motion.div>
                            <motion.div className="h-auto md:h-[27.3rem] bg-background-lighter rounded-lg p-6 flex items-center" variants={scaleIn}>
                                <div className="text-left">
                                    <img src='/assets/union.webp' alt='union' className="h-6 object-cover mb-5" loading="lazy" />
                                    <h3 className="w-full md:w-[70%] text-primary-dark font-manrope font-[700] text-[1.4rem] md:text-[1.7rem] leading-[2rem] md:leading-[2.3rem]">Community Cooperatives</h3>
                                    <p className="text-primary-dark font-inter font-light text-[1rem] md:text-[1.1rem] leading-[1.7rem] md:leading-[1.94rem] mt-3">Micro-investment models supporting local farmer clusters with training and equipment.</p>
                                    <Link href='/' className="inline-block text-primary-dark text-[.9rem] leading-[1.94rem] mt-5 border-b border-primary-dark/40 hover:scale-[1.05] duration-200">Impact Report</Link>
                                </div>
                            </motion.div>
                            <motion.div className="h-auto md:h-[27.3rem] rounded-lg col-span-1 md:col-span-2 lg:col-span-2 bg-tertiary p-6 flex items-center" variants={scaleIn}>
                                <div className="text-left">
                                    <img src='/assets/van.webp' alt='van' className="h-6 object-cover mb-6" loading="lazy" />
                                    <h3 className="text-tertiary-dark font-manrope font-[700] text-[1.5rem] md:text-[2.1rem] leading-[2rem] md:leading-[2.6rem]">Supply Chain Logistics</h3>
                                    <p className="w-full md:w-[55%] text-tertiary-dark font-inter font-light text-[1rem] leading-[1.7rem] md:leading-[1.94rem] mt-2">Expanding cold-storage infrastructure and direct-to-market distribution channels across the Pan-African region.</p>

                                    <div className="flex items-center gap-2 mt-5">
                                        <Badge className="bg-white/30 text-tertiary-dark uppercase font-inter font-medium text-[0.89rem] px-3 py-4 leading-[1.94rem]">Infrastructure</Badge>
                                        <Badge className="bg-white/30 text-tertiary-dark uppercase font-inter font-medium text-[0.89rem] px-3 py-4 leading-[1.94rem]">Export Hubs</Badge>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="py-16 md:py-25 bg-background-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <div className="w-full bg-white rounded-sm py-8 md:py-10 px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-4">
                            <motion.div className="w-full h-[22rem] md:h-[30rem] lg:h-[35.9rem] relative rounded-lg" variants={scaleIn}>
                                <img src='/assets/images/harvest.webp' alt='farmer harvest' className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                            </motion.div>

                            <div className="w-full flex justify-center">
                                <motion.div className="w-full lg:w-[80%]" variants={staggerContainer}>
                                    <motion.h3 className="text-primary-dark font-manrope font-[900] text-[2rem] md:text-[2.8rem] lg:text-[3.4rem] leading-[100%]" variants={fadeIn}>Bridging Local Harvests to <span className="text-tertiary">Global Markets.</span></motion.h3>
                                    <motion.p className="font-inter text-gray font-light text-[1rem] md:text-[1.1rem] leading-[1.7rem] md:leading-[1.94rem] mt-6 md:mt-10" variants={fadeIn}>We leverage cutting-edge supply chain technology to reduce post-harvest losses and ensure that sustainable African produce reaches global high-end retailers. Our partnership network spans four continents, creating a robust ecosystem of trust and quality.</motion.p>

                                    <motion.div className='flex items-center gap-x-10 mt-8 md:mt-10' variants={fadeIn}>
                                        <div className='basis-[50%] flex flex-col items-start justify-start'>
                                            <span className='font-manrope font-bold text-[1.8rem] leading-[2.4rem] text-primary-dark'>24+</span>
                                            <span className='font-inter font-light text-gray text-[1rem] leading-[1.5rem]'>Active Export Channels</span>
                                        </div>
                                        <div className='basis-[50%] flex flex-col items-start justify-start'>
                                            <span className='font-manrope font-bold text-[1.8rem] leading-[2.4rem] text-primary-dark'>100k+</span>
                                            <span className='font-inter font-light text-gray text-[1rem] leading-[1.5rem]'>Acres under management</span>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <Link href='/' className="inline-block bg-primary-dark text-white font-manrope font-bold text-[0.9rem] leading-[1.47rem] mt-8 md:mt-10 text-center uppercase py-3 px-4 rounded-md hover:bg-primary transition-colors duration-200">View Market Startegy</Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="py-16 md:py-30 bg-background-light/50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div id='investments' className="w-[90%] mx-auto">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 shadow-xl rounded-md overflow-hidden">
                        <div className="bg-primary-dark h-full flex items-center justify-center p-6 md:p-10 rounded-tl-md rounded-tr-md lg:rounded-tr-none lg:rounded-bl-md">
                            <motion.div variants={staggerContainer}>
                                <motion.h3 className="w-full md:w-[60%] text-white font-manrope font-medium text-[1.8rem] md:text-[2.29rem] leading-[2.5rem] md:leading-[3.25rem]" variants={fadeIn}>Start a Conversation.</motion.h3>
                                <motion.p className="text-white font-inter font-light text-[1rem] md:text-[1.1rem] leading-[1.7rem] md:leading-[1.94rem] mt-3" variants={fadeIn}>Our investor relations team will provide you with a tailored overview of current opportunities within 48 hours.</motion.p>

                                <motion.ul className="mt-7 space-y-3" variants={fadeIn}>
                                    <li className="flex items-center gap-x-3">
                                        <img src='/assets/envelope.webp' alt='envelope' className="w-4 h-4 object-contain" loading="lazy" />
                                        <span className="font-inter font-medium text-white text-[1rem] leading-[1.94rem]">liftumbrellagroup@gmail.com</span>
                                    </li>
                                    <li className="flex items-center gap-x-3">
                                        <img src='/assets/map.webp' alt='map' className="w-5 h-5 object-contain -ml-[0.2rem]" loading="lazy" />
                                        <span className="font-inter font-medium text-white text-[1rem] leading-[1.94rem]">Makeni & Kono, Sierra Leone</span>
                                    </li>
                                </motion.ul>

                                <motion.div className="font-inter uppercase text-gray-light/30 text-[.9rem] leading-[1.94rem] mt-10 md:mt-12 pt-10 border-t border-gray-light/30" variants={fadeIn}>
                                    <p className="font-medium text-white text-[0.8rem] leading-[1.32rem]">Compliance Status</p>
                                    <p className="mt-2 font-light text-white text-[0.8rem] leading-[1.32rem]">Fully registered in the Sierra Leone government.</p>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="bg-white flex flex-col items-center rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
                            <motion.form 
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 md:p-10 w-full" 
                                variants={staggerContainer}
                                onSubmit={handleSubmit}
                            >
                                <InputField label="Full Name" id="fullname" placeholder="e.g. Elena Vance" className="w-full" required value={formData.fullname} onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} />
                                <InputField label="Institution" id="institution" placeholder="Company or Fund Name" className="w-full" required value={formData.institution} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} />
                                <InputField label="Investment Tier" id="tier" type="select" options={["Strategic Equity", "Venture Capital", "Impact Fund"]} containerClassName="col-span-1 sm:col-span-2" value={formData.tier} onChange={(e) => setFormData({ ...formData, tier: e.target.value })} />
                                <InputField label="Message" id="message" type="textarea" placeholder="Briefly describe your interest..." containerClassName="col-span-1 sm:col-span-2" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                                <div className="col-span-1 sm:col-span-2">
                                    <button 
                                        type='submit' 
                                        disabled={status === "loading"}
                                        className="w-full bg-primary-dark text-white font-manrope font-bold text-[0.9rem] leading-[1.47rem] mt-3 text-center uppercase py-3 px-4 rounded-md hover:bg-primary transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : "Send Enquiry"}
                                    </button>
                                </div>

                                {status === "success" && (
                                    <div className="col-span-1 sm:col-span-2 mt-4 p-4 bg-green/10 border border-green/20 rounded-md flex items-center gap-3 text-green-700">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <p className="font-inter text-sm font-medium">Enquiry sent successfully! Our investor relations team will be in touch.</p>
                                    </div>
                                )}
                                
                                {status === "error" && (
                                    <div className="col-span-1 sm:col-span-2 mt-4 p-4 bg-red/10 border border-red/20 rounded-md flex items-center gap-3 text-red-700">
                                        <AlertCircle className="w-5 h-5" />
                                        <p className="font-inter text-sm font-medium">{errorMessage}</p>
                                    </div>
                                )}
                            </motion.form>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}
