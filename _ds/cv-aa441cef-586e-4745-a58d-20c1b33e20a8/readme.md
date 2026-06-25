# Supa Résumé — Design System

A small, focused design system for building **Dimitar Kostov's CV / résumé** (and other
résumés/cover-letters) in the *Supa Resume* style — a clean two-column layout with
fully paired **light and dark** themes.

> **Who this is for:** Dimitar Kostov — software engineer (full-stack web & dev tooling),
> based in The Hague, NL, originally from Pleven/Burgas, Bulgaria. The résumé content baked
> into the UI kit is his real history (see `ui_kits/resume/resumeData.js`).

---

## Sources

- **Figma:** *"Supa Resume - Light & Dark [FREE Resume_Cover Letter] (Community)"* — attached as a
  read-only virtual filesystem. Pages: Welcome, Tutorials, Resumes (32 frames), Cover-letters
  (18), Components (12), Assets. The token values, layout and component anatomy here were
  extracted from that file (the `Design system header`, `Resume-light` and `Resume-dark` frames
  in particular). The file has **no Figma Variable collections** — all values are literal.
- **Profile data:** `uploads/facebook-info.png` — Dimitar's public profile (work history,
  education, location).
- **Credentials:** `uploads/diploma-1-4.pdf`, `uploads/diploma-2-3.pdf`,
  `uploads/svid-prof-qual-1-4.pdf`, `uploads/svid-prof-qual-2-3.pdf` — his secondary diploma and
  professional-qualification certificates from PMG "Akad. N. Obreshkov", Burgas. *(Education titles
  in the kit are reconstructed from these — verify exact wording against the PDFs.)*

---

## Content fundamentals

The résumé voice is **quiet, factual and third-person-implied** — no "I", no marketing fluff.

- **Casing:** Section titles and the name use **Title / sentence case**, never ALL-CAPS. Small
  group labels ("Socials", "Languages") are Title Case; the tiny field captions ("Email",
  "Phone") are Title Case too.
- **Role lines** read as a job title + organisation: *"Software Development Engineer · Helikon"*.
- **Dates** are terse and en-dashed: *"Aug 2022 – Sep 2023"*. Locations are *"City, CC"*.
- **Descriptions** are one or two lines, past-tense, outcome-first verbs ("Built…", "Taught…",
  "Delivered 50+…"). Numbers are concrete where they exist.
- **Pull-quote** is a short design/engineering aphorism with attribution — a single moment of
  personality.
- **No emoji** in résumé content. (The only emoji in the system is the 🌙/☀️ theme-toggle button,
  which is UI chrome, not content.) Flags are real images, not emoji.

---

## Visual foundations

**Palette.** Cool neutral "ink" ramp (`#232339 → #f4f6fb`) for text, borders and surfaces; a
**blue** primary (`#516cf7`) for links/actions and a **violet** family (`#7b61ff` / `#c696fc`)
for accents, the role line, section markers and skill chips. Semantic coral / yellow / green only
appear as **skeuomorphic icon tiles** (rounded squares with a soft *colored* drop-shadow) and the
green "success" badge.

**Themes.** Two complete modes. Light = white page on a soft grey desk. Dark = `#232339` page
with `#2e2e48` cards and `#eef1f6` text. Toggled by `data-theme="dark"` on any ancestor; every
component reads semantic aliases (`--bg-page`, `--text-heading`, `--bg-surface`…) so they flip
automatically.

**Type.** Three Google families: **Outfit** (display — the name, section titles, card titles, role;
semibold 600 with tight `-0.02em` tracking), **DM Sans** (all body, meta, labels), **Be Vietnam
Pro** (small accent badges only). Section titles are 30px; the name 34px; body 15px.

**Layout.** Fixed two-column sheet (≈1180px): a 320px **aside** + a flexible **main** column.
The main column carries a faint vertical **timeline rail** with ringed marker dots beside each
section title. 4px spacing grid; 48px between sections.

**Cards & surfaces.** Default radius **10px** (`--r-lg`); tiles 12–14px; pills/avatars fully
round. Cards are flat fills (`--bg-surface`) — **no borders**, **no gradients** on surfaces. The
sheet itself floats on a soft `--shadow-lg`. Elevation is a quiet black wash (4–10% alpha); the
only *colored* shadows are under the icon tiles.

**Borders.** Hairlines only — `--border-soft` dividers in the aside and between specimen rows.

**Motion.** The static résumé has **no animation**; the only interaction is the theme toggle,
which is an instant token swap (no transition needed, though one is harmless). Hover states are
minimal — links rely on color, not underlines.

**Imagery.** One real photo (the circular avatar). Flags via `flagcdn.com`. Everything else is
typographic + the colored tiles. No stock photography, no illustration.

---

## Iconography

- **Line icons:** thin **2px stroke, round-cap** glyphs — the **Lucide** family
  (lucide.dev, MIT). The .fig used this same style; we ship a small curated subset inline in
  `components/foundation/Icon.jsx` (mail, link, phone, mapPin, github, linkedin, facebook, quote,
  code, server, graduation, briefcase, arrowUpRight, star, palette, terminal). Render with
  `<Icon name="mail" size={20} />`; color inherits via `currentColor`.
  *Substitution note: the original .fig icons were not extracted 1:1 — Lucide is the closest
  CDN-available match. Swap if you have the exact source set.*
- **Brand glyphs:** GitHub / LinkedIn / Facebook marks live inside `Icon` and drive `SocialLink`.
- **Flags:** country flags are loaded as images from `flagcdn.com` (e.g. `bg`, `gb`, `nl`) by
  `LanguageRow` — not emoji (emoji flags don't render on Windows).
- **Logos / tiles:** company, school and tool marks are **letter-mark `IconTile`s** (rounded
  square, brand-ish fill, optional colored shadow). Swap any tile's `label`+`bg` for a real `img`.
- **Emoji:** not used in content. Only the theme-toggle button uses 🌙/☀️.

---

## Index / manifest

**Root**
- `styles.css` — entry point (imports only). Link **this** as a consumer.
- `tokens/` — `fonts.css`, `colors.css` (light + `[data-theme="dark"]`), `typography.css`, `spacing.css`.
- `assets/dimitar-avatar.png` — circular profile photo (cropped from the upload).
- `readme.md` (this file) · `SKILL.md` (Agent-Skill wrapper).

**Components** (`window.CV_aa441c.*`)
- `components/foundation/` — `Icon`, `Badge`, `IconTile`, `Avatar`, `SectionTitle`, `Quote`, `Divider`.
- `components/resume/` — `ContactRow`, `SocialLink`, `LanguageRow`, `SkillChip`, `SkillGroup`,
  `ExperienceItem`, `EducationCard`, `ProjectCard`, `ToolCard`, `Aside`.

**Guidelines** (`guidelines/*.html`) — foundation specimen cards: Colors (brand / neutral /
semantic / dark), Type (display / body), Spacing & radius, Elevation & tiles.

**UI kit**
- `ui_kits/resume/` — `index.html` (full light/dark résumé + theme toggle, also a Starting Point)
  and `resumeData.js` (Dimitar's content).

The Design System tab renders every `@dsCard`-tagged HTML above.
