"use client";

import { useState } from "react";

const uploadSlots = [1, 2, 3, 4, 5];

export default function ProjectQuoteForm() {
  const [fileNames, setFileNames] = useState<Record<number, string>>({});
  const [visibleSlots, setVisibleSlots] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      className="quote-form upload-card project-enquiry-form"
      action="https://formsubmit.co/super3dau@supercheap3d.com.au"
      method="POST"
      encType="multipart/form-data"
      target="project-enquiry-response"
      onSubmit={() => setIsSubmitting(true)}
    >
      <input type="hidden" name="_subject" value="New supercheap3D project enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://supercheap3d.com.au/thank-you" />
      <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />

      <p className="upload-kicker">Tell us about your project</p>
      <h3>Request project pricing</h3>
      <div className="form-row">
        <label>Name
          <input name="Name" type="text" autoComplete="name" required />
        </label>
        <label>Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>Mobile
        <input name="Mobile" type="tel" autoComplete="tel" inputMode="tel" required />
      </label>
      <label>3D required
        <textarea name="3D required" rows={4} placeholder="Tell us what you need visualised in a sentence or two." required />
      </label>
      <fieldset className="attachment-fieldset">
        <legend>Upload plans</legend>
        <p>Select your main plan first, then add any supporting drawings or reference files.</p>
        <div className="attachment-list">
          {uploadSlots.slice(0, visibleSlots).map((slot) => <label className={`attachment-slot${slot === 1 ? " primary-attachment" : ""}`} key={slot}>
            <input
              name={`attachment-${slot}`}
              type="file"
              required={slot === 1}
              accept=".pdf,.dwg,.dxf,.zip,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png,application/zip"
              onChange={(event) => {
                const selectedFileName = event.currentTarget.files?.[0]?.name ?? "";
                setFileNames((current) => ({...current, [slot]: selectedFileName}));
              }}
            />
            <span className="attachment-icon" aria-hidden="true">{fileNames[slot] ? "✓" : "↑"}</span>
            <span className="attachment-copy">
              <strong>{fileNames[slot] || (slot === 1 ? "Choose your main plan" : `Choose attachment ${slot}`)}</strong>
              <small>{fileNames[slot] ? "Click to replace this file" : slot === 1 ? "Required · click to browse" : "Optional · click to browse"}</small>
            </span>
          </label>)}
        </div>
        <div className="attachment-actions">
          {visibleSlots < uploadSlots.length && fileNames[visibleSlots] && <button type="button" className="add-attachment" onClick={() => setVisibleSlots((count) => Math.min(count + 1, uploadSlots.length))}>+ Add another file</button>}
          <small>PDF, DWG, DXF, ZIP, JPG or PNG · 10 MB combined total</small>
        </div>
      </fieldset>
      <button className="button submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending plans…" : "Send plans for pricing"} <span>↗</span></button>
      <small className="privacy">Your plans are treated as confidential and used only to assess your project.</small>
      <iframe
        hidden
        className="submission-frame"
        name="project-enquiry-response"
        title="Project enquiry submission response"
        onLoad={() => {
          if (isSubmitting) window.location.assign("/thank-you");
        }}
      />
    </form>
  );
}
