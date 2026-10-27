import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Contact Us',
    description: 'Get in touch with Lift Farms at 26 Magburaka Road, Makeni, Sierra Leone. Open to investors, partners and bulk buyers.',
    path: '/contact',
});

export default function ContactLayout({ children }: { children: ReactNode }) {
    return children;
}
