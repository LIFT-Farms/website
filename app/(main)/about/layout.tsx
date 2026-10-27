import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'About Us',
    description: 'Lift Farms is a bridge between potential and prosperity, rooted in the rich soils of Sierra Leone — harvesting over 50 tons of organic produce annually.',
    path: '/about',
});

export default function AboutLayout({ children }: { children: ReactNode }) {
    return children;
}
