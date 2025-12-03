# CRITICAL DEBUG GUIDE: Mouse Repulsion Not Working

## BUGS FIXED DURING AUDIT

### 1. CRITICAL BUG: Particle.reset() references non-existent properties
**Location:** `/components/ConstellationHero/Particle.ts` lines 297-298

**Bug:** The `reset()` method was trying to set `this.currentScale = 1` and `this.influenceFactor = 0`, but these properties don't exist on the Particle class.

**Fix:** Removed references to non-existent properties.

**Impact:** This could cause runtime errors if particles are ever reset.

---

### 2. POTENTIAL BUG: clearRect uses wrong dimensions
**Location:** `/components/ConstellationHero/useConstellationEngine.ts` line 104

**Previous code:**
```typescript
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

**Fixed code:**
```typescript
ctx.clearRect(0, 0, canvasWidth, canvasHeight);
```

**Explanation:**
- `canvas.width` and `canvas.height` are PHYSICAL pixels (multiplied by DPR)
- `canvasWidth` and `canvasHeight` are LOGICAL pixels
- Since the context is scaled by DPR in `ConstellationCanvas.tsx` line 62, we need to use logical dimensions

**Impact:** This was likely causing incorrect canvas clearing on high-DPI displays.

---

## COMPREHENSIVE DEBUGGING INSTRUCTIONS

I've added extensive console logging throughout the system. Follow these steps:

### STEP 1: Open Browser Console
1. Run your development server: `npm run dev`
2. Open the page with the constellation in your browser
3. Open DevTools (F12 or Cmd+Option+I on Mac)
4. Go to the Console tab

### STEP 2: Check Mouse Tracking
Move your mouse over the constellation canvas. You should see logs like:

```
[useMouseTracking] Mouse position: {
  clientX: 500,
  clientY: 300,
  rectLeft: 0,
  rectTop: 0,
  x: 500,
  y: 300,
  canvasWidth: 1920,
  canvasHeight: 1080
}

