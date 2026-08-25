"use client";

import { FormEvent, useState } from "react";

const uploadSlots = [1, 2, 3, 4, 5];
const maxCombinedUploadBytes = 25 * 1024 * 1024;

function createPortId() {
  const uniquePart = typeof crypto.randomUUID === "function"
    ? crypto.randomUUID().split("-")[0].toUpperCase()
    : Math.random().toString(36).slice(2, 10).toUpperCase();
  return `SC3D-${Date.now().toString(36).toUpperCase()}-${uniquePart}`;
}

async function resolvePublicIp() {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4000);
  try {
    const response = await fetch("https://api.ipify.org?format=json", {
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) throw new Error("IP lookup failed");
    const data = await response.json() as { ip?: string };
    return data.ip?.trim() || "Unavailable";
  } catch {
    return "Unavailable — recorded in Forminit submission metadata";
  } finally {
    window.clearTimeout(timeout);
  }
}

export default function ProjectQuoteForm() {
  const [fileNames, setFileNames] = useState<Record<number, string>>({});
  const [visibleSlots, setVisibleSlots] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    const form = event.currentTarget;
    const files = Array.from(form.querySelectorAll<HTMLInputElement>('input[type="file"]'))
      .flatMap((input) => Array.from(input.files ?? []));
    const totalUploadBytes = files.reduce((total, file) => total + file.size, 0);

    if (totalUploadBytes > maxCombinedUploadBytes) {
      setSubmissionError(`Your selected files total ${(totalUploadBytes / 1024 / 1024).toFixed(1)} MB. Please keep the combined upload to 25 MB or less.`);
      return;
    }

    setSubmissionError("");
    setIsSubmitting(true);
    try {
      const formData = new FormData(form);
      formData.append("fi-text-portId", createPortId());
      formData.append("fi-text-ipAddress", await resolvePublicIp());
      const response = await fetch("https://forminit.com/f/y5ewa2cnm5i", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json().catch(() => null) as {
        error?: { message?: string } | string;
        message?: string;
      } | null;
      if (!response.ok || result?.error) {
        const errorMessage = typeof result?.error === "string"
          ? result.error
          : result?.error?.message || result?.message;
        throw new Error(errorMessage || "We couldn't send your enquiry. Please try again.");
      }
      window.location.assign("/thank-you");
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "We couldn't send your enquiry. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="quote-form upload-card project-enquiry-form"
      action="https://forminit.com/f/y5ewa2cnm5i"
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <p className="upload-kicker">Tell us about your project</p>
      <h3>Request project pricing</h3>
      <div className="form-row">
        <label>Name
          <input name="fi-sender-fullName" type="text" autoComplete="name" required />
        </label>
        <label>Email
          <input name="fi-sender-email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>Mobile
        <input name="fi-text-mobile" type="tel" autoComplete="tel" inputMode="tel" required />
      </label>
      <label>3D required
        <textarea name="fi-text-projectRequirements" rows={4} placeholder="Tell us what you need visualised in a sentence or two." required />
      </label>
      <fieldset className="attachment-fieldset">
        <legend>Upload plans</legend>
        <p>Select your main plan first, then add any supporting drawings or reference files.</p>
        <div className="attachment-list">
          {uploadSlots.slice(0, visibleSlots).map((slot) => <label className={`attachment-slot${slot === 1 ? " primary-attachment" : ""}`} key={slot}>
            <input
              name={`fi-file-attachment${slot}`}
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
          <small>PDF, DWG, DXF, ZIP, JPG or PNG · 25 MB combined total</small>
        </div>
      </fieldset>
      {submissionError && <p className="form-error" role="alert">{submissionError}</p>}
      <button className="button submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending plans…" : "Send plans for pricing"} <span>↗</span></button>
      <small className="privacy">Your plans ar treated as confidential and used only to assess your project. Each enquiry is recorded with a unique submission reference and IP address for security and follow-up.</small>
    </form>
  );
}
