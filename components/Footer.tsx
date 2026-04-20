'use client'

import Link from 'next/link'
import { AtSign, Globe, Medal, SendHorizontal } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-4">
                <div className="relative">
                    <Link href='/' className="text-primary-medium font-medium text-[1.85rem] leading-[2.25rem]">LiFT</Link>
                    <p className="font-inter text-primary-lighter-transparent-2 text-[0.923rem] leading-[1.385rem] font-light mt-5">Rooted in tradition, powered by innovation. We are building the agricultural future of Africa.</p>

                    <ul className="flex items-center gap-x-2 mt-5 text-primary-lighter-transparent-2/70 space-x-4">
                        <li>
                            <Medal />
                        </li>
                        <li>
                            <AtSign />
                        </li>
                        <li>
                            <Globe />
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-primary-medium text-[0.75rem] font-inter leading-[1rem] tracking-[-0.015rem] uppercase">Quick Links</h4>
                    <ul className="font-inter font-light text-[0.875rem] leading-[1.45rem] space-y-3 text-primary-lighter-transparent-2 mt-5">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li>
                            <Link href='/products'>Products</Link>
                        </li>
                        <li>
                            <Link href='/gallery'>Gallery</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-primary-medium text-[0.75rem] font-inter leading-[1rem] tracking-[-0.015rem] uppercase">Support</h4>
                    <ul className="font-inter font-light text-[0.875rem] leading-[1.45rem] space-y-3 text-primary-lighter-transparent-2 mt-5">
                        <li>
                            <Link href='/investments'>Partnership</Link>
                        </li>
                        <li>
                            <Link href='https://wa.me/+23278362263?text=hello' target='_blank'>Whatsapp Support</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Contact Info</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="bg-[#E7E5E4] p-5 py-8 rounded-lg">
                        <div className='flex flex-col gap-y-3'>
                            <h4 className="text-primary-medium font-medium text-[0.75rem] font-inter leading-[1rem] tracking-[-0.015rem] uppercase">Newsletter</h4>
                            <p className="font-inter font-light text-[0.875rem] leading-[1.45rem] text-primary-lighter-transparent-2">Stay updated with our harvest and impact stories.</p>
                        </div>
                        <div className="relative mt-5">
                            <input type="text" placeholder="Email address" className="font-inter font-light text-[0.875rem] leading-[1.45rem] text-primary-lighter-transparent-2 bg-white placeholder:text-[#6B7280] h-[3rem] w-full px-4 rounded-lg outline-none ring-none pr-10" />
                            <button type="submit" className="absolute top-1/2 translate-y-[-50%] -right-2 text-primary-dark px-4 cursor-pointer">
                                <SendHorizontal className="w-[1.2rem] h-[1.2rem]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
