'use client'

import { motion, type Variants } from 'motion/react';

interface ISystemCardProps {
    icon: string;
    title: string;
    description: string;
    list: string[];
    variants?: Variants;
}

export const SystemCard = ({ icon, title, description, list, variants }: ISystemCardProps) => {
    return (
        <motion.div 
            variants={variants}
            className='h-[498.96px] rounded-[20.12px] p-[20px] py-[40px] bg-background flex flex-col justify-between'
        >
            <div className='w-[80.47px] h-[80.47px] rounded-[15.09px] bg-primary-lighter-transparent flex items-center justify-center'>
                <img src={icon} alt='Leaf Icon' className='w-[37px] h-[18px]' />
            </div>
            <div className='mt-3'>
                <h4 className='font-manrope font-bolder text-[30.18px] leading-[40.5px] text-primary-dark'>{title}</h4>
                <p className='font-inter font-light text-[17.6px] leading-[26.61px] text-primary-dark-transparent mt-3'>{description}</p>
            </div>
            <ul className='mt-10 space-y-3 text-tertiary-dark list-disc font-inter text-[15.09px] pl-4'>
                {list.map((item, index) => (
                    <li key={index} className='font-inter leading-[20.12px] font-medium'>{item}</li>
                ))}
            </ul>
        </motion.div>
    )
}
