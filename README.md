# Yamamah Data Flow

Design the Yamamah Life Sciences SSCP experience as a premium interactive storytelling landing page, with smooth morphing transitions inspired by high-end editorial/web experiences such as the Nexari reference.

The page should NOT behave like a normal website where sections simply fade in while scrolling.

It should feel like one continuous visual sequence where data changes form as the user progresses.

Overall motion concept

The main visual metaphor is:

One medicine → data signal → national health data → pharmaceutical insights → Yamamah platform

Every section should visually transform into the next one.

Avoid hard cuts.

Avoid basic slide-in animations.

Avoid excessive bouncing.

Avoid generic fade-up animations on every element.

Motion should feel fluid, elegant, calm and intentional.

Use smooth easing similar to:

cubic-bezier(0.22, 1, 0.36, 1)

For larger morph transitions, use approximately:

900ms–1400ms

For UI elements:

350ms–600ms

For micro-interactions:

180ms–300ms

The movement should feel slightly slow and luxurious rather than fast and “app-like.”

01 — Hero / Idle State

Initial screen:

ماذا تخبرنا البيانات عن الدواء؟

The Yamamah glass symbol sits on the right.

The symbol should not be static.

Its horizontal glass strips should float very subtly and independently, with only 2–6px movement.

Use extremely slow movement:

5–8 second breathing cycle

The strips should have slight depth/parallax so some layers appear closer than others.

Inside the glass, add subtle light movement and refraction.

No constant strong glow.

The play button should feel alive through a very subtle breathing animation.

The glass circle expands by approximately 2–3%, then returns.

A soft cyan halo expands outward and fades.

Repeat every 2.5–3 seconds.

Do not make it pulse aggressively.

When the user presses Play

This is the most important transition.

Do NOT navigate immediately.

The button compresses slightly:

scale 1 → 0.93 → 1

A cyan light originates from the button.

The light travels toward the Yamamah glass symbol.

As the signal reaches the symbol:

the individual Yamamah strips illuminate sequentially

light travels from one glass layer to another

tiny particles appear inside the structure

the entire object becomes slightly brighter

Then the Yamamah shape begins to morph.

Its glass strips stretch horizontally and curve.

They gradually lose the recognizable logo formation and become flowing glass/data ribbons.

This creates the transition into Section 02.

It should visually feel like:

Yamamah logo → information begins flowing → national data stream

Do not fade the Yamamah graphic out and replace it with another image.

The user should visually understand that the SAME object transformed.

02 — National Data Story

The glass strips from the Yamamah symbol have now become several large flowing transparent waves across the lower part of the screen.

Headline:

من أكبر منظومة بيانات صحية.. نرسم مستقبل قطاع الأدوية.

The ribbons should continuously move very slowly.

They should feel like flexible glass/data streams rather than water.

Inside selected ribbons, tiny cyan light particles should travel along the curve.

The movement direction should be primarily horizontal.

Add very subtle parallax:

foreground ribbon → slightly faster
middle ribbon → medium
background ribbon → very slow

This gives depth without excessive animation.

Text entrance

Do not simply fade the headline in.

Use a morphing text reveal inspired by Nexari.

Some selected words begin slightly blurred.

As the text settles:

blur 8–12px → 0px

and

opacity 0 → 1

Individual words can resolve at slightly different moments.

Example:

“من أكبر” appears sharp first.

“منظومة بيانات صحية” resolves next.

“نرسم مستقبل قطاع الأدوية” resolves last.

The total effect should take approximately 900–1200ms.

Use the blur sparingly.

The text must remain readable quickly.

Transition to Section 03

As the user continues scrolling or taps to continue:

The flowing ribbons begin separating into four main streams.

Each stream curves toward a different position on the right side.

The streams shorten and flatten.

Their edges straighten.

They gradually become the outlines/background surfaces of the four glass solution cards.

So the motion becomes:

data ribbons → four data streams → four glass cards

Again, do NOT fade the waves away and fade cards in.

Use shared geometry/morphing to make one state transform into another.

03 — Four Yamamah Solutions

Four glass cards appear:

الحلول التجارية وسوق الدواء

الأدلة الواقعية والتجارب السريرية

الوصول إلى الفئات المستهدفة

الشراكات والاستثمار الصحي

The cards should use consistent Yamamah glass styling:

semi-transparent white/cyan surface

subtle frosted blur

thin cyan edge

very soft internal glow

no heavy dark shadow

subtle light reflection passing across the upper corner

Each card contains its matching cyan glass icon.

Card entrance

The cards should not all appear simultaneously.

Use a stagger of about 100–140ms.

The first card finishes forming from the data ribbon.

Then second.

Then third.

Then fourth.

Icons should materialize after their card finishes forming.

Icon animation:

opacity 0 → 1

scale 0.85 → 1

small translateY 8px → 0

No bouncing.

Hover / touch effect

