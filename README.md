# LinkFood Web

This is a Next.js project created to replicate the `cd-fonte.txt` design using React Bits and GSAP animations.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Components Used

This project includes the following components:

- **AnimatedContent**: Content blocks that animate on scroll.
- **CardSwap**: Swapping cards for feature showcase.
- **CountUp**: Animated counter for statistics.
- **FadeContent**: Fading text elements.
- **FaultyTerminal**: A retro terminal effect.
- **GlareHover**: Cards with a glare hover effect.
- **RotatingText**: Text that rotates through different words.
- **ScrollFloat**: Floating text effect on scroll.
- **SplitText**: Text splitting animation (Requires GSAP SplitText plugin - see note below).
- **StaggeredMenu**: Full-screen staggered navigation menu.
- **StarBorder**: Buttons/Cards with animated star border.

## Note on GSAP Plugins

Some components (like `SplitText`) use premium GSAP plugins (`SplitText`, `ScrollSmoother`, etc.). Ensure you have the appropriate licenses or replace them with open-source alternatives if needed. The current implementation assumes access to `gsap/SplitText`.

## Project Structure

- `app/page.tsx`: The main landing page implementation.
- `components/`: Contains all the animation components.
- `app/globals.css`: Contains global styles and Tailwind configurations (including StarBorder animations).
