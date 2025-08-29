# CV Report — Recommendations for `src/components/I-CV/cv.jsx`

Date: 2025-08-16

This document consolidates recommended changes to `cv.jsx` so the CV reflects the findings in the SKILLS_ASSESSMENTS reports and reads stronger to recruiters. Items are prioritized (High / Medium / Low) and include short rationale and implementation ideas.

---

## 1) Fix React/JSX issues & accessibility (High)
- Replace all `class=` attributes with `className`.
- Remove the styled anchor that wraps the entire page (`<A href="/content">`) — use semantic `<main>` as the page container and make individual links clickable instead.
- Remove duplicate IDs (e.g. `id="header"` used twice); use unique IDs or classes for styling.
- Add `rel="noopener noreferrer"` to every external anchor that uses `target="_blank"`.
- Use semantic elements: `<main>`, `<section>`, `<header>`, `<address>` for contact, and `<time>` for dates.

Rationale: fixes React warnings, improves keyboard navigation and SEO, and addresses basic accessibility requirements.

---

## 2) Move CV content to a config file and render via mapping (High)
- Create `src/config/cv.config.js` (or `.ts`) that exports structured data:
  - profile (string)
  - skills: array of { name, years, level, tags }
  - experience: array of { title, role, dates, bullets, tech }
  - education: array of { title, dates, notes }
  - projects: array of { name, summary, tech, link, metrics }
- Refactor `cv.jsx` to import that config and map over the arrays to render lists and sections.

Rationale: improves maintainability, allows reuse (PDF, print), easier updates and testing.

---

## 3) Rework the top summary to recruiter-ready phrasing (High)
- Replace long paragraphs with a 1-line headline and 3–4 impact-first bullets.
- Example headline: "Pawel Siwek — React Developer | Frontend Engineer"
- Example bullets:
  - "Built component-driven React apps with Redux and styled-components; deployed to Google Cloud."
  - "Back-end experience: Node.js, Express, MongoDB; familiar with REST and deployment scripts."
  - "Currently improving TypeScript, unit testing (React Testing Library) and CI/CD."

Rationale: recruiters scan quickly — concise, impact-first bullets perform better.

---

## 4) Highlight skills and levels visually (Medium)
- Group skills by category: Core, Tooling, Backend, Cloud, Design.
- Show a level next to each skill (Advanced / Intermediate / Learning) or a simple progress indicator.
- Optionally use small badges or a 3-column layout for scannability.

Rationale: aligns with skill-tiering in the assessments and makes strengths obvious at a glance.

---

## 5) Convert project entries into short case studies (Medium)
- For each project include:
  - One-line summary (what and why)
  - Your role & 2–3 achievements (bullets)
  - Tech stack
  - Outcome/metric if available (deployed, users, performance)
- Use language from the SKILLS_ASSESSMENTS project phrasing (copy/paste-ready).

Rationale: helps interview conversations and demonstrates measurable impact.

---

## 6) Add a recruiter-focused skills strip (Medium)
- Add a one-line skills strip near the top: e.g. "React · Redux · styled-components · Node.js · MongoDB · GCloud · Testing (RTL) · TypeScript (in progress) · CI/CD"
- Provide a small "Copy skills" control (optional) for convenience.

Rationale: makes it easy for recruiters to copy-paste your stack into ATS / messages.

---

## 7) Add PDF download and print styles (Medium)
- Add a "Download PDF" button that either links to a hosted PDF or triggers `window.print()`.
- Add `@media print` CSS to hide non-essential elements and force a single-column, high-contrast layout.

Rationale: many recruiters request a printable CV; print styles increase professionalism.

---

## 8) Add PropTypes / TypeScript + unit tests (Medium)
- Add PropTypes or convert component to TypeScript with interfaces for the CV data.
- Add React Testing Library tests for:
  - Contact details render correctly
  - External links include `rel` when `target="_blank"`
  - Skills list renders expected items/levels
  - Download/print link exists

Rationale: increases code quality and matches assessment recommendations (testing, type safety).

---

## 9) Small copy and grammar edits (Low)
- Capitalize name and titles properly ("Pawel Siwek", "React Developer").
- Replace long/wordy sentences with active, concise bullets.
- Remove subjective or casual phrasing (e.g. "it's fine") and replace with factual statements.
- Standardize technology naming (e.g. "Node.js", "MongoDB", "Material-UI").

Rationale: improves professionalism and reduces distractions.

---

## 10) Accessibility & performance polish (Low)
- Ensure icons have accessible labels (`aria-label` or visually-hidden text).
- Verify color contrast and keyboard focus styles for focusable elements.
- Lazy-load large images and optimize static assets.

Rationale: aligns with commercial-readiness checklist in the assessments.

---

## Example `cv.config.js` minimal schema (implementation-ready)
```js
export default {
  profile: "React Developer. Builds component-driven SPAs with Redux, styled-components and Node.js back-ends; deployed to Google Cloud.",
  skills: [
    { name: 'React', years: 3, level: 'Advanced', tags: ['Hooks', 'Redux'] },
    { name: 'JavaScript (ES6+)', years: 4, level: 'Advanced' },
    { name: 'TypeScript', years: 0.5, level: 'Learning' }
  ],
  experience: [
    { title: 'Portfolio', role: 'Sole Developer', dates: '2020–Present', bullets: ['Built SPA with React + Redux', 'Deployed to Google Cloud'], tech: ['React','Redux','styled-components'] }
  ],
  projects: [
    { name: 'Filesconverto', summary: 'Next.js + TypeScript file conversion app with drag-and-drop uploader.', tech: ['Next.js','TypeScript','Tailwind'], link: 'https://example.com' }
  ],
}
```

---

## Suggested immediate changes I can implement for you (pick one)
- Create `src/config/cv.config.js` and refactor `cv.jsx` to map over it.
- Replace the outer anchor, fix `className`/IDs, add `rel` attributes and small accessibility fixes.
- Insert a recruiter-ready top-summary and convert the project list to case-study bullets.
- Add a "Print / Download PDF" button and a basic `@media print` style.

Tell me which of the above you want implemented and I will apply the changes.

---

## 30/60/90 Quick plan (optional)
- 0–30 days: Fix React/JSX issues, add config mapping, rework top summary, grammar edits.
- 30–60 days: Add PropTypes/TypeScript migration for the CV, unit tests, and PDF/print support.
- 60–90 days: Add CI checks, further accessibility improvements, and polish visual presentation.

---

End of report.
