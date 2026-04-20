'use client'

import { Badge } from "@/components/ui/badge"
import { InputField } from "@/components/ui/InputField"
import { ArrowRight, ArrowUpRight, Mail, MapPin, MessageSquareText, Phone, Loader2, Map } from "lucide-react"
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "contact",
                    data: formData
                }),
            });

            if (!response.ok) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const err = await response.json();
                    throw new Error(err.error || "Failed to send message");
                } else {
                    const text = await response.text();
                    console.error("Non-JSON error response:", text);
                    throw new Error("Server returned an invalid response. Please try again later.");
                }
            }

            toast.success("Message sent successfully! We'll get back to you soon.");
            setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
            setStatus("idle");
        } catch (error: any) {
            console.error("Submission error:", error);
            toast.error(error.message || "An unexpected error occurred.");
            setStatus("idle");
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
                staggerChildren: 0.15
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
                className="w-full bg-background-light py-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="bg-tertiary/60 w-full py-16 md:py-25">
                    <div className="w-[90%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] items-center gap-6">
                            <motion.div variants={staggerContainer}>
                                <motion.div variants={fadeIn}>
                                    <Badge className="font-inter text-[0.8rem] leading-[1.2rem] tracking-[0.11rem] uppercase text-primary-medium-2 bg-primary-lighter-2">Reach out</Badge>
                                </motion.div>
                                <motion.h2 className="font-sora font-bold text-[3rem] md:text-[5rem] lg:text-[6.2rem] leading-[3.5rem] md:leading-[6rem] lg:leading-[8.74rem] tracking-[0.05rem] md:tracking-[0.23rem] text-tertiary-dark-4" variants={fadeIn}>Contact us.</motion.h2>
                            </motion.div>
                            <motion.div className="flex justify-start md:justify-center" variants={fadeIn}>
                                <p className="w-full md:w-[80%] font-inter font-light text-[1rem] md:text-[1.2rem] leading-[1.6rem] md:leading-[1.8rem] text-tertiary-dark-4">Our doors are always open to visionary investors, curious partners, and those who believe in the future of sustainable agronomy.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="bg-background-light py-16 md:py-25"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
                        <motion.div className="relative" variants={staggerContainer}>
                            <motion.form 
                                className="bg-gray-lighter/5 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 py-6 rounded-lg" 
                                variants={fadeIn}
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <InputField label="Your Name" id="name" placeholder="John Doe" className="w-full" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div>
                                    <InputField label="Email Address" id="email" type="email" placeholder="john@example.com" className="w-full" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <InputField label="Subject" id="subject" type="select" options={["General Inquiry", "Partnership", "Support", "Other"]} containerClassName="col-span-1 sm:col-span-2" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <InputField label="Message" id="message" type="textarea" placeholder="Briefly describe your interest..." containerClassName="col-span-1 sm:col-span-2" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                                </div>
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
                                        ) : "Send Message"}
                                    </button>
                                </div>
                            </motion.form>

                            <motion.div variants={scaleIn}>
                                <Link href="https://wa.me/32498410963?text=hello" target="_blank" rel="noopener noreferrer" className="block mt-8 md:mt-15 w-full h-auto md:h-[6rem] px-4 py-5 md:py-6 rounded-lg bg-primary-light flex items-center justify-between hover:scale-[1.02] duration-200 cursor-pointer">
                                    <div className="flex items-center gap-x-4">
                                        <div className="w-[3rem] md:w-[3.5rem] h-[3rem] md:h-[3.5rem] bg-green rounded-full flex items-center justify-center shrink-0">
                                            <MessageSquareText className="w-[1.5rem] md:w-[1.75rem] h-[1.5rem] md:h-[1.75rem] text-white" />
                                        </div>
                                        <div>
                                            <h5 className="font-inter font-bold text-[1rem] leading-[1.8rem] text-white">Message us on WhatsApp</h5>
                                            <p className="-mt-1 font-inter font-light text-[0.9rem] leading-[1.6rem] text-primary-lighter/80">+232-783-622-63</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ArrowRight className="text-primary-lighter w-6 h-6" />
                                    </div>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <div className="w-full flex justify-center">
                            <motion.div className="grid grid-cols gap-4 px-0 lg:px-10 w-full justify-start" variants={staggerContainer}>
                                <motion.div className="h-[8rem] bg-background-lighter border-l-3 border-tertiary-dark flex flex-col items-start justify-center p-4 px-6 rounded-md rounded-bl-none rounded-tl-none" variants={fadeIn}>
                                    <Phone className="w-4 h-4 text-tertiary-dark mb-3" />
                                    <h5 className="font-manrope font-bolf text-[1.1rem] leading-[1.5rem] text-tertiary-dark">Call Us</h5>
                                    <span className="font-inter font-light text-[0.85rem] md:text-[1rem] leading-[1.6rem] text-gray">+32-498-41-09-63</span>
                                </motion.div>
                                <motion.div className="h-[8rem] bg-background-lighter border-l-3 border-primary-dark flex flex-col items-start justify-center p-4 px-6 rounded-md rounded-bl-none rounded-tl-none" variants={fadeIn}>
                                    <Mail className="w-4 h-4 text-tertiary-dark mb-3" />
                                    <h5 className="font-manrope font-bolf text-[1.1rem] leading-[1.5rem] text-tertiary-dark">Email Us</h5>
                                    <span className="font-inter font-light text-[0.85rem] md:text-[1rem] leading-[1.6rem] text-gray">hello@liftfarms.sl</span>
                                </motion.div>
                                <motion.div className="h-auto min-h-[9.25rem] bg-red rounded-md py-4 px-6 col-span-2 flex items-center gap-x-3" variants={fadeIn}>
                                    <MapPin className="w-4 h-4 text-tertiary-dark shrink-0" />
                                    <div>
                                        <h5 className="font-manrope font-bold text-[1.1rem] leading-[1.5rem] text-tertiary-dark-4">Visit our HQ</h5>
                                        <span className="mt-1 block font-inter font-light text-[0.9rem] leading-[1.5rem] w-full md:w-[70%] text-red-dark">26 Magburaka Road, Makeni, Northern Province, Sierra Leone.</span>
                                    </div>
                                </motion.div>
                                <motion.div className="acre col-span-2 h-[14rem] rounded-md relative" variants={scaleIn}>
                                    <p className="absolute bottom-3 left-5 font-bold text-[1rem] leading-[1.8rem] text-white">Rooted In Sierra Leone</p>
                                </motion.div>
                                <motion.div className="col-span-2 w-full py-10 h-[20rem] bg-gray-lighter/10 rounded-lg mt-5 flex items-center justify-center" variants={scaleIn}>
                                    <div className="flex flex-col items-center justify-center gap-x-3 px-4 text-center">
                                        <Map />
                                        <h4 className="font-manrope font-bold text-[1.1rem] leading-[1.5rem] text-primary-dark mt-2">Find us in Makeni</h4>
                                        <p className="font-inter font-light text-[0.9rem] leading-[1.5rem] text-gray">Interactive navigation to 26 Magburaka Road</p>
                                        <Link href="https://maps.app.goo.gl/UGxGC7YyHCfSnJtb7" target="_blank" className="h-[2.87rem] bg-background text-primary-dark font-manrope font-bold text-[0.7rem] leading-[1.47rem] mt-3 text-center uppercase py-3 px-4 rounded-full hover:bg-primary transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] border border-primary-dark/20 hover:text-white duration-300">Open in Google Maps</Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>  
            </motion.section>

            <motion.section 
                className='py-10 bg-background-light'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <motion.div className="w-full h-auto min-h-[12rem] bg-primary-dark rounded-lg flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 md:px-10 py-8 lg:py-0 gap-6 lg:gap-0 lg:h-[18rem]" variants={scaleIn}>
                        <motion.div variants={staggerContainer} className="flex-1">
                            <motion.h4 className="w-full md:w-[50%] font-manrope text-[1.6rem] md:text-[2.2rem] leading-[2.2rem] text-white font-bold" variants={fadeIn}>Support that grows with you.</motion.h4>
                            <motion.p className="mt-2 font-inter font-light text-[1rem] leading-[1.6rem] text-primary-lighter w-full md:w-[60%]" variants={fadeIn}>Our team is dedicated to providing swift assistance and fostering transparent communication with all our stakeholders.</motion.p>
                        </motion.div>
                        <motion.div className="w-full lg:basis-[50%] flex items-center gap-x-0" variants={staggerContainer}>
                            <motion.div className='basis-[50%] flex flex-col items-start justify-start' variants={fadeIn}>
                                <span className='font-manrope font-bold text-[2rem] leading-[2.4rem] text-tertiary-dark'>24h</span>
                                <span className='font-inter font-light text-primary-lighter text-[0.9rem] leading-[1.5rem]'>Response Time</span>
                            </motion.div>
                            <motion.div className='basis-[50%] flex flex-col items-start justify-start' variants={fadeIn}>
                                <span className='font-manrope font-bold text-[2rem] leading-[2.4rem] text-tertiary-dark'>100%</span>
                                <span className='font-inter font-light text-primary-lighter text-[0.9rem] leading-[1.5rem]'>Traceability</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div 
                    className="map-section w-full h-[22rem] md:h-[30rem] relative mt-16 md:mt-20"
                    variants={scaleIn}
                >
                    <motion.div 
                        className="absolute bottom-5 right-5 md:bottom-10 md:right-10 w-[90%] sm:w-[26rem] md:w-[32rem] h-auto bg-white shadow-md rounded-md flex flex-col items-start justify-center p-4 px-5 md:px-6 gap-y-3"
                        variants={fadeIn}
                        transition={{ delay: 0.4 }}
                    >
                        <h4 className="font-manrope font-bold text-[1.3rem] md:text-[1.68rem] leading-[1.68rem] text-tertiary-dark">Processing Hub 01</h4>
                        <p className="font-inter font-light text-[0.95rem] md:text-[1.1rem] leading-[1.5rem] text-gray">Our state-of-the-art processing facility powered by 100% renewable grid energy.</p>
                        <Link href='https://maps.app.goo.gl/UGxGC7YyHCfSnJtb7' target="_blank" className="border-b border-tertiary-dark flex items-center gap-x-1 group">
                            <span className="font-inter font-medium text-[0.9rem] leading-[1.5rem] text-tertiary-dark">View on Google Maps</span>
                            <ArrowUpRight className="w-4 h-4 text-tertiary-dark group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}
