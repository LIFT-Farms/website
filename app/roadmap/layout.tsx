import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Roadmap',
    description: 'A multi-sector force for sustainable development in Sierra Leone — Lift Farms, Lift Learning Center and Lift Estates working as one ecosystem.',
    path: '/roadmap',
});

// Roadmap renders its own Navigation inside the page component
export default function RoadmapLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    );
}
