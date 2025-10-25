# Homepage Restoration Instructions

This document contains instructions for restoring the "Where We Go" section and company logos that were temporarily removed from the homepage.

## What Was Removed

1. **Company Logos Array**: The `ALL_LOGOS` constant containing paths to company logo images
2. **"Where We Go" Section**: The entire section displaying company logos in a grid layout

## How to Restore

### Step 1: Restore the Company Logos Array

In `/app/page.tsx`, uncomment and restore the `ALL_LOGOS` array:

```javascript
// Replace this commented section:
// Company logos removed - see README.md for restoration instructions
// const ALL_LOGOS = [
//   "/logos/logoamazon.png",
//   "/logos/logonvidia.png",
//   "/logos/logometa.png",
//   "/logos/logogoogle.png",
//   "/logos/logocap1.png",
//   "/logos/logoatlassian.png",
//   "/logos/logoqualcomm.png",
//   "/logos/logotesla.png",
//   "/logos/logodeloitte.png",
//   "/logos/logoey.png",
//   "/logos/logokpmg.png",
//   "/logos/logopwc.png",
//   "/logos/logowf.png",
//   "/logos/logoNBA.png",
//   "/logos/logoSF.png",
// ];

// With this active code:
const ALL_LOGOS = [
  "/logos/logoamazon.png",
  "/logos/logonvidia.png",
  "/logos/logometa.png",
  "/logos/logogoogle.png",
  "/logos/logocap1.png",
  "/logos/logoatlassian.png",
  "/logos/logoqualcomm.png",
  "/logos/logotesla.png",
  "/logos/logodeloitte.png",
  "/logos/logoey.png",
  "/logos/logokpmg.png",
  "/logos/logopwc.png",
  "/logos/logowf.png",
  "/logos/logoNBA.png",
  "/logos/logoSF.png",
];
```

### Step 2: Restore the "Where We Go" Section

In `/app/page.tsx`, replace this comment:

```javascript
{/* Where We Go section removed - see README.md for restoration instructions */}
```

With this full section:

```javascript
<section className="bg-[#181818] pt-4 pb-16">
  <div className="mx-auto max-w-6xl text-left">
    <motion.h2
      className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Where We Go
    </motion.h2>
  </div>
  <div className="mx-auto max-w-6xl">
    <div className="grid grid-cols-5 gap-4 w-full">
      {ALL_LOGOS.map((src, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        const delay = (row + col) * 0.1;
        
        return (
          <motion.div
            key={`logo-${i}`}
            className="relative h-24 border border-white/10 hover:bg-white/[0.03] transition-colors p-4 flex items-center justify-center group"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: delay,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image 
              src={src} 
              alt="Company logo" 
              width={60} 
              height={40} 
              className="object-contain group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition"
            />
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
```

### Step 3: Verify Logo Files Exist

Ensure all logo files exist in the `/public/logos/` directory:
- logoamazon.png
- logonvidia.png
- logometa.png
- logogoogle.png
- logocap1.png
- logoatlassian.png
- logoqualcomm.png
- logotesla.png
- logodeloitte.png
- logoey.png
- logokpmg.png
- logopwc.png
- logowf.png
- logoNBA.png
- logoSF.png

## Notes

- The section uses Framer Motion for animations
- Logos are displayed in a 5-column grid
- Each logo has hover effects and staggered animations
- The section appears after the "What We Do" section and before the footer

## Testing

After restoration:
1. Check that all logos load properly
2. Verify animations work correctly
3. Test responsive behavior on different screen sizes
4. Ensure no console errors related to missing images

