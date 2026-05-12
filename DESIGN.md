---
name: Luminal Noir Portfolio System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#859398'
  outline-variant: '#3c494e'
  surface-tint: '#3cd7ff'
  primary: '#a8e8ff'
  on-primary: '#003642'
  primary-container: '#00d4ff'
  on-primary-container: '#00586b'
  inverse-primary: '#00677e'
  secondary: '#e5b5ff'
  on-secondary: '#4e0078'
  secondary-container: '#a100f0'
  on-secondary-container: '#f7e1ff'
  tertiary: '#dedfdf'
  on-tertiary: '#2f3131'
  tertiary-container: '#c2c3c3'
  on-tertiary-container: '#4f5051'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b4ebff'
  primary-fixed-dim: '#3cd7ff'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5f'
  secondary-fixed: '#f4d9ff'
  secondary-fixed-dim: '#e5b5ff'
  on-secondary-fixed: '#30004b'
  on-secondary-fixed-variant: '#7000a8'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
---

## Brand & Style

This design system is engineered for a high-end, futuristic digital portfolio. The aesthetic is "Luminal Noir"—a sophisticated fusion of deep atmospheric blacks and high-energy neon accents. It targets a premium audience looking for technical mastery and creative boldness.

The core style is **Glassmorphism**, utilized to create a sense of physical depth and spatial immersion. By layering semi-transparent frosted panels over high-contrast background elements, the UI feels lightweight yet substantial. Every interaction is designed to feel tactile, utilizing 3D tilt effects and luminescent feedback to reinforce a sense of "digital craft."

## Colors

The palette is anchored in **Deep Black (#050505)** to ensure maximum contrast and "perfect blacks" on OLED displays. Surfaces use a slightly lighter **Dark Gray (#121212)** to differentiate depth layers.

The accents are high-vibrancy neons: **Electric Blue** serves as the primary action color, while **Vivid Purple** is used for secondary highlights, gradients, and decorative glow effects. Subtle white is reserved for high-fidelity borders and primary text to maintain a clean, modern aesthetic.

## Typography

This design system uses a strategic pairing of **Montserrat** for headlines to convey confidence and energy, and **Inter** for body text to ensure maximum readability against dark backgrounds. 

For technical details and metadata labels, **Geist** is used for its precise, monospaced-adjacent character. Headlines should favor tight letter-spacing and heavy weights to command attention. Body text employs a generous line-height to prevent "vibration" against the deep black background.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. On desktop, content is constrained to a 1440px container using a 12-column grid. On mobile, it switches to a single-column layout with generous side margins to let the glass panels breathe.

Spacing follows an 8px base unit. Sections are separated by large, airy vertical gaps (120px+) to emphasize the premium nature of the portfolio. Elements within glass cards should use internal padding of 32px to 48px to maintain an expansive, spatial feel.

## Elevation & Depth

Depth is established through **layered translucency** rather than traditional drop shadows. 

1.  **Base Layer:** Solid #050505 background.
2.  **Atmospheric Layer:** Soft, large radial gradients of Blue and Purple (20% opacity) floating behind panels.
3.  **Glass Panels:** Surface background `rgba(255, 255, 255, 0.03)` with a `backdrop-filter: blur(20px)`.
4.  **Borders:** 1px solid `rgba(255, 255, 255, 0.1)` on the top and left, and `rgba(255, 255, 255, 0.05)` on the bottom and right to simulate a subtle light source from the top-left.
5.  **Neon Glow:** Active elements utilize a `box-shadow` with high spread and low opacity using the accent colors (e.g., `0px 10px 40px rgba(0, 212, 255, 0.3)`).

## Shapes

The design system utilizes a **Rounded** aesthetic to soften the high-tech neon look, making it feel more approachable and organic. All primary containers and cards use a 1rem (16px) corner radius. Buttons and interactive chips use a fully pill-shaped (32px+) radius to distinguish them from structural layout components.

## Components

### Glass Cards
The signature component. Each card must feature a **3D Tilt effect** on hover, where the panel rotates slightly toward the cursor. The border brightness should increase upon interaction, accompanied by a soft neon "underglow" shadow matching the primary accent color.

### Buttons
Primary buttons are solid Electric Blue with white text, featuring a persistent but subtle outer glow. Secondary buttons are "ghost" glass panels with a white border that fills with a Purple-to-Blue gradient on hover. Transitions must be "silky"—using `cubic-bezier(0.4, 0, 0.2, 1)` with a duration of 400ms.

### Inputs & Fields
Input fields are dark, semi-transparent wells with a 1px border. On focus, the border animates to Electric Blue, and the entire field gains a subtle inner glow.

### Interactive Chips
Used for tagging skills or categories. These are small, pill-shaped glass elements. When active, they glow with their respective accent color, creating a "lit from within" effect.

### Navigation
A floating glass dock at the bottom or top of the screen. Items use a "scale-up" effect on hover, similar to a physical magnification, reinforcing the spatial immersion.
