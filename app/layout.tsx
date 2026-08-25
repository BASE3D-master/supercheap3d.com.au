import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://supercheap3d.com.au"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  title: { default: "supercheap3D Architectural Visualisation Australia", template: "%s | supercheap3D" },
  description: "Photorealistic 3D rendering and architectural visualisation for Australian builders, architects and property developers. Upload plans for project pricing.",
  keywords: ["3D rendering services Australia", "architectural visualisation Australia", "architectural rendering", "property development renders", "3D house rendering", "commercial 3D rendering"],
  alternates: { canonical: "/", languages: { "en-AU": "/" } },
  authors: [{ name: "supercheap3D", url: "https://supercheap3d.com.au" }],
  creator: "supercheap3D",
  publisher: "supercheap3D",
  category: "Architectural visualisation",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "supercheap3D | Architectural Visualisation Australia", description: "Photorealistic 3D renders for approvals, presentations and property marketing.", url: "/", siteName: "supercheap3D", type: "website", locale: "en_AU", images: [{ url: "/portfolio/horizons-drive-coolum-beach-modern-home-exterior-3d-render.webp", width: 2048, height: 1536, alt: "Modern home exterior 3D render in Coolum Beach by supercheap3D" }] },
  twitter: { card: "summary_large_image", title: "supercheap3D | Architectural Visualisation Australia", description: "Photorealistic architectural rendering for Australian builders, architects and developers.", images: ["/portfolio/horizons-drive-coolum-beach-modern-home-exterior-3d-render.webp"] },
  other: { "geo.region": "AU", "geo.placename": "Australia" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