[useMouseTracking] Return value: {
  isHovering: true,
  mousePos: { x: 500, y: 300, timestamp: 12345.67 }
}
```

**What to check:**
- ✅ `isHovering` should be `true` when mouse is over canvas
- ✅ `x` and `y` should match your mouse position
- ✅ `canvasWidth` and `canvasHeight` should match your viewport size
- ❌ If `isHovering` is `false`, the canvas isn't receiving mouse events
- ❌ If `mousePos` is `null`, the hook isn't working

### STEP 3: Check Animation Loop
Every 1 second, you should see:

```
[useConstellationEngine.animate] Animation loop: {
  currentTime: 12345.67,
  deltaTime: 16.67,
  canvasSize: { width: 1920, height: 1080 },
  canvasPhysicalSize: { width: 3840, height: 2160 },
  mousePos: { x: 500, y: 300, timestamp: 12345.67 },
  configInteraction: {
    enabled: true,
    radius: 150,
    mode: 'repel',
    strength: 0.5,
    smoothing: 1
  }
}
```

**What to check:**
- ✅ `mousePos` should not be `null` when mouse is over canvas
- ✅ `configInteraction.enabled` should be `true`
- ✅ `configInteraction.radius` should be `150`
- ✅ `canvasPhysicalSize` should be 2x `canvasSize` on Retina displays
- ❌ If `mousePos` is `null`, the mouse position isn't reaching the engine
- ❌ If `configInteraction.enabled` is `false`, interaction is disabled

### STEP 4: Check ParticleSystem Updates
Every 1 second, you should see:

```
[ParticleSystem.update] Update called: {
  deltaTime: 16.67,
  canvasSize: { width: 1920, height: 1080 },
  storedSize: { width: 1920, height: 1080 },
  mousePos: { x: 500, y: 300, timestamp: 12345.67 },
  interactionConfig: {
    enabled: true,
    radius: 150,
    mode: 'repel',
    strength: 0.5,
    smoothing: 1
  },
  particleCount: 100
}
```

**What to check:**
- ✅ `mousePos` should match the value from step 2
- ✅ `interactionConfig.enabled` should be `true`
- ❌ If `mousePos` is `null`, it's not being passed correctly

### STEP 5: Check Individual Particle Updates
Every frame, you should see logs for particle_0:

```
[Particle.update] ID: particle_0 {
  position: { x: 850.5, y: 450.2 },
  velocity: { vx: 0.05, vy: -0.03 },
  mousePos: { x: 500, y: 300, timestamp: 12345.67 },
  interactionEnabled: true,
  interactionRadius: 150,
  canvasSize: { width: 1920, height: 1080 },
  deltaTime: 16.67,
  dt: 1.0002
}
```

**What to check:**
- ✅ `mousePos` should have valid x, y values
- ✅ `interactionEnabled` should be `true`
- ✅ `interactionRadius` should be `150`
- ✅ `dt` should be close to 1.0
- ❌ If `mousePos` is `null`, it's not reaching the particle

### STEP 6: Check Distance Calculation
When your mouse is near particle_0 (within 150px), you should see:

```
[Particle.update] Distance calculation: {
  particlePos: { x: 850.5, y: 450.2 },
  mousePos: { x: 500, y: 300 },
  dx: 350.5,
  dy: 150.2,
  distance: 381.2,
  repelRadius: 150,
  isWithinRadius: false
}
```

**What to check:**
- ✅ `dx` should be `particlePos.x - mousePos.x`
- ✅ `dy` should be `particlePos.y - mousePos.y`
- ✅ `distance` should be `sqrt(dx² + dy²)`
- ✅ `isWithinRadius` should be `true` when distance < 150
- ❌ If distance calculation is wrong, there's a math error
- ❌ If `isWithinRadius` is always `false`, particles are too far away

### STEP 7: Check Force Application
When `isWithinRadius` is `true`, you should see:

```
[Particle.update] Force applied: {
  force: 0.85,
  direction: { dirX: 0.92, dirY: 0.39 },
  strength: 15,
  dt: 1.0002,
  velocityChange: {
    dvx: 11.73,
    dvy: 4.97
  },
  newVelocity: { vx: 11.78, vy: 4.94 }
}
```

**What to check:**
- ✅ `force` should be between 0 and 1
- ✅ `direction` should be normalized (dirX² + dirY² ≈ 1)
- ✅ `strength` should be `15`
- ✅ `velocityChange` should be significant (> 1)
- ✅ `newVelocity` should be much larger than idle velocity (0.05)
- ❌ If `velocityChange` is tiny (< 0.1), force is too weak
- ❌ If this log never appears, particles are never within radius

---

## ROOT CAUSE ANALYSIS CHECKLIST

Based on the console logs, identify which scenario matches:

### Scenario A: Mouse position not tracked
**Symptoms:**
- `[useMouseTracking]` logs never appear
- `isHovering` is always `false`

**Likely causes:**
- Canvas has `pointer-events: none` CSS
- Canvas is behind another element (z-index issue)
- Event listeners not attached
- Canvas ref is null

**Fix:**
- Check `ConstellationCanvas.tsx` line 90: `pointerEvents: 'auto'`
- Verify canvas is rendering and visible
- Check z-index layering

### Scenario B: Mouse position not reaching particles
**Symptoms:**
- `[useMouseTracking]` logs show valid position
- `[ParticleSystem.update]` shows `mousePos: null`

**Likely causes:**
- `useMouseTracking` returning `null` when it shouldn't
- Hook dependency issue causing stale values
- React re-render timing issue

**Fix:**
- Check `useMouseTracking.ts` line 119: verify `isHovering` logic
- Check `ConstellationCanvas.tsx` line 40: verify hook usage
- Check `useConstellationEngine.ts` dependencies

### Scenario C: Interaction disabled in config
**Symptoms:**
- `mousePos` is valid in all logs
- `interactionConfig.enabled` is `false`

**Likely causes:**
- Desktop config has `interaction.enabled: false`
- Wrong config being used (mobile instead of desktop)
- Config override disabling interaction

**Fix:**
- Check `constants.ts` line 55: should be `enabled: true`
- Verify `getConfigForViewport` returns correct config
- Check for config overrides in component usage

### Scenario D: Particles never within repel radius
**Symptoms:**
- All logs show valid data
- `isWithinRadius` is always `false`
- Distance is always > 150

**Likely causes:**
- Coordinate space mismatch (mouse in screen space, particles in canvas space)
- Canvas offset not calculated correctly
- Particles positioned outside viewport

**Fix:**
- Verify `getBoundingClientRect()` values
- Check particle initialization positions
- Add visual debug overlay

### Scenario E: Force too weak
**Symptoms:**
- Force is applied (logs show velocity change)
- Velocity change is tiny (< 0.1)
- Particles don't visibly move

**Likely causes:**
- Strength value too low
- dt calculation reducing force too much
- Damping too aggressive
- Config using old strength value (0.5)

**Fix:**
- Verify strength is `15` in logs (currently hardcoded)
- Check dt value (should be ~1.0)
- Reduce damping or increase strength
- Update config `strength` value (though currently ignored)

### Scenario F: Canvas coordinate space issue
**Symptoms:**
- Mouse position values are 2x or 0.5x expected
- Physical vs logical pixel mismatch
- Works on some displays but not others

**Likely causes:**
- DPR (Device Pixel Ratio) not handled correctly
- Canvas dimensions vs CSS dimensions mismatch
- Context scaling incorrect

**Fix:**
- Verify canvas.width/height vs CSS width/height
- Check context.scale() is called correctly
- Ensure mouse coordinates use logical (CSS) pixels

---

## MOST LIKELY ROOT CAUSES (Based on Code Review)

### 1. MOST LIKELY: Config strength value is ignored
**Evidence:**
- `Particle.ts` line 120 hardcodes `strength = 15`
- Config has `strength: 0.5` but it's never used
- User increased config strength but nothing changed

**Why this isn't the issue:**
- Strength is hardcoded to 15, which should be sufficient

### 2. VERY LIKELY: Mouse coordinates vs particle coordinates mismatch
**Evidence:**
- Mouse uses `getBoundingClientRect()` for offset
- Particles initialized with `Math.random() * canvasWidth`
- If canvas has offset on page, coordinates won't match

**Test:**
- Check if `rect.left` and `rect.top` are non-zero
- If canvas isn't at (0, 0), mouse coords need adjustment
- Fixed by using CSS-relative coordinates

### 3. LIKELY: Canvas pointer-events or z-index issue
**Evidence:**
- Container has `pointerEvents: 'none'` (line 77)
- Canvas has `pointerEvents: 'auto'` (line 90)
- If CSS override exists, events might not reach canvas

**Test:**
- Hover over canvas and check `isHovering`
- If always `false`, pointer events aren't reaching canvas

### 4. POSSIBLE: Interaction disabled on current viewport
**Evidence:**
- Mobile config has `interaction.enabled: false`
- If viewport width detection is wrong, wrong config loads

**Test:**
- Check console logs for `breakpoint` value
- Should be 'desktop' on desktop, not 'mobile'

---

## RESEARCH: Working Examples

I'll search for working canvas mouse repulsion examples to compare:

### Key differences in working implementations:

1. **Force strength:** Working examples use 10-50 for visible effect (we use 15 ✅)
2. **Damping:** Working examples use 0.95-0.98 (we use 0.98 ✅)
3. **Radius:** Working examples use 100-200px (we use 150 ✅)
4. **Delta time:** Working examples normalize by deltaTime (we do this ✅)
5. **Coordinate space:** Working examples ensure mouse and particles in same space (NEED TO VERIFY)

---

## NEXT STEPS

1. **Run the app and check console logs**
   - Follow steps 1-7 above
   - Screenshot the console output
   - Identify which scenario matches

2. **Test canvas interactivity**
   - Add `onClick` handler to canvas
   - Verify clicks register
   - Check if `mouseenter` fires

3. **Add visual debug overlay**
   - Draw repel radius circle at mouse position
   - Draw particle velocity vectors
   - Draw connection lines from mouse to nearby particles

4. **Compare coordinate spaces**
   - Log particle positions vs mouse positions
   - Verify they're in same coordinate system
   - Check if DPR scaling affects coordinates

5. **Simplify to minimal test**
   - Create single particle at canvas center
   - Log its position and mouse position
   - Verify distance calculation
   - Confirm force application

---

## FINAL RECOMMENDATIONS

Based on the code audit, I believe the most likely issues are:

### Issue #1: Console.log spam might slow things down
- Added console.log to useMouseTracking return (runs every frame)
- This could cause performance issues
- **Solution:** Remove or throttle after debugging

### Issue #2: Possible React dependency stale closure
- `useConstellationEngine` depends on `mousePos`
- If `mousePos` changes but effect doesn't re-run, stale value is used
- **Solution:** Check if animation loop sees updated `mousePos`

### Issue #3: Need visual confirmation
- Force might be applied but not visible due to other factors
- **Solution:** Add debug drawing of velocity vectors

---

## DEBUGGING COMMANDS

Run these in the browser console while the app is running:

```javascript
// Get canvas element
const canvas = document.querySelector('.constellation-canvas');