When the visitor touches or hovers over a card:

The card moves forward slightly:

scale 1 → 1.025

The background glass becomes slightly clearer.

The cyan border becomes brighter.

The icon lifts approximately 4–6px.

A subtle highlight travels across the edge.

Supporting copy becomes slightly more visible.

The other cards reduce opacity very slightly, but never disappear.

Clicking a card

The selected card should expand smoothly toward the center.

Use shared layout animation.

The selected card becomes the next content surface rather than opening a completely unrelated modal.

Its icon grows slightly and moves to the upper portion.

Supporting details reveal progressively underneath.

The back interaction should reverse the same morph.

Human / Pharma Visual

The Saudi pharma professional on the left should remain relatively calm.

Do not animate the person heavily.

Instead, animate the transparent UI/data panels around him.

Panels should float subtly at different depths.

Graphs and charts can animate slowly.

Small points inside the population visualization can brighten sequentially.

The effect should communicate:

the person is surrounded by useful intelligence

rather than:

the person is controlling a sci-fi interface.

04 — Transition Into Yamamah Platform Demo

After the visitor explores the solutions, the four glass cards begin moving toward each other.

Their boundaries gradually dissolve.

Their data/icons collapse into thin streams of cyan particles.

The particles travel toward a single floating medicine capsule.

The capsule becomes the central object.

Then a wireframe/data hand appears from the left.

The hand should materialize progressively:

first faint particles,

then connecting lines,

then the complete mesh hand.

The hand approaches the capsule slowly.

Do not actually grab the capsule.

The finger/hand should stop shortly before it.

The capsule rotates gently in place.

Inside the capsule, tiny data points move continuously.

Medicine → Platform transition

A thin data beam leaves the capsule.

The beam travels toward the Yamamah laptop/platform on the right.

As the beam reaches the laptop:

the laptop screen turns on progressively.

First the frame.

Then navigation.

Then key metrics.

Then charts.

Then map/data visualization.

It should look as if the medicine's data is being translated into Yamamah insights.

This is important:

The laptop should NOT simply fade in with the dashboard already visible.

The user should visually experience:

medicine → data → insight

Demo CTA

Use the Yamamah glass button.

Recommended wording:

استعرض المنصة

The button should use the same material as the glass cards and icons.

Do not use a normal flat rectangular CTA.

Idle:

soft cyan inner light

very subtle glass reflection

Hover:

slight brightening

scale 1.02

Touch:

scale 0.96

then return to 1

A small ripple of light should travel through the glass after tapping.

Then open the demo.

Animated Beam System

Use animated beams carefully throughout the experience.

The beam should look like a small concentration of light travelling along an almost invisible path.

Do not show bright permanent connecting lines everywhere.

Inactive path:

very low opacity pale cyan.

Moving energy:

bright Yamamah cyan with soft feathered edges.

Suggested colors:

#16BDD3

#1F97CC

#006CC4

with occasional near-white highlights.

Use Animated Beam for:

Play button → Yamamah object

Yamamah object → data ribbons

data ribbons → solution cards

solution cards → medicine capsule

medicine capsule → Yamamah platform

This creates one continuous visual language.

Scroll Behaviour

Avoid normal endless vertical scrolling.

Treat the experience more like an interactive digital exhibition.

Each major section should occupy most of the visible screen.

Use smooth scroll snapping or controlled section transitions.

During a transition, allow the existing visual to transform before the next section fully settles.

The visitor should never feel that they jumped to a different webpage.

It should feel like moving deeper into the same Yamamah story.

Morphing Text Style

Use morphing typography selectively for key headings.

Inspired by the Nexari reference:

Some words briefly appear soft/blurred while others are sharp.

As the visitor progresses, blurred words resolve into focus.

Do not distort Arabic letterforms.

Never blur entire paragraphs.

Only use on large headlines.

Keep paragraph text static and highly readable.

Background

Use a very pale Yamamah blue / near-white environment.

Suggested base:

#F0F7F7

with extremely subtle blue radial gradients.

No dark cyberpunk background.

No purple gradients except the official SSCP identity where required.

Glass objects should use:

white transparency

pale cyan

#C7DBE2

#16BDD3

subtle #1F97CC

Typography:

deep Yamamah navy

#0C1F3D

Motion Principle

Every transition should answer:

Where did this object come from?

The visitor should always be able to visually follow the transformation.

The experience should therefore follow one continuous chain:

Yamamah mark

↓

data flows

↓

national data

↓

four pharmaceutical capabilities

↓

medicine

↓

Yamamah platform

↓

actionable pharmaceutical insight

The animation itself tells the Yamamah story.

Do not add animation simply for decoration.

The final result should feel:

fluid, precise, intelligent, premium, human and memorable.

Not:

busy, gaming-like, futuristic for the sake of being futuristic, AI-looking, or template-like.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cfa6baee-6f0d-48b9-a875-bb6da3648bf0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
