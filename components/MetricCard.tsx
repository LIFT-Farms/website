'use client'

import { motion, type Variants } from 'motion/react';

interface IMetricCardProps {
    icon: string;
    title: string;
    description: string;
    variants?: Variants;
}

export const MetricCard = ({ icon, title, description, variants }: IMetricCardProps) => {
    return (
        <motion.li 
            variants={variants}
            className='flex items-center gap-x-3 font-inter'
        >
            <img src={icon} alt={`${title} Icon`} className='h-[50px] w-[50px] object-contain' />
            <div>
                <h4 className='font-medium text-[1.25rem] leading-[1.75rem] text-white'>{title}</h4>
                <p className='font-light text-[0.95rem] leading-[1.5rem] text-white/80 mt-1'>{description}</p>
            </div>
        </motion.li>
    )
}
