'use client'

import { motion, type Variants } from 'motion/react';

interface IStatCard {
    value: string;
    label: string;
    className?: string;
    variants?: Variants;
    valueClassName?: string;
    labelClassName?: string;
};

export const StatCard = ({ value, label, className, valueClassName, labelClassName, variants }: IStatCard) => {
    return (
        <motion.div 
            variants={variants}
            className={`bg-background-light rounded-[0.95rem] font-inter p-6 sm:p-[1.875rem] sm:px-[2.1875rem] w-full max-w-[20.5rem] ${className}`}
        >
            <span className={`block text-tertiary-dark font-medium leading-tight sm:leading-[3.125rem] text-[2.25rem] sm:text-[2.8125rem] ${valueClassName}`}>{value}</span>
            <span className={`block text-tertiary-dark font-medium leading-snug sm:leading-[1.5625rem] tracking-[0.11rem] text-[0.875rem] sm:text-[0.9375rem] md:text-[1.1rem] uppercase ${labelClassName}`}>{label}</span>
        </motion.div>
    )
}
