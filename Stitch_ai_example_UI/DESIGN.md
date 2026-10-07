---
name: Luminous Intelligence
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464554'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#006c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system expresses computational rigor, architectural clarity, and high-signal engineering precision. Built specifically for an AI/ML engineering portfolio, it eschews generic dark-mode developer tropes in favor of an airy, luminous gallery aesthetic reminiscent of modern research labs and high-end workstation software.

The visual style synthesizes **Technical Minimalism** with **Subtle Tactile Precision**:
- **Clarity over Density**: Vast negative space and generous surface padding isolate complex ideas (neural architectures, benchmarks, production pipelines), making them digestible at a glance.
- **Micro-Engineered Details**: Crisp hairline dividers, monospaced metadata callouts, and crystalline surface boundaries convey mathematical exactness.
- **Selective Vibrancy**: High-energy algorithmic accents (indigo, electric cyan, and emerald) are deployed with extreme restraint—reserved for active runtime statuses, model benchmarks, weights, and high-intent interactive hooks.

## Colors

The palette establishes a high-contrast, luminous reading surface anchored by deep slate ink tones and illuminated by controlled spectral accents.

### Color Roles & Ratios
- **Canvas & Surface Base (60%)**: `#F8FAFC` (Canvas background), `#FFFFFF` (Elevated card containers, panels, and code blocks), and `#F1F5F9` (Recessed interactive wells, pill badges, and table headers).
- **Ink & Contrast Hierarchy (30%)**:
  - `slate-900` (`#0F172A`): Primary headings, key metrics, and dominant brand marks.
  - `slate-700` (`#334155`): Explanatory body text, code comments, and secondary titles.
  - `slate-500` (`#64748B`): Technical metadata, timestamps, units, and structural outlines.
  - `slate-200` (`#E2E8F0`): Hairline perimeter strokes and structural grid rules.
- **Accents & Operational Signals (10%)**:
  - **Deep Indigo / Violet (`#6366F1`)**: Primary interactive states, neural network node highlights, model checkpoints, and primary action targets.
  - **Electric Cyan (`#0EA5E9`)**: Data streams, inferencing latencies, API route badges, and focus rings.
  - **Emerald Green (`#10B981`)**: Production status indicators, convergence thresholds, positive delta benchmarks, and live deployment tags.

## Typography

The typographic hierarchy is divided into three distinct roles to reinforce an authentic engineering pedigree:

1. **Space Grotesk (Display & Section Headings)**: Geometric, structural, and slightly brutalist. Lends forward-looking architectural authority to case study titles, research focus areas, and portfolio milestones.
2. **Inter (Body & Narrative Prose)**: Neutral, hyper-legible, and balanced. Provides calm, fatigue-free reading for technical case studies, problem breakdowns, and paper summaries.
3. **JetBrains Mono (Metadata, Benchmarks & Code)**: Precise and monospaced. Encapsulates model hyper-parameters (e.g., `batch_size: 128`, `loss: 0.0142`), API signatures, hardware telemetry, and status chips.

Maintain generous line-height across `body-lg` and `body-md` to preserve open breathing room inside dense research write-ups.

## Layout & Spacing

The layout is built upon an expansive 12-column fluid grid bound by a maximum canvas container of `1280px`. The core philosophy prioritizes deliberate vertical pacing and isolated information clusters over dense grid packing.

### Responsive Breakpoints
- **Desktop (>= 1024px)**: 12-column grid. Outer page margins set to `margin` (`4rem`) with `gutter` (`1.5rem`). Structural section breaks utilize `space-3xl` (`6rem`) to ensure deep thematic isolation.
- **Tablet (768px - 1023px)**: 8-column grid. Outer margins scale to `2.5rem`. Section rhythm scales to `space-2xl` (`4rem`).
- **Mobile (< 768px)**: 4-column grid. Canvas margins contract to `margin-mobile` (`1.25rem`) with `gutter-mobile` (`1rem`). Complex horizontal model diagrams stack vertically into sequential flow cards.

### Spacing Philosophy
- Internal card padding must scale linearly with card prominence: never drop below `space-lg` (`1.5rem`) for primary project showcases; use `space-xl` (`2.5rem`) on desktop.
- Gaps between metadata labels and raw numerical values should be tight (`space-xs` to `space-sm`), anchoring them as singular cognitive units.

## Elevation & Depth

This design system avoids heavy shadows, dark drop-offs, and skeumorphic drop-shadows. Depth is achieved via **luminous surface layering and hairline boundaries**.

