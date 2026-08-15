import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Supercheap3D Architectural Visualisation Australia",
  description: "Photorealistic 3D rendering and architectural visualisation for Australian builders, architects and property developers. Upload plans for project pricing.",
  keywords: ["3D rendering services Australia", "architectural visualisation Australia", "architectural rendering", "property development renders", "3D house rendering", "commercial 3D rendering"],
  openGraph: { title: "Supercheap3D | Architectural Visualisation Australia", description: "Photorealistic 3D renders for approvals, presentations and property marketing.", type: "website", locale: "en_AU" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
