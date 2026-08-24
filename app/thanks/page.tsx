import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | supercheap3D",
  description: "Your supercheap3D project enquiry and plans have been received.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return <main className="thanks-page">
    <header className="nav-wrap inner-nav thanks-nav"><a className="brand" href="/" aria-label="supercheap3D home"><span>supercheap</span><b>3D</b></a><nav aria-label="Main navigation"><a href="/#work">Portfolio</a><a href="/#services">Services</a><a href="/#process">Process</a><a href="/#about">Why us</a></nav><a className="nav-cta" href="/">Back to site <span>↗</span></a></header>
    <section className="thanks-hero">
      <div className="thanks-copy">
        <p className="eyebrow light">Project enquiry received</p>
        <h1>Thanks.<br/><em>We have your plans.</em></h1>
        <p>Our studio will review your brief and attachments, then respond with the next steps and tailored pricing.</p>
        <a className="button primary" href="/">Return to supercheap3D <span>↗</span></a>
      </div>
      <aside className="thanks-next" aria-label="What happens next">
        <p className="eyebrow">What happens next</p>
        <ol>
          <li><span>01</span><div><strong>Scope review</strong><small>We check your plans, brief and required views.</small></div></li>
          <li><span>02</span><div><strong>Tailored pricing</strong><small>We prepare pricing around the actual project scope.</small></div></li>
          <li><span>03</span><div><strong>Project start</strong><small>Once approved, our artists begin building the scene.</small></div></li>
        </ol>
        <p className="thanks-contact">Need to add something? <a href="mailto:super3dau@supercheap3d.com.au">Email the studio ↗</a></p>
      </aside>
    </section>
    <footer className="thanks-footer"><div className="brand footer-brand"><span>supercheap</span><b>3D</b></div><p>High-quality architectural visualisation.<br/>Made accessible, Australia wide.</p><small>© 2026 supercheap3D. All rights reserved.</small></footer>
  </main>;
}