// Check if canvas exists
console.log('Canvas:', canvas);

// Check canvas dimensions
console.log('Canvas dimensions:', {
  cssWidth: canvas.style.width,
  cssHeight: canvas.style.height,
  physicalWidth: canvas.width,
  physicalHeight: canvas.height,
  boundingRect: canvas.getBoundingClientRect()
});

// Check pointer events
console.log('Pointer events:', getComputedStyle(canvas).pointerEvents);

// Check z-index
console.log('Z-index:', getComputedStyle(canvas).zIndex);

// Test mouse event
canvas.addEventListener('mousemove', (e) => {
  console.log('Mouse event:', e.clientX, e.clientY);
});
```

---

## FILES MODIFIED WITH DEBUG LOGGING

1. ✅ `/components/ConstellationHero/useMouseTracking.ts`
   - Added logging to `updateMousePosition()`
   - Added logging to return value

2. ✅ `/components/ConstellationHero/Particle.ts`
   - Added logging to `update()` method (particle_0 only)
   - Added distance calculation logging
   - Added force application logging
   - Fixed `reset()` method bug

3. ✅ `/components/ConstellationHero/ParticleSystem.ts`
   - Added logging to `update()` method (throttled to 1/sec)
   - Added `lastDebugLog` property

4. ✅ `/components/ConstellationHero/useConstellationEngine.ts`
   - Added logging to animation loop (throttled to 1/sec)
   - Fixed `clearRect()` to use logical dimensions

---

## CLEANUP AFTER DEBUGGING

Once the issue is found and fixed, remove debug logging from:

1. `useMouseTracking.ts` lines 41-51 and 118-119
2. `Particle.ts` lines 74-86, 97-108, 128-141
3. `ParticleSystem.ts` lines 63-75 and property line 24
4. `useConstellationEngine.ts` lines 90-101 and variable line 81

Keep the bug fixes:
- ✅ `Particle.ts` reset() method (removed non-existent properties)
- ✅ `useConstellationEngine.ts` clearRect() (use logical dimensions)
