import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Products',
    description: 'Premium garri, rice, maize, fufu, pepper and flour from our sustainable farms in Sierra Leone. Bulk orders for distributors, supermarkets and caterers.',
    path: '/products',
});

export default function ProductsLayout({ children }: { children: ReactNode }) {
    return children;
}
