# Mobile Video Sizing Test

## Expected Behavior on iPhone 15 Pro (393px width):

### Scene 1 (High-Performance Websites):
- Outer container padding: `px-6` = 24px (12px left + 12px right)
- Available width: 393px - 24px = **369px**
- Video width: **369px**

### Scene 2 (Scroll Stopping Creatives):
- Outer container padding: `px-2` = 8px (4px left + 4px right)
- Available width: 393px - 8px = **385px**
- Video width: **385px**
- **DIFFERENCE: 16px wider than Scene 1**

### Scene 3 (Precision Targeting):
- Outer container padding: `px-2` = 8px (4px left + 4px right)
- Available width: 393px - 8px = **385px**
- Video width: **385px**
- **DIFFERENCE: 16px wider than Scene 1**

## How to Verify in Browser:

1. Open Chrome DevTools on desktop
2. Toggle device toolbar (Cmd/Ctrl + Shift + M)
3. Select "iPhone 14 Pro" or custom 393px width
4. Navigate to the How It Works section
5. Inspect the video elements:
   - Scene 1 video should have computed width: 369px
   - Scene 2 video should have computed width: 385px
   - Scene 3 video should have computed width: 385px

## Debug Classes Applied:

**Scene 1:**
- Container: `py-32 px-6` ← DEFAULT padding
- Motion.div: `md:max-w-2xl w-full` ← No constraint on mobile

**Scenes 2 & 3:**
- Container: `py-32 px-2` ← REDUCED padding
- Motion.div: `md:max-w-4xl w-full` ← No constraint on mobile

## If Videos Are SAME Size:

Check these potential issues:
1. **Cache**: Hard refresh (Cmd/Ctrl + Shift + R) or clear browser cache
2. **Build**: Vercel deployment may not be complete (check deployment status)
3. **Tailwind**: JIT compilation may not have picked up the classes
4. **CSS Specificity**: Another style may be overriding the padding

## How to Check with Browser Inspector:

Right-click on each video → Inspect → Check:
- Parent div's padding values
- Computed width of video element
- Any overriding styles

The padding MUST be different:
- Scene 1: `padding-left: 24px; padding-right: 24px;`
- Scenes 2 & 3: `padding-left: 8px; padding-right: 8px;`
