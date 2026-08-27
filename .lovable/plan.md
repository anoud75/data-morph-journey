# Yamamah Life Sciences — SSCP Interactive Story Experience

A single-page, Arabic (RTL) interactive exhibition where one object keeps transforming: the Yamamah mark becomes data ribbons, ribbons become four solution cards, cards collapse into a medicine capsule, the capsule powers the Yamamah platform. No section ever fades out and gets replaced — geometry is shared and morphed.

## Experience flow

**01 — Hero (idle)**
- Headline "ماذا تخبرنا البيانات عن الدواء؟" + subline "بيانات وطنية. رؤى دوائية. قرارات أذكى."
- Use supplied `34.png` as the Yamamah glass mark on the right, segmented into independently animated strip regions: each breathes 2–6px on a 5–8s cycle, with three parallax depths and a slow internal light sweep.
- Use supplied `35.png` as the glass play control: 2–3% breathing scale plus an expanding cyan halo every ~2.7s.
- Use supplied `36.png` as the SSCP conference lockup.

**Play press → morph into 02**
- Button compresses 1 → 0.93 → 1; a light beam leaves the button and travels to the mark.
- Strips illuminate one after another, particles appear inside, whole object brightens.
- The same strip paths then stretch and curve (SVG path interpolation) until they read as flowing glass ribbons — the logo is never swapped out.

**02 — National data story**
- Headline "من أكبر منظومة بيانات صحية.. نرسم مستقبل قطاع الأدوية." with the morphing reveal: selected word groups resolve from 8–12px blur + opacity 0 at staggered moments over ~1000ms. Body paragraph stays sharp and static.
- Use supplied `37.png` as the first ribbon material/reference; its layered ribbons drift horizontally at three parallax speeds while cyan particles travel along selected curves.

**02 → 03 morph**
- Ribbons split into four streams, each curving to a card slot, then shortening, flattening and straightening into the four card outlines.

**03 — Four solutions**
- Cards: الحلول التجارية وسوق الدواء / الأدلة الواقعية والتجارب السريرية / الوصول إلى الفئات المستهدفة / الشراكات والاستثمار الصحي, with the copy from the brief document.
- Use supplied icons as the initial card visuals: `40.png` for commercial solutions, `39.png` for real-world evidence, `41.png` for partnerships; create the fourth matching target-audience icon in the same glass language.
- Glass styling: translucent white-cyan surface, frosted blur, thin cyan edge, soft inner glow, corner light reflection, no dark shadow.
- Forming staggered 100–140ms; icon materializes after its card (opacity 0→1, scale 0.85→1, translateY 8→0, no bounce).
- Hover/touch: scale 1.025, clearer glass, brighter border, icon lifts 4–6px, edge highlight sweep, siblings dim slightly.
- Click: shared-layout expansion to a centered surface — icon grows and moves up, details reveal underneath; back reverses the same morph.
- Use supplied `38.png` for the calm pharma professional and its surrounding UI panels; animate panel layers, charts and population dots rather than the person.

**04 — Capsule → platform**
- Cards drift together, boundaries dissolve, contents collapse into cyan particle streams flowing into a single floating capsule.
- Wireframe hand materializes from the left in three stages (points → lines → mesh), approaches and stops short of the capsule. Capsule rotates gently with internal data points.
- A beam leaves the capsule to the laptop; the screen powers on progressively: frame → nav → metrics → charts → map.
- CTA "استعرض المنصة" as a glass pill: idle inner light, hover brighten + 1.02, tap 0.96 with a light ripple, then opens the demo.

**Beam system** — Play → mark, mark → ribbons, ribbons → cards, cards → capsule, capsule → platform. Faint pale path, bright travelling light head with feathered edges.

**Scroll** — section-snapped, controlled progression; each transition completes its morph before the next state settles.

## Design system

- Background `#F0F7F7` with faint blue radial gradients; glass in white/`#C7DBE2`/`#16BDD3`/`#1F97CC`; accent `#006CC4`; type `#0C1F3D`. SSCP purple only in the conference lockup.
- Arabic-first RTL layout, Arabic display type for headlines.
- Easing `cubic-bezier(0.22, 1, 0.36, 1)`; morphs 900–1400ms, UI 350–600ms, micro 180–300ms.
- Full `prefers-reduced-motion` fallback: static composed states, no beams or loops.

## Technical notes

- Install `motion` (Motion for React) for layout/shared-element morphs, timelines and scroll progress.
- All hero/ribbon/card/capsule geometry authored as one continuous SVG scene per stage so morphs interpolate real paths; particles and beams use SVG `offset-path`/motion values, not video or GIFs.
- Section orchestration by a small stage state machine (`hero → stream → solutions → platform`) driven by scroll progress and explicit continue/play actions, so morphs are never interrupted mid-flight.
- Built as `src/routes/index.tsx` plus components under `src/components/story/`; tokens added to `src/styles.css`.
- Illustrative visuals (pharma professional, wireframe hand, laptop) generated as project assets; the uploaded slides are used as design reference only. The dashboard screen is rendered as live DOM so it can power on progressively.

## Open items

- Demo CTA target: opens an in-page platform preview unless a real URL is provided.
