'use client'

import { Loader2, ShoppingBag } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";
import { InputField } from "@/components/ui/InputField";
import { Modal } from "@/components/Modal";

const Produce = ({ image, title, badge_content, description, packaging, variants }: { image: string, title: string, badge_content: string, description: string, packaging: string, variants?: Variants }) => {
    return (
        <motion.div className="border border-gray-200 rounded-md overflow-hidden" variants={variants}>
            <div className="h-[17.68rem] w-full relative">
                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-tr-md rounded-tl-md" loading="lazy" />
                <div className="absolute top-0 left-0 w-full h-full bg-gray/30 rounded-tr-md rounded-tl-md"></div>            
            </div>
            <div className="bg-white p-5 space-y-3 md:space-y-0 flex flex-col items-between h-[calc(100%-17.68rem)]">
                <div className="flex items-center justify-between">
                    <h4 className="font-manrope font-bold text-[1.5rem] leading-[2rem] text-primary-dark">{title}</h4>
                    <Badge className="font-inter font-bold text-[.5rem] leading-[0.6rem] tracking-[0.02rem] py-3 text-tertiary-dark-2 bg-tertiary-light-2 px-2 uppercase">{badge_content}</Badge>
                </div>
                <p className="mt-3 font-inter font-light text-[1.05rem] leading-[1.4rem] text-gray mb-3">{description}</p>
                <p className="flex items-center gap-x-3 mt-auto">
                    <ShoppingBag className="w-4 h-4 text-tertiary-dark-3" />
                    <span className="font-inter font-bold text-[0.75rem] leading-[1rem] text-tertiary-dark-3">Packaging: {packaging}</span>
                </p>
            </div>
        </motion.div>
    )
}

