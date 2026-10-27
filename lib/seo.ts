import type { Metadata } from "next";

export const SITE_URL = "https://farm.liftgroup.online";
export const SITE_NAME = "LiFT Farms";

const SHARE_IMAGE = {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "LiFT Farms — Sustainable Innovation, From Soil to Soul",
};

export function pageMetadata({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}): Metadata {
    const fullTitle = `${title} | ${SITE_NAME}`;

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            title: fullTitle,
            description,
            url: path,
            siteName: SITE_NAME,
            images: [SHARE_IMAGE],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [SHARE_IMAGE],
        },
    };
}
