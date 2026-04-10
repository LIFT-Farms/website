'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { DEFAULT_NAV_LINKS, DEFAULT_CTA } from '@/lib/constant'
import type { NavLink } from '@/lib/constant'

interface NavigationProps {
    logo?: string;
    links?: NavLink[];
    cta?: {
        label: string;
        path: string;
    },
    imageClassName?: string
}

export const Navigation = ({ 
    logo = '/assets/logo.webp', 
    links = DEFAULT_NAV_LINKS, 
    cta = DEFAULT_CTA,
    imageClassName
}: NavigationProps) => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const nav_links = links.map(link => ({
        ...link,
        active: pathname === link.path
    }))

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        if (path.startsWith('#')) {
            const id = path.substring(1)
            const element = document.getElementById(id)
            if (element) {
                e.preventDefault()
                element.scrollIntoView({ behavior: 'smooth' })
                window.history.pushState({}, '', path)
            }
        }
        setMenuOpen(false)
    }

    return (
        <nav className="w-full relative bg-primary z-50 sticky top-0 left-0">
            {/* Main bar */}
            <div className="h-[4.5625rem] px-4 md:px-[2rem] md:pr-[3.5rem] flex items-center justify-between">
                <div className={`relative overflow-hidden h-full ${imageClassName}`}>
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        <Image src={logo} alt="Lift Logo" width={152} height={69} className="h-[4.2827rem] w-[9.4922rem] object-cover mt-[0.8rem]" />
                    </Link>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:block">
                    <ul className='flex gap-[1.5rem] text-[0.8rem]'>
                        {nav_links.map((link) => (
                            <li key={link.path} className={`${link.active ? 'text-tertiary border-b border-tertiary' : 'text-white hover:text-tertiary hover:border-b hover:border-tertiary'} duration-300 transition-all text-[13.26px]`}>
                                <Link href={link.path} onClick={(e) => handleNavClick(e, link.path)}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Link href={cta.path} className='block text-white bg-primary-dark px-[31.9px] py-[10.63px] rounded-[5.32px] font-inter text-[13.61px] leading-[100%] hover:scale-[1.05] transition-all duration-300 font-semibold'>{cta.label}</Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-primary z-50 pb-6 px-6 shadow-lg">
                    <ul className='flex flex-col gap-5 pt-4'>
                        {nav_links.map((link) => (
                            <li key={link.path} className={`${link.active ? 'text-tertiary border-b border-tertiary w-fit' : 'text-white'} text-[1rem]`}>
                                <Link href={link.path} onClick={(e) => handleNavClick(e, link.path)}>{link.label}</Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                href={cta.path} 
                                onClick={() => setMenuOpen(false)}
                                className='inline-block text-white bg-primary-dark px-6 py-3 rounded-[5.32px] font-inter text-[0.9rem] font-semibold'
                            >
                                {cta.label}
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