const PremiumProduce = ({ 
    src, 
    title, 
    description, 
    tags, 
    packaging,
    variants,
    brand = false
}: { 
    src: string, 
    title: string, 
    description: string, 
    tags: string[], 
    packaging: {type: string; size: string}[],
    variants?: Variants,
    brand?: boolean
}) => {
    return (
        <motion.div className="flex flex-col md:flex-row md:h-[25.35rem] max-h-auto overflow-hidden" variants={variants}>
            <div className="basis-full md:basis-[30%] h-[16rem] md:h-full relative">
                <img src={src} alt={title} className="w-full h-full object-cover md:rounded-tl-md md:rounded-bl-md rounded-tl-md rounded-tr-md" loading="lazy" />
                {brand && (
                    <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                        <img src='/assets/images/logo-frame.png' alt='brand' className='w-[5rem] h-[5rem] object-cover' />
                    </div>
                )}
            </div>
            <div className="basis-full md:basis-[70%] bg-gray-lighter/10 md:rounded-tr-md md:rounded-br-md rounded-bl-md rounded-br-md">
                <div className='p-6 md:p-10'>
                    <h4 className="w-full md:w-[70%] font-manrope font-bold text-[1.5rem] md:text-[2rem] leading-[1.8rem] md:leading-[2rem] text-primary-dark">{title}</h4>
                    <div className="flex items-center gap-x-3 my-5">
                        {tags && tags.map((tag, idx) => (
                            <Badge key={idx} className="font-inter font-medium uppercase text-primary-lighter bg-primary-dark text-[0.58rem] leading-[1.17rem] px-2 py-1">{tag}</Badge>
                        ))}
                    </div>
                    <p className="font-inter font-light text-[1rem] md:text-[1.2rem] leading-[1.6rem] md:leading-[1.9rem] text-gray">{description}</p>

                    <ul className="divide-y divide-gray/10 mt-6 space-y-3">
                        {packaging && packaging.map((pack, idx) => (
                            <li key={idx} className="flex items-center justify-between font-inter font-medium text-[.8rem] md:text-[1rem] leading-[1.56rem]">
                                <span className=" text-primary-dark">{pack.type}</span>
                                <span  className=" text-tertiary-dark-3">{pack.size}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default function Products() {
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

    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [orderFormData, setOrderFormData] = useState({
        name: "",
        email: "",
        product: "Stone-Free Rice",
        quantity: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleOrderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const message = `Hello, I would like to place an order.\n\n*Name:* ${orderFormData.name}\n*Email:* ${orderFormData.email}\n*Product:* ${orderFormData.product}\n*Quantity:* ${orderFormData.quantity}\n*Notes:* ${orderFormData.message || "None"}`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/32498410963?text=${encodedMessage}`, '_blank');
        
        toast.success("Opening WhatsApp...");
        setOrderFormData({ name: "", email: "", product: "Stone-Free Rice", quantity: "", message: "" });
        setIsOrderModalOpen(false);
    };

    return (
        <>
            <motion.section 
                className="min-h-[60vh] md:h-[95vh] flex items-center bg-background-light overflow-hidden py-16 md:py-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-12">
                        <motion.div variants={fadeIn}>
                            <Badge className="font-inter font-bold uppercase text-[.8rem] leading-[0.5rem] tracking-[0.02rem] py-3 text-tertiary-dark-2 bg-tertiary-light px-4">Our Catalogue</Badge>
                            <h3 className="mt-8 text-primary-dark font-manrope font-[800] text-[3rem] md:text-[4.5rem] lg:text-[5.9rem] leading-[100%]">The Harvest <br /><span className="text-tertiary">of Integrity.</span></h3>
                            <p className="mt-6 md:mt-10 text-gray font-inter font-[500] text-[1rem] md:text-[1.2rem] leading-[1.6rem] md:leading-[1.9rem]">From the rich soils of our sustainable farms directly to your table. We bridge the gap between ethical cultivation and premium quality processing.</p>
                        </motion.div>
                        <motion.div className="relative flex justify-center items-center mt-6 lg:mt-0" variants={scaleIn}>
                            <div className="h-[18rem] md:h-[22rem] lg:h-[25.4rem] w-full lg:w-[35rem] relative">
                                <img src='/assets/images/product-banner.webp' alt='banner' className="w-full h-full object-cover rounded-md shadow-2xl" loading="lazy" />
                                <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/30 rounded-md"></div>
                            </div>
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
                    <motion.div className="flex items-center justify-between" variants={fadeIn}>
                        <h4 className="text-primary-dark font-manrope font-[800] text-[1.8rem] md:text-[2.25rem] leading-[2.25rem] tracking-[-0.056rem]">Farm Produce</h4>
                        <span className="text-tertiary-dark-3 font-inter font-medium text-[0.5rem] leading-[1rem] tracking-[0.075rem] uppercase">Natural &amp; Raw</span>
                    </motion.div>

                    <div className="flex flex-col items-center">
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" variants={staggerContainer}>
                            <Produce image='/assets/images/farm-produce5.webp' title='Stone-Free Rice' description='Long-grain parboiled rice, meticulously cleaned and polished. Sustainably grown in our river-fed fields.' badge_content='Bulk Available' packaging='25kg, 50kg bags' variants={fadeIn} />
                            <Produce image='/assets/images/farm-produce4.webp' title='Hybrid Maize' description='High-yield yellow and white maize. Dried to optimal moisture levels for long shelf life and nutrition.' badge_content="Farm Direct" packaging='100kg Jute bags' />
                            <Produce image='/assets/images/farm-produce2.webp' title='Premium Peppers' description='A blend of Scotch Bonnet and Habanero varieties. Hand-picked for maximum heat and aromatic flavor profile..' badge_content='Farm Direct' packaging='Small crates / Retail bags' variants={fadeIn} />
                            <Produce image='/assets/images/farm-produce3.webp' title='Farm Fresh Eggs' description='Organic, high-protein eggs from healthy free-range poultry. Collected daily for peak freshness.' badge_content='Free Range' packaging='25kg, 50kg bags' variants={fadeIn} />
                            <Produce image='/assets/images/farm-produce.webp' title='Sweet Potatoes' description='Rich in fiber and essential vitamins, harvested from our nutrient-dense, organic soil.' badge_content='Nutrient Dense' packaging='25kg, 50kg Mesh bags' variants={fadeIn} />
                            <Produce image='/assets/images/farm-produce4.webp' title='Fresh Ginger' description='High-grade, aromatic ginger root. Expertly cleaned and prepared for local and export markets.' badge_content='Premium Grade' packaging='40kg Jute bags' variants={fadeIn} />
                        </motion.div>
                        <button 
                            onClick={() => setIsOrderModalOpen(true)}
                            className="mt-10 bg-gray-lighter-2 border-gray-lighter-3 text-primary-dark px-8 py-4 rounded-md font-inter font-medium text-[1rem] leading-[1rem] tracking-[0.075rem] uppercase hover:scale-105 transition-transform duration-200 cursor-pointer"
                        >
                            Place An Order
                        </button>
                    </div>

                    <motion.div className="mission mt-10 md:mt-[5rem] w-full h-auto md:h-[18rem] bg-primary-dark rounded-lg p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0" variants={scaleIn}>
                        <div className="w-full md:basis-[70%]">
                            <h4 className="font-manrope font-[900] text-[1.5rem] md:text-[2rem] text-white leading-[2rem]">Processing with Purpose</h4>
                            <p className="w-full md:w-[55%] mt-3 font-inter font-light text-[1rem] leading-[1.9rem] text-primary-lighter">Every LiFT product undergoes rigorous quality checks to ensure that the natural goodness of the farm is preserved in every bag.</p>
                        </div>
                        <div className="w-full md:basis-[30%] flex items-center gap-x-4">
                            <div className='basis-[50%] flex flex-col items-start justify-start'>
                                <span className='font-manrope font-bold text-[1.8rem] leading-[2.4rem] text-tertiary'>100%</span>
                                <span className='font-inter font-light text-white/80 text-[1rem] leading-[1.5rem]'>Organic Process</span>
                            </div>
                            <div className='basis-[50%] flex flex-col items-start justify-start'>
                                <span className='font-manrope font-bold text-[1.8rem] leading-[2.4rem] text-tertiary'>5K+</span>
                                <span className='font-inter font-light text-white/80 text-[1rem] leading-[1.5rem]'>Metric Tons</span>
                            </div>
                        </div>
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
                    <motion.div className="flex items-center justify-between" variants={fadeIn}>
                        <h4 className="text-primary-dark font-manrope font-[800] text-[1.8rem] md:text-[2.25rem] leading-[2.25rem] tracking-[-0.056rem]">Processed Essentials</h4>
                        <span className="text-tertiary-dark-3 font-inter font-medium text-[0.5rem] leading-[1rem] tracking-[0.075rem] uppercase">Quality Refined</span>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-6" variants={staggerContainer}>
                        <PremiumProduce 
                            src='/assets/images/premium-garri.png'
                            title='LiFT Premium Garri'
                            description='Naturally fermented and expertly fried. Our white and yellow garri varieties are known for their distinct crunch and low moisture content.'
                            tags={['Dry & Crunchy', 'Dry & Crunchy']}
                            packaging={[
                                {type: 'Family Pack', size: '1kg Retail Bag'},
                                {type: 'Bulk Supply', size: '50kg Heavy Duty Bags'}
                            ]}
                            variants={fadeIn}
                            brand={true}
                        />
                        <PremiumProduce 
                            src='/assets/images/premium-flour.webp'
                            title='LiFT Smooth Foo-Foo'
                            description='Processed using advanced moisture extraction technology. A staple food product that is easy to prepare and smooth to the touch.'
                            tags={['Ordorless', 'Pure White']}
                            packaging={[
                                {type: 'Wholesale Standard', size: '50kg Commercial Bags'},
                                {type: 'Custom Orders', size: 'Inquire for sizes'}
                            ]}
                            variants={fadeIn}
                        />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                className="py-2 pb-20 bg-background-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                <div className="bg-red py-16 md:py-20"> 
                    <div className="w-[90%] mx-auto flex flex-col items-center justify-center text-center">
                        <div className="w-full md:w-[60%]">
                            <h3 className="font-manrope font-[900] text-primary-dark text-[2rem] md:text-[2.7rem] leading-[2.5rem] md:leading-[3rem] tracking-[-0.056rem] text-red-dark">Ready to Secure Your Supply</h3>
                            <p className="mt-5 font-inter font-light text-primary-dark text-[1rem] md:text-[1.3rem] leading-[1.6rem] md:leading-[1.875rem] text-medium">We handle bulk orders for distributors, supermarkets, and catering services nationwide. Partner with LiFT for consistent quality.</p>
                            <button 
                                onClick={() => setIsOrderModalOpen(true)}
                                className="mt-10 bg-gray-lighter-2 border-gray-lighter-3 text-primary-dark px-8 py-4 rounded-md font-inter font-medium text-[1rem] leading-[1rem] tracking-[0.075rem] uppercase hover:scale-105 transition-transform duration-200 cursor-pointer"
                            >
                                Place An Order
                            </button>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Modal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
                title="Order Farm Produce"
            >
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <InputField label="Full Name" id="order-name" placeholder="John Doe" required value={orderFormData.name} onChange={(e) => setOrderFormData({ ...orderFormData, name: e.target.value })} />
                    <InputField label="Email" id="order-email" type="email" placeholder="john@example.com" required value={orderFormData.email} onChange={(e) => setOrderFormData({ ...orderFormData, email: e.target.value })} />
                    <InputField label="Product" id="order-product" type="select" options={["Stone-Free Rice", "Hybrid Maize", "Premium Peppers", "Farm Fresh Eggs", "Sweet Potatoes", "Fresh Ginger", "Premium Garri", "Smooth Foo-Foo"]} required value={orderFormData.product} onChange={(e) => setOrderFormData({ ...orderFormData, product: e.target.value })} />
                    <InputField label="Quantity / Details" id="order-quantity" placeholder="e.g. 50 bags of 50kg" required value={orderFormData.quantity} onChange={(e) => setOrderFormData({ ...orderFormData, quantity: e.target.value })} />
                    <InputField label="Additional Notes" id="order-message" type="textarea" placeholder="Any special requirements..." value={orderFormData.message} onChange={(e) => setOrderFormData({ ...orderFormData, message: e.target.value })} />
                    
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
                        ) : "Send Order Request"}
                    </button>
                </form>
            </Modal>
        </>
    )
}