- **Surface Tiering**:
  - **Base Canvas (`#F8FAFC`)**: Lowest plane, providing a soft, non-glare canvas.
  - **Panel / Card Surface (`#FFFFFF`)**: Primary foreground layer, isolated by a `1px` border of `slate-200` (`#E2E8F0`).
  - **Sunken Interactive Wells (`#F1F5F9`)**: Used inside cards for code snippets, parameter panels, and input fields.
- **Ambient Lighting Shadows**:
  - Cards resting on `#F8FAFC` use an ultra-diffused, cool-tinted shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 8px 24px -4px rgba(15, 23, 42, 0.03)`.
  - On hover, elevation transitions subtly via an indigo-tinted shadow bloom: `0 12px 32px -6px rgba(99, 102, 241, 0.08), 0 2px 6px 0 rgba(15, 23, 42, 0.03)`, coupled with a border transition to `#CBD5E1`.
- **Modals and Flyouts**: Elevated panels utilize backdrop blurs (`backdrop-filter: blur(16px)`) over translucent `#FFFFFF` (`rgba(255, 255, 255, 0.92)`) with a crisp `#E2E8F0` border.

## Shapes

The design system adopts a disciplined, refined geometric profile (`roundedness: 1` — Soft).

- **Standard Elements (0.25rem / 4px)**: Inline code chips, status badges, tiny telemetry tags, and form controls. Reflects structural, engineering-grade precision.
- **Cards & Surface Containers (0.5rem / 8px)**: Architecture diagrams, research project cards, demo sandboxes, and benchmark tables.
- **Outer Modals & Interactive Playgrounds (0.75rem / 12px)**: Large canvas wrappers and isolated workflow previews.
- **Strict Exception (Pill / Full Round)**: Applied exclusively to live operational status lights (`8px x 8px` circles) and model run indicators to mirror hardware LEDs.

## Components

### Buttons
- **Primary Action**: Solid `#6366F1` background, white text (`#FFFFFF`), `font-weight: 500`, with `0.5rem` vertical and `1.25rem` horizontal padding. Hover state shifts to `#4F46E5` with an ultra-subtle indigo glow.
- **Secondary / Ghost Action**: `#FFFFFF` background, `1px solid #E2E8F0`, slate-900 text (`#0F172A`). Hover state elevates with `#F8FAFC` background and `#CBD5E1` border.
- **Technical Action**: Monospaced font (`JetBrains Mono`), `#F1F5F9` background, `#334155` text, bordered in `#E2E8F0`. Used for "Copy Weights", "View Config", and "Deploy Instance".

### Chips & Badges
- **Status Badges**: Semi-translucent light fills paired with bold status text and a radiating LED dot:
  - *Active / Deployed*: `#ECFDF5` background, `#047857` text, pulsing `#10B981` dot.
  - *Inferencing / Processing*: `#F0F9FF` background, `#0369A1` text, `#0EA5E9` dot.
  - *Model Training / Epoch*: `#EEF2FF` background, `#4338CA` text, `#6366F1` dot.
- **Stack Chips**: `#F8FAFC` surface, `#64748B` label text, enclosed in a `1px solid #E2E8F0` perimeter.

### Cards & Project Showcases
- White surface (`#FFFFFF`) wrapped in a `1px solid #E2E8F0` hairline border. Generous internal padding (`space-xl`).
- Structural partitioning inside cards: Headers separate from benchmark summaries via faint horizontal dividers (`#F1F5F9`).
- Interactive hover: Subtle `translate-y(-2px)` elevation with an indigo ambient glow.

### Input Fields & Search Bars
- Background set to `#FFFFFF`, surrounded by `1px solid #E2E8F0`.
- Text color is `#0F172A`, placeholder in `#94A3B8`.
- Focus state explicitly avoids heavy outlines; it renders a sharp `1px solid #6366F1` with an electric-cyan shadow ring (`0 0 0 3px rgba(14, 165, 233, 0.15)`).

### Lists & Benchmark Tables
- Borderless table interiors with alternating row highlights using `#F8FAFC` on hover.
- Row dividers set to `1px solid #F1F5F9`.
- Column labels rendered in `JetBrains Mono` (`label-md`), uppercase, tracking `0.04em`, colored in `slate-500` (`#64748B`).

### Domain-Specific Components (AI/ML Portfolio)
- **Model Metric Callout**: Metric values displayed in `display-xl` (`Space Grotesk`), accompanied by subscript deltas in `#10B981` (e.g., `+14.2% BLEU`) and dataset titles in `label-sm`.
- **Architecture Pipeline Viewers**: Multi-stage flowchart blocks styled with pure white `#FFFFFF` node surfaces, `#E2E8F0` connections, and `#6366F1` tensor dimension labels.