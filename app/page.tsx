import SelectedWorks, { projects } from "./components/SelectedWorks";
import ProjectQuoteForm from "./components/ProjectQuoteForm";

const services = [
  ["01", "Residential 3D renders", "Photorealistic facades, streetscapes and interiors that help builders sell selections and clients approve with confidence.", "/services/residential-3d-rendering"],
  ["02", "Commercial visualisation", "Accurate imagery for industrial, retail, office, education and mixed-use projects—from stakeholder review to launch.", "/services/commercial-3d-rendering"],
  ["03", "Photomontage renders", "Proposed architecture placed into real site photography for planning, design review, stakeholder communication and marketing.", "/services/photomontage-rendering"],
  ["04", "Marketing floor plans", "Clear 2D and furnished 3D floor plans that turn technical drawings into buyer-friendly property marketing assets.", "/services/marketing-floor-plans"],
  ["05", "Property marketing CGI", "Campaign-ready exterior, interior, aerial and streetscape imagery created for off-the-plan property sales.", "/services/property-marketing-cgi"],
];

const renderTypes = [
  ["Facade renders", "Builder-ready home elevations with materials, landscaping and presentation lighting.", "/services/facade-renders"],
  ["Streetscape renders", "Multi-residential street scenes that communicate scale, repetition and neighbourhood character.", "/services/streetscape-renders"],
  ["Living · kitchen · dining", "Open-plan interiors with detailed joinery, furniture, fixtures and material selections.", "/services/living-kitchen-dining-renders"],
  ["Alfresco & backyard", "Indoor-outdoor living, pools, landscape and entertaining spaces shown as one experience.", "/services/alfresco-backyard-renders"],
  ["Industrial visualisation", "Warehouses, logistics facilities and commercial sites presented for approvals and investment.", "/services/industrial-visualisation"],
  ["Office fit-out renders", "Workplaces, reception areas and shared spaces visualised for leasing and stakeholder sign-off.", "/services/office-fit-out-renders"],
  ["Retail & hospitality", "Customer-facing interiors that communicate atmosphere, branding and operational layout.", "/services/retail-hospitality-renders"],
  ["Education & childcare", "Learning environments, play areas and landscape shown with clear scale and human context.", "/services/education-childcare-renders"],
  ["3D site & master plans", "Bird’s-eye views that explain buildings, roads, landscape, lots and amenity.", "/services/3d-site-master-plans"],
  ["Colour concepts", "Visual comparisons of facade palettes, finishes and material combinations before commitment.", "/services/colour-concept-renders"],
];

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "supercheap3D",
    url: "https://supercheap3d.com.au",
    logo: "https://supercheap3d.com.au/portfolio/horizons-drive-coolum-beach-modern-home-exterior-3d-render.webp",
    description: "Architectural visualisation and photorealistic 3D rendering for Australian builders, architects, designers and property developers.",
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: ["Architectural visualisation", "Residential 3D rendering", "Commercial 3D rendering", "Marketing floor plans", "Architectural photomontage"],
    telephone: "+61 1300 863 989",
    email: "studio@supercheap3d.com.au",
    sameAs: ["https://www.instagram.com/supercheap3d/", "https://www.facebook.com/supercheap3d", "https://www.youtube.com/channel/UCQqd_yuIPyBUynmoeg1lMtg"]
  };
  const portfolioImageSchema = projects.map((project, index) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: project.title,
    caption: project.alt,
    description: project.description,
    contentUrl: `https://supercheap3d-australia.tony576226.chatgpt.site${project.src}`,
    encodingFormat: project.format,
    width: { "@type": "QuantitativeValue", value: project.width, unitText: "px" },
    height: { "@type": "QuantitativeValue", value: project.height, unitText: "px" },
    contentLocation: { "@type": "Place", name: project.place },
    representativeOfPage: index === 0,
    creditText: "supercheap3D",
    creator: { "@type": "Organization", name: "supercheap3D" },
    copyrightNotice: "supercheap3D",
    keywords: project.keywords
  }));

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioImageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="supercheap3D home"><span>supercheap</span><b>3D</b></a>
        <nav aria-label="Main navigation">
          <a href="#work">Portfolio</a><a href="#services">Services</a><a href="#process">Process</a><a href="#about">Why us</a>
        </nav>
        <a className="nav-cta" href="#quote">Upload plans <span className="designer-arrow" aria-hidden="true" /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Photorealistic modern Australian home architectural rendering" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Architectural visualisation studio · Australia wide</p>
          <h1>See the project.<br /><em>Before it exists.</em></h1>
          <p className="hero-copy">Photorealistic 3D renders for builders, architects and property developers—crafted for approvals, presentations and sales.</p>
          <div className="hero-actions"><a className="button primary" href="#quote">Upload plans for pricing <span className="designer-arrow" aria-hidden="true" /></a><a className="text-link light" href="#work">View selected work <span>↓</span></a></div>
        </div>
        <div className="hero-proof"><div><strong>Since 2008</strong><span>Australian visualisation studio</span></div><div><strong>5-day</strong><span>Typical first proof*</span></div><div><strong>2 rounds</strong><span>Revisions included*</span></div></div>
      </section>

      <section className="intro section" id="about">
        <p className="eyebrow">Clarity creates confidence</p>
        <div className="intro-grid"><h2>Designed to move<br />projects <em>forward.</em></h2><div><p>We turn architectural drawings into precise, persuasive imagery. Every material, light source and landscape detail is considered—so decision-makers understand the design and buyers can imagine the life inside it.</p><a className="text-link" href="#services">Explore our expertise <span>→</span></a></div></div>
      </section>

      <SelectedWorks />

      <section className="services section" id="services">
        <div className="section-head inverse"><div><p className="eyebrow light">What we visualise</p><h2>One studio.<br /><em>Every angle.</em></h2></div><p>From a single facade to a multi-stage development campaign, our team scales to suit your brief.</p></div>
        <div className="service-list">{services.map(([n, title, copy, href]) => <a className="service-row" href={href} key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b><span className="designer-arrow" aria-hidden="true" /></b></a>)}</div>
      </section>

      <section className="format-showcase section" aria-labelledby="visual-formats-title">
        <div className="section-head"><div><p className="eyebrow">More ways to sell the vision</p><h2 id="visual-formats-title">Every format.<br /><em>One clear story.</em></h2></div><p>Choose residential 3D renders, site-accurate photomontage or buyer-friendly plans—or combine them into one coordinated property campaign.</p></div>
        <div className="format-grid">
          <a className="format-card montage" href="/services/photomontage-rendering"><div className="montage-stack"><img src="/portfolio/anzac-parade-kingsford-apartments-photomontage.webp" alt="Architectural photomontage of apartments integrated into the Anzac Parade streetscape"/><img src="/portfolio/collaroy-plateau-house-3a-modern-facade-3d-render.webp" alt="Modern Australian residential exterior visualisation"/><img src="/portfolio/vera-apartments-queanbeyan-exterior-3d-render.webp" alt="Multi-residential property development marketing CGI"/></div><div><span>Site + CGI</span><h3>Photomontage renders</h3><p>Show a proposed building in its real-world streetscape, landscape or aerial context.</p></div></a>
          <a className="format-card plan" href="/services/marketing-floor-plans"><div className="plan-preview"><img src="/portfolio/floorplan-marketing.png" alt="Furnished 3D marketing floor plan for an Australian home"/></div><div><span>2D + 3D</span><h3>Marketing floor plans</h3><p>Help buyers understand room relationships, circulation, scale and furnishing at a glance.</p></div></a>
          <a className="format-card residential" href="/services/residential-3d-rendering"><div className="plan-preview"><img src="/portfolio/bonnin-street-reynella-open-plan-living-3d-render.webp" alt="Photorealistic residential 3D render of a light-filled open-plan living, dining and kitchen interior"/></div><div><span>Interior + exterior</span><h3>Residential 3D renders</h3><p>Bring complete homes and developments to life for design approvals, presentations and property marketing.</p></div></a>
        </div>
      </section>

      <section className="render-library section" aria-labelledby="render-library-title">
        <div className="library-intro"><p className="eyebrow light">3D content library</p><h2 id="render-library-title">From one room<br/>to a <em>whole precinct.</em></h2><p>supercheap3D produces specialist architectural content for every stage of residential and commercial property—from design development and council communication to investor presentations and off-the-plan sales.</p></div>
        <div className="library-grid">{renderTypes.map(([title,copy,href],i)=><a href={href} key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Explore <span className="designer-arrow" aria-hidden="true" /></b></a>)}</div>
      </section>

      <section className="proof-band" aria-label="supercheap3D production details"><div><strong>4000 - 20000 px</strong><span>Standard to Ultra High resolution</span></div><div><strong>4 - 7 days</strong><span>Typical still-render turnaround*</span></div><div><strong>6 - 15 days</strong><span>Typical animation delivery*</span></div><div><strong>Australia wide</strong><span>Remote project collaboration</span></div></section>

      <section className="process section" id="process">
        <p className="eyebrow">A simple, proven process</p><h2>From plans to<br /><em>photoreal.</em></h2>
        <div className="steps"><article><span>01</span><h3>Send your plans</h3><p>Upload drawings, finishes and references. We review the scope and provide clear project pricing.</p></article><article><span>02</span><h3>We build the scene</h3><p>Our artists model your design, apply specified materials and compose the lighting, landscape and camera.</p></article><article><span>03</span><h3>Review & refine</h3><p>Receive your first proof, add consolidated feedback and approve the final high-resolution imagery.</p></article></div>
      </section>

      <section className="quote" id="quote">
        <div className="quote-copy"><p className="eyebrow light">Start your project</p><h2 className="quote-heading">Have plans?<br /><em>Let’s price them.</em></h2><p>Send your drawings and a short brief. Our studio will review the scope and come back with tailored pricing.</p><div className="contact"><a href="tel:1300863989">1300 863 989</a><a href="mailto:studio@supercheap3d.com.au">studio@supercheap3d.com.au</a></div></div>
        <ProjectQuoteForm />
      </section>

      <footer><div className="brand footer-brand"><span>supercheap</span><b>3D</b></div><p>High-quality architectural visualisation.<br />Made accessible, Australia wide.</p><div><a href="#work">Portfolio</a><a href="/services/residential-3d-rendering">Residential renders</a><a href="/services/photomontage-rendering">Photomontage</a><a href="/services/marketing-floor-plans">Floor plans</a><a href="#quote">Request pricing</a></div><div><a href="https://www.instagram.com/supercheap3d/">Instagram</a><a href="https://www.facebook.com/supercheap3d">Facebook</a><a href="https://www.youtube.com/channel/UCQqd_yuIPyBUynmoeg1lMtg">YouTube</a></div><small>© 2026 supercheap3D. All rights reserved.</small></footer>
    </main>
  );
}
