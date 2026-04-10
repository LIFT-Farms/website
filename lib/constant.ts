
export interface NavLink {
    path: string;
    label: string;
}

export const DEFAULT_NAV_LINKS: NavLink[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/investments', label: 'Investments' },
    { path: '/roadmap', label: 'Roadmap' },
]

export const DEFAULT_CTA = {
    path: '/contact',
    label: 'Contact Us'
}
