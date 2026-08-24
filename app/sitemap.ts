import type { MetadataRoute } from "next";
export const dynamic = "force-static";
const slugs=["residential-3d-rendering","commercial-3d-rendering","photomontage-rendering","marketing-floor-plans","property-marketing-cgi","streetscape-renders","living-kitchen-dining-renders","alfresco-backyard-renders","industrial-visualisation","office-fit-out-renders","retail-hospitality-renders","education-childcare-renders","3d-site-master-plans","colour-concept-renders"];
export default function sitemap():MetadataRoute.Sitemap{ const base="https://supercheap3d.com.au"; return [{url:base,changeFrequency:"monthly",priority:1},...slugs.map(slug=>({url:`${base}/services/${slug}`,changeFrequency:"monthly" as const,priority:.8}))]; }
