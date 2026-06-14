# 4-eyes.eu — Outbound Document Design Language

> This document defines the visual and editorial standards for all client-facing documents produced by 4-eyes.eu: presentations, proposals & quotes, and reports & deliverables.

---

## 1. Brand Concept

The name *4-eyes* invokes the four-eyes principle — dual scrutiny, rigorous review, and earned trust. The design language reflects this: precise, structured, and authoritative, without being cold. Every document should feel like it was made by people who checked their work twice.

**Design pillars:**
- **Clarity** — nothing decorative that doesn't serve the reader
- **Precision** — consistent spacing, alignment, and hierarchy
- **Authority** — confident use of dark anchors and structured layouts
- **Warmth** — amber accents and white space keep it human

---

## 2. Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Deep Ink | `#1B2D4F` | Headers, key text, cover backgrounds |
| Accent | Signal Amber | `#E8A020` | Dividers, callouts, highlights, icons |
| Secondary | Slate | `#4A5568` | Body text, captions, subheadings |
| Surface | Mist | `#F4F6F9` | Page background tints, table alternates |
| White | Paper | `#FFFFFF` | Main content area background |
| Alert | Coral | `#D95F4B` | Risks, warnings (use sparingly) |

**Rules:**
- Deep Ink and Signal Amber are the brand signature — never substitute them.
- Coral is for content meaning (risk flags), not decoration.
- Never place Signal Amber text on a white background below 18pt — contrast is insufficient.
- In grayscale print, Signal Amber maps to 40% black; Deep Ink to 90% black.

---

## 3. Typography

### Typefaces

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / Cover titles | Inter | 700 Bold | Large, tracking −0.5px |
| Section headings (H1) | Inter | 600 SemiBold | 24–28pt |
| Sub-headings (H2/H3) | Inter | 500 Medium | 16–18pt |
| Body text | Inter | 400 Regular | 10–11pt, line-height 1.55 |
| Captions & labels | Inter | 400 Regular | 8–9pt, uppercase, 0.8px tracking |
| Data & numbers | JetBrains Mono | 400 | Tables, financial figures, codes |

