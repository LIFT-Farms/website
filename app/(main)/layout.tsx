import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    );
}
