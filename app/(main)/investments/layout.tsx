import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Investments',
    description: 'Invest in high-growth sustainable agriculture in Sierra Leone, from regenerative land acquisition to farm operations, with Lift Farms.',
    path: '/investments',
});

export default function InvestmentsLayout({ children }: { children: ReactNode }) {
    return children;
}
