import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Gallery',
    description: 'A visual journey through sustainable African agriculture at Lift Farms — from rich soils to vibrant community harvests in Sierra Leone.',
    path: '/gallery',
});

export default function GalleryLayout({ children }: { children: ReactNode }) {
    return children;
}
