'use client'

import { motion, type Variants } from 'motion/react';
import { Badge } from '@/components/ui/badge';

interface IProductCard {
    image: { src: string; alt: string };
    title: string;
    description?: string;
    badge?: string;
    className?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    variants?: Variants;
}

export const ProductCard = ({
    image,
    title,
    description,
    badge,
    className = '',
    contentClassName = '',
    titleClassName = 'text-[1.5rem] leading-[1.5rem]',
    descriptionClassName = 'w-full',
    variants,
}: IProductCard) => {
    return (
        <motion.div 
            className={`h-[22rem] rounded-[1.25rem] relative flex overflow-hidden group ${className}`} 
            variants={variants}
        >
            <motion.img 
                src={image.src} 
                alt={image.alt} 
                className='w-full h-full absolute rounded-[1.25rem] object-cover transition-transform duration-700 group-hover:scale-110' 
            />
            <div className={`z-20 relative self-end p-8 flex flex-col gap-y-2 w-full rounded-[1.25rem] ${contentClassName}`}>
                <h4 className={`font-manrope font-bolder text-white ${titleClassName}`}>
                    {title}
                </h4>
                {description && (
                    <span className={`block text-white font-inter font-light text-[1rem] leading-[1.5rem] ${descriptionClassName}`}>
                        {description}
                    </span>
                )}
                {badge && (
                    <Badge className='bg-tertiary leading-[1rem] tracking-[0.075rem] font-medium font-inter py-4 w-fit mt-2'>
                        {badge}
                    </Badge>
                )}
            </div>
            <div className='bg-primary-gradient w-full h-full absolute rounded-[1.25rem]'></div>
        </motion.div>
    );
};