> Inter is freely available at [rsms.me/inter](https://rsms.me/inter). JetBrains Mono at [jetbrains.com/mono](https://www.jetbrains.com/mono/). Both are open-source and embeddable.

### Type Scale

```
Cover title      — 40pt / Inter Bold
H1               — 26pt / Inter SemiBold
H2               — 18pt / Inter Medium
H3               — 14pt / Inter Medium, Slate color
Body             — 10.5pt / Inter Regular, Slate #4A5568
Caption/Label    — 8.5pt / Inter Regular, ALL CAPS, tracked
Data             — 10pt / JetBrains Mono
```

### Typographic Rules
- One typeface family only (Inter), differentiated by weight and size.
- Body text is **never** fully justified — left-aligned only.
- Avoid orphaned words at paragraph ends; reflow or rewrite.
- Numbers in running text use old-style figures where the font supports them; in tables, use tabular lining figures.

---

## 4. Layout & Structure

### Page Setup

| Format | Size | Margins |
|---|---|---|
| Reports & Deliverables | A4 Portrait | Top 25mm · Bottom 20mm · Left/Right 22mm |
| Proposals & Quotes | A4 Portrait | Top 25mm · Bottom 20mm · Left/Right 22mm |
| Presentations | 16:9 Widescreen (33.87 × 19.05 cm) | 1.5cm all sides |

### Grid

- **Reports/Proposals:** 12-column grid, 4mm gutter. Primary content spans columns 1–12; sidebars or callout boxes span columns 9–12.
- **Presentations:** Single-zone content area with a fixed 6cm header band and 1.2cm footer bar.

### Document Anatomy

**Cover page (all formats):**
- Full Deep Ink (`#1B2D4F`) background
- 4-eyes.eu wordmark (white) — top-left, 12mm from edges
- Document title — Inter Bold, 36–40pt, white, vertically centered-low
- Document type tag (e.g., "Proposal" / "Report") — Signal Amber, uppercase caption
- Client name and date — white, Inter Regular, bottom-left

**Interior pages:**
- Thin Deep Ink top rule (2pt) across full page width
- Page number — bottom-right, Inter Regular 8.5pt, Slate
- Section name — bottom-left, same size, Slate
- Running header (optional) — document title, right-aligned, 8pt, Slate

**Section openers:**
- Full-width Signal Amber horizontal rule (3pt) beneath H1
- H1 in Deep Ink, flush left
- Optional lead paragraph in Inter Medium, slightly larger than body (12pt)

**Callout / Pull-quote boxes:**
- Left border: 4pt solid Signal Amber
- Background: Mist `#F4F6F9`
- Text: Inter Medium, Slate, 10.5pt
- Padding: 10mm vertical, 12mm horizontal

**Tables:**
- Header row: Deep Ink background, white text, Inter SemiBold
- Alternating rows: White / Mist
- All borders: 0.5pt, `#D1D9E0`
- Numeric columns: right-aligned, JetBrains Mono

---

## 5. Tone & Voice

### Register
Professional but direct. 4-eyes.eu is analytical and precise — documents read like they were written by someone who knows the subject deeply and respects the reader's time.

### Core principles

**Be direct.** State conclusions before explaining them. Executives read the first sentence; analysts read the rest.
> ✗ *"Following a thorough review of the available information, it appears that..."*
> ✓ *"The process has three critical gaps."*

**Active voice.** Passive constructions hide responsibility and dilute impact.
> ✗ *"Recommendations were made to improve the control framework."*
> ✓ *"We recommend strengthening three controls in the payment flow."*

**Evidence first, then interpretation.** Claims are supported by data, references, or documented observations.

**No jargon without definition.** If a term needs explaining, define it on first use in a callout or footnote.

**Numbers are precise.** Write "12%" not "approximately twelve percent." Use thousands separators: 1,200,000 not 1200000.

### Formality by document type

| Document | Formality | Notes |
|---|---|---|
| Report / Deliverable | High | Formal register; impersonal where appropriate ("the assessment found…") |
| Proposal / Quote | Medium-high | Warmer, first-person plural ("we propose…", "our approach…") |
| Presentation | Medium | Punchy and scannable; slides carry headlines, not paragraphs |

### What to avoid
- Filler phrases: *"It is important to note that…"*, *"As mentioned above…"*
- Hedging without cause: *"may potentially"*, *"could possibly"*
- Inflated language: *"leverage"* → use, *"utilise"* → use, *"optimise"* → improve
- Oxford comma is **required**: "risks, controls, and mitigations"
- Language is **British English** (organise, analyse, programme)

---

## 6. Iconography & Visuals

- Use line icons only (1.5–2pt stroke, rounded caps). Recommended set: **Lucide** or **Phosphor** (both open-source).
- Icons inherit the nearest heading color — Deep Ink in body, white on dark backgrounds.
- Diagrams and charts use the palette: Deep Ink → Signal Amber → Slate → Mist in that priority order.
- Photography (if used): desaturated, blue-tinted. No stock photo clichés (handshakes, light bulbs).
- Data visualisations must include a text summary — never a chart without a written takeaway.

---

## 7. File Naming Convention

```
YYYY-MM-DD_4eyes_[ClientCode]_[DocType]_[Version].ext

Examples:
2026-06-13_4eyes_ACME_Proposal_v1.0.pptx
2026-06-13_4eyes_ACME_Report_v2.1.pdf
2026-06-13_4eyes_ACME_Quote_v1.0.docx
```

- `DocType`: Proposal | Quote | Report | Brief | Deck
- `Version`: v1.0, v1.1, v2.0 — increment minor for revisions, major for structural changes
- Share only PDF exports with clients; source files stay internal

---

## 8. Accessibility Checklist

Before sending any outbound document:

- [ ] All body text meets WCAG AA contrast (4.5:1 minimum)
- [ ] Signal Amber is never used for small body text on white
- [ ] Headings use a logical hierarchy (H1 → H2 → H3, not skipped)
- [ ] Tables have a defined header row
- [ ] Charts have text equivalents (captions or alt-text in accessible PDFs)
- [ ] Document title and language metadata are set in file properties
- [ ] PDF is tagged (use "Save as accessible PDF" or equivalent)

---

*Last updated: June 2026 · Maintained by 4-eyes.eu*
