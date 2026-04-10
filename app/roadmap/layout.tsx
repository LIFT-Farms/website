import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';

// Roadmap renders its own Navigation inside the page component
export default function RoadmapLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    );
}
