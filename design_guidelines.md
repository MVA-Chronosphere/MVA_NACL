# NACL Restaurant Design Guidelines

## Design Approach
**Reference-Based Approach**: Replicating Green Rebel's organic, rustic aesthetic with natural food imagery and smooth animations. Focus on authentic, wholesome food presentation with floating vegetable elements and parallax scrolling effects.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Forest Green: 145 65% 25% (primary brand)
- Warm Earth Brown: 25 35% 40% (secondary)
- Fresh Leaf Green: 110 45% 55% (accent)

**Supporting Colors:**
- Cream White: 45 15% 95% (backgrounds)
- Rich Soil Brown: 20 45% 20% (text)
- Natural Orange: 25 85% 65% (carrot accents)

### B. Typography
- **Primary**: Poppins (headers, bold statements)
- **Secondary**: Inter (body text, navigation)
- **Accent**: Playfair Display (elegant food descriptions)

### C. Layout System
**Tailwind Spacing Units**: 2, 4, 6, 8, 12, 16, 24
- Generous whitespace using p-8, m-12 for breathing room
- Consistent vertical rhythm with gap-6 and gap-8
- Hero sections with min-h-screen for full viewport impact

### D. Component Library
- **Navigation**: Sticky header with glass morphism effect
- **Hero Sections**: Full-screen with floating vegetable overlays
- **Cards**: Organic rounded corners (rounded-2xl) with subtle shadows
- **Buttons**: Earth-toned with soft hover transitions
- **Forms**: Natural styling with focus states matching brand colors

## Images
### Hero Images
- **Primary Hero**: Large panoramic kitchen/restaurant interior with warm lighting
- **Secondary Heroes**: Close-up shots of fresh, organic vegetables and prepared dishes

### Floating Vegetable Elements
Create professional cutout images with transparent backgrounds:
- **Carrots**: Multiple sizes (small, medium, large) with natural curves
- **Lettuce Leaves**: Fresh green with natural edges and texture
- **Tomatoes**: Vibrant red, various sizes including cherry tomatoes
- **Bell Peppers**: Colorful variety (red, yellow, green)
- **Herbs**: Basil, parsley sprigs for delicate accents

**Placement Strategy:**
- Float vegetables across hero sections with subtle parallax movement
- Scatter organically around text content, avoiding uniform patterns
- Use larger vegetables as focal points, smaller ones as supporting elements
- Ensure vegetables don't obstruct readability of text content

## Animation Guidelines
### Floating Vegetables
- **Movement**: Gentle, organic floating motion (2-4px vertical oscillation)
- **Parallax**: Different scroll speeds for depth (0.5x to 1.5x scroll rate)
- **Entrance**: Fade in with slight scale animation on scroll trigger
- **Responsiveness**: Scale vegetables appropriately for mobile (50-70% size)

### Scroll Animations
- **Hero Text**: Fade up with staggered timing
- **Vegetable Reveals**: Appear as user scrolls, creating discovery moments
- **Section Transitions**: Smooth crossfades between content sections

## Responsive Design
- **Desktop**: Full floating vegetable experience with complex parallax
- **Tablet**: Reduced vegetable count, simplified animations
- **Mobile**: Essential vegetables only, optimized for touch interaction
- **Performance**: Lazy loading for vegetable images, optimized file sizes

## Key Visual Elements
- **Glass Morphism**: Subtle blur effects on navigation and overlays
- **Organic Shapes**: Soft, natural curves throughout the design
- **Texture**: Subtle paper/canvas textures for backgrounds
- **Photography Style**: Natural lighting, authentic food styling, rustic presentation