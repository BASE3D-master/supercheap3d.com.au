import type { MetadataRoute } from "next";
const slugs=["residential-3d-rendering","commercial-3d-rendering","photomontage-rendering","marketing-floor-plans","architectural-animation","property-marketing-cgi"];
export default function sitemap():MetadataRoute.Sitemap{ const base="https://supercheap3d.com.au"; return [{url:base,changeFrequency:"monthly",priority:1},...slugs.map(slug=>({url:`${base}/services/${slug}`,changeFrequency:"monthly" as const,priority:.8}))]; }
