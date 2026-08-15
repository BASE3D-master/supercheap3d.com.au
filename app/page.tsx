const projects = [
  { src: "/portfolio/collaroy.jpg", title: "Modern coastal residence", place: "Collaroy Plateau, NSW", type: "Exterior visualisation" },
  { src: "/portfolio/box-hill-living.jpg", title: "Living, dining & kitchen", place: "Box Hill, NSW", type: "Interior visualisation" },
  { src: "/portfolio/cammeray.jpg", title: "Harbour view apartment", place: "Cammeray, NSW", type: "Property marketing CGI" },
  { src: "/portfolio/casa-sol.jpg", title: "Casa Sol", place: "Marsden Park, NSW", type: "Facade rendering" },
  { src: "/portfolio/murrays-beach.jpg", title: "Lakeside residence", place: "Murrays Beach, NSW", type: "Interior visualisation" },
  { src: "/portfolio/grevillea.jpg", title: "Heritage-style home", place: "Swan View, WA", type: "Exterior visualisation" },
];

const services = [
  ["01", "Residential 3D renders", "Photorealistic facades, streetscapes and interiors that help builders sell selections and clients approve with confidence.", "/services/residential-3d-rendering"],
  ["02", "Commercial visualisation", "Accurate imagery for industrial, retail, office, education and mixed-use projects—from stakeholder review to launch.", "/services/commercial-3d-rendering"],
  ["03", "Photomontage renders", "Proposed architecture placed into real site photography for planning, design review, stakeholder communication and marketing.", "/services/photomontage-rendering"],
  ["04", "Marketing floor plans", "Clear 2D and furnished 3D floor plans that turn technical drawings into buyer-friendly property marketing assets.", "/services/marketing-floor-plans"],
  ["05", "Architectural animation", "Cinematic walkthroughs, fly-throughs and project films that reveal space, sequence, light and lifestyle.", "/services/architectural-animation"],
  ["06", "Property marketing CGI", "Campaign-ready exterior, interior, aerial and streetscape imagery created for off-the-plan property sales.", "/services/property-marketing-cgi"],
];

const renderTypes = [
  ["Facade renders", "Builder-ready home elevations with materials, landscaping and presentation lighting.", "/services/residential-3d-rendering"],
  ["Streetscape renders", "Multi-residential street scenes that communicate scale, repetition and neighbourhood character.", "/services/residential-3d-rendering"],
  ["Living · kitchen · dining", "Open-plan interiors with detailed joinery, furniture, fixtures and material selections.", "/services/residential-3d-rendering"],
  ["Alfresco & backyard", "Indoor-outdoor living, pools, landscape and entertaining spaces shown as one experience.", "/services/residential-3d-rendering"],
  ["Industrial visualisation", "Warehouses, logistics facilities and commercial sites presented for approvals and investment.", "/services/commercial-3d-rendering"],
  ["Office fit-out renders", "Workplaces, reception areas and shared spaces visualised for leasing and stakeholder sign-off.", "/services/commercial-3d-rendering"],
  ["Retail & hospitality", "Customer-facing interiors that communicate atmosphere, branding and operational layout.", "/services/commercial-3d-rendering"],
  ["Education & childcare", "Learning environments, play areas and landscape shown with clear scale and human context.", "/services/commercial-3d-rendering"],
  ["3D site & master plans", "Bird’s-eye views that explain buildings, roads, landscape, lots and amenity.", "/services/marketing-floor-plans"],
  ["Colour concepts", "Visual comparisons of facade palettes, finishes and material combinations before commitment.", "/services/residential-3d-rendering"],
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Supercheap3D home"><span>supercheap</span><b>3D</b></a>
        <nav aria-label="Main navigation">
          <a href="#work">Portfolio</a><a href="#services">Services</a><a href="#process">Process</a><a href="#about">Why us</a>
        </nav>
        <a className="nav-cta" href="#quote">Upload plans <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Photorealistic modern Australian home architectural rendering" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Architectural visualisation studio · Australia wide</p>
          <h1>See the project.<br /><em>Before it exists.</em></h1>
          <p className="hero-copy">Photorealistic 3D renders for builders, architects and property developers—crafted for approvals, presentations and sales.</p>
          <div className="hero-actions"><a className="button primary" href="#quote">Upload plans for pricing <span>↗</span></a><a className="text-link light" href="#work">View selected work <span>↓</span></a></div>
        </div>
        <div className="hero-proof"><div><strong>Since 2008</strong><span>Australian visualisation studio</span></div><div><strong>5-day</strong><span>Typical first proof*</span></div><div><strong>2 rounds</strong><span>Revisions included*</span></div></div>
      </section>

      <section className="intro section" id="about">
        <p className="eyebrow">Clarity creates confidence</p>
        <div className="intro-grid"><h2>Designed to move<br />projects <em>forward.</em></h2><div><p>We turn architectural drawings into precise, persuasive imagery. Every material, light source and landscape detail is considered—so decision-makers understand the design and buyers can imagine the life inside it.</p><a className="text-link" href="#services">Explore our expertise <span>→</span></a></div></div>
      </section>

      <section className="portfolio section" id="work">
        <div className="section-head"><div><p className="eyebrow">Selected work</p><h2>Built in pixels.<br /><em>Believed in reality.</em></h2></div><p>A selection of residential and property visualisation projects delivered for clients across Australia.</p></div>
        <div className="project-grid">{projects.map((project, i) => <article className={i === 0 || i === 3 ? "project wide" : "project"} key={project.src}><div className="project-image"><img src={project.src} alt={`${project.title} 3D architectural render in ${project.place}`} loading={i > 1 ? "lazy" : "eager"} /><span className="project-arrow">↗</span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.place}</p></div><span>{project.type}</span></div></article>)}</div>
      </section>

      <section className="services section" id="services">
        <div className="section-head inverse"><div><p className="eyebrow light">What we visualise</p><h2>One studio.<br /><em>Every angle.</em></h2></div><p>From a single facade to a multi-stage development campaign, our team scales to suit your brief.</p></div>
        <div className="service-list">{services.map(([n, title, copy, href]) => <a className="service-row" href={href} key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></a>)}</div>
      </section>

      <section className="format-showcase section" aria-labelledby="visual-formats-title">
        <div className="section-head"><div><p className="eyebrow">More ways to sell the vision</p><h2 id="visual-formats-title">Every format.<br /><em>One clear story.</em></h2></div><p>Choose still images, site-accurate photomontage, buyer-friendly plans or motion—or combine them into one coordinated property campaign.</p></div>
        <div className="format-grid">
          <a className="format-card montage" href="/services/photomontage-rendering"><div className="montage-stack"><img src="/portfolio/casa-sol.jpg" alt="Residential facade photomontage rendering"/><img src="/portfolio/grevillea.jpg" alt="Australian home exterior visualisation"/><img src="/portfolio/cammeray.jpg" alt="Property development marketing CGI"/></div><div><span>Site + CGI</span><h3>Photomontage renders</h3><p>Show a proposed building in its real-world streetscape, landscape or aerial context.</p></div></a>
          <a className="format-card plan" href="/services/marketing-floor-plans"><div className="plan-preview"><img src="/portfolio/floorplan-marketing.png" alt="Furnished 3D marketing floor plan for an Australian home"/></div><div><span>2D + 3D</span><h3>Marketing floor plans</h3><p>Help buyers understand room relationships, circulation, scale and furnishing at a glance.</p></div></a>
          <a className="format-card motion" href="/services/architectural-animation"><div className="motion-preview"><img src="/portfolio/collaroy.jpg" alt="Architectural animation frame of a contemporary Australian home"/><i aria-hidden="true">▶</i><div className="motion-line"/></div><div><span>Walkthrough + fly-through</span><h3>Architectural animation</h3><p>Turn designs into cinematic journeys for launches, presentations and digital campaigns.</p></div></a>
        </div>
      </section>

      <section className="render-library section" aria-labelledby="render-library-title">
        <div className="library-intro"><p className="eyebrow light">3D content library</p><h2 id="render-library-title">From one room<br/>to a <em>whole precinct.</em></h2><p>Supercheap3D produces specialist architectural content for every stage of residential and commercial property—from design development and council communication to investor presentations and off-the-plan sales.</p></div>
        <div className="library-grid">{renderTypes.map(([title,copy,href],i)=><a href={href} key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Explore ↗</b></a>)}</div>
      </section>

      <section className="proof-band" aria-label="Supercheap3D production details"><div><strong>4000 px</strong><span>Standard high-quality image width*</span></div><div><strong>5–7 days</strong><span>Typical still-render turnaround*</span></div><div><strong>12–20 days</strong><span>Typical animation delivery*</span></div><div><strong>Australia wide</strong><span>Remote project collaboration</span></div></section>

      <section className="process section" id="process">
        <p className="eyebrow">A simple, proven process</p><h2>From plans to<br /><em>photoreal.</em></h2>
        <div className="steps"><article><span>01</span><h3>Send your plans</h3><p>Upload drawings, finishes and references. We review the scope and provide clear project pricing.</p></article><article><span>02</span><h3>We build the scene</h3><p>Our artists model your design, apply specified materials and compose the lighting, landscape and camera.</p></article><article><span>03</span><h3>Review & refine</h3><p>Receive your first proof, add consolidated feedback and approve the final high-resolution imagery.</p></article></div>
      </section>

      <section className="quote" id="quote">
        <div className="quote-copy"><p className="eyebrow light">Start your project</p><h2>Have plans?<br /><em>Let’s price them.</em></h2><p>Send your drawings and a short brief. Our studio will review the scope and come back with tailored pricing.</p><div className="contact"><a href="tel:1300863989">1300 863 989</a><a href="mailto:studio@supercheap3d.com.au">studio@supercheap3d.com.au</a></div></div>
        <div className="quote-form upload-card">
          <p className="upload-kicker">Ready when your drawings are</p>
          <h3>Upload your project files</h3>
          <p>Use Supercheap3D’s secure quote form to send plans, elevations, finishes and reference imagery directly to the studio.</p>
          <div className="dropzone"><span className="upload-icon">↑</span><strong>Plans, drawings & project brief</strong><small>PDF, DWG, DXF, ZIP, JPG or PNG · up to 30 files</small></div>
          <a className="button submit" href="https://supercheap3d.com.au/3d-render-page/">Open plan upload & request pricing <span>↗</span></a>
          <small className="privacy">Your plans are treated as confidential and used only to assess your quote.</small>
        </div>
      </section>

      <footer><div className="brand footer-brand"><span>supercheap</span><b>3D</b></div><p>High-quality architectural visualisation.<br />Made accessible, Australia wide.</p><div><a href="#work">Portfolio</a><a href="/services/photomontage-rendering">Photomontage</a><a href="/services/marketing-floor-plans">Floor plans</a><a href="/services/architectural-animation">Animation</a><a href="#quote">Request pricing</a></div><div><a href="https://www.instagram.com/supercheap3d/">Instagram</a><a href="https://www.facebook.com/supercheap3d">Facebook</a><a href="https://www.youtube.com/channel/UCQqd_yuIPyBUynmoeg1lMtg">YouTube</a></div><small>© 2026 Supercheap3D. All rights reserved.</small></footer>
    </main>
  );
}
