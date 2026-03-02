# QUICK DEBUG REFERENCE - Mouse Repulsion

## 🚀 FASTEST PATH TO SOLUTION

### 1. Run the App (30 seconds)
```bash
npm run dev
```

### 2. Visual Check (10 seconds)
- Open page with constellation
- Move mouse over stars
- **Do you see a RED CIRCLE following your cursor?**
  - ✅ YES → Go to Step 3
  - ❌ NO → Mouse tracking broken, see Section A

### 3. Visual Movement Check (10 seconds)
- Move cursor near stars (inside red circle)
- **Do GREEN LINES point away from cursor?**
  - ✅ YES → Force is calculated, see Section B
  - ❌ NO → Force not calculated, see Section C

### 4. Stars Moving Check (10 seconds)
- Watch green lines get longer as stars accelerate
- **Do stars actually move away?**
  - ✅ YES → IT WORKS! 🎉
  - ❌ NO → Force too weak or damping too strong, see Section D

---

## SECTION A: No Red Circle Visible

**Diagnosis:** Mouse position not being tracked.

### Check Console (F12):
Do you see `[useMouseTracking]` logs?
- ❌ NO → Canvas not receiving mouse events
- ✅ YES → Drawing issue

### If NO logs:
**FIX:** Canvas pointer-events broken
1. Open DevTools → Elements
2. Find `<canvas class="constellation-canvas">`
3. Check Computed styles → `pointer-events`
4. Should be `auto`, not `none`
5. If `none`, check CSS overrides

### If YES logs:
**FIX:** Drawing disabled or mousePos not passed to draw
1. Check `ParticleSystem.ts` line 98
2. Verify `draw()` receives `mousePos` parameter
3. Check `useConstellationEngine.ts` line 109
4. Verify `systemRef.current.draw(ctx, currentTime, mousePos)`

---

## SECTION B: Green Lines Point Away But Stars Don't Move

**Diagnosis:** Force is calculated but not strong enough OR damping is too aggressive.

### Quick Test:
Open `Particle.ts` and change line 120:
```typescript
const strength = 100;  // Increase from 15 to 100
```

Refresh page. Do stars move now?
- ✅ YES → Original strength too weak, keep higher value
- ❌ NO → Damping issue, see below

### If still not moving:
Edit `Particle.ts` line 147:
```typescript
const damping = 0.995;  // Increase from 0.98
```

---

## SECTION C: Green Lines Don't Point Away

**Diagnosis:** Force calculation not executing or distance check failing.

### Check Console:
Look for `[Particle.update] Distance calculation` logs.
- ❌ NO logs → Mouse position not reaching particles
- ✅ YES logs → Check values

### If NO logs:
Check `[Particle.update]` for `mousePos` value:
- If `null` → Mouse position not passed correctly
- If valid → `interactionEnabled` might be false

### If logs show `isWithinRadius: false`:
**Problem:** Coordinate space mismatch
1. Note `mousePos` values (e.g., x: 800, y: 450)
2. Note `particlePos` values (e.g., x: 100, y: 50)
3. If on different scales, coordinates are mismatched

**FIX:** Check `getBoundingClientRect()`:
```javascript
// In browser console:
const canvas = document.querySelector('.constellation-canvas');
console.log(canvas.getBoundingClientRect());
```
- If `left` and `top` are large, canvas is offset
- Mouse coords already account for this (we subtract offset)
- But particles might be in wrong coordinate space

---

## SECTION D: Force Calculations Look Good But No Movement

**Diagnosis:** Check if velocity change is actually happening.

### Check Console:
Look for `[Particle.update] Force applied` logs:
```
velocityChange: { dvx: 11.73, dvy: 4.97 }
newVelocity: { vx: 11.78, vy: 4.94 }
```

**Is dvx/dvy > 1.0?**
- ✅ YES → Force is strong enough
- ❌ NO → Force too weak, increase strength

**Is newVelocity much larger than ~0.05?**
- ✅ YES → Velocity updated correctly
- ❌ NO → Velocity not updating

### If velocity values look good but no visual movement:
**Problem:** Position not updating OR visual scale too small

1. Check `dt` value in logs (should be ~1.0)
2. Check if `damping` kills velocity immediately (should be 0.98)
3. Increase strength to make effect more obvious

---

## 🔧 EMERGENCY FIXES

### Nuclear Option #1: Force Everything On
Edit `Particle.ts` lines 119-126:
```typescript
const strength = 100;     // VERY OBVIOUS EFFECT
this.vx += dirX * force * strength * 5;  // Multiply by 5
this.vy += dirY * force * strength * 5;
```

### Nuclear Option #2: Disable Damping
Edit `Particle.ts` line 147-149:
```typescript
const damping = 1.0;  // NO DAMPING AT ALL
this.vx *= damping;
this.vy *= damping;
```

### Nuclear Option #3: Increase Repel Radius
Edit `Particle.ts` line 95:
```typescript
const repelRadius = 300;  // DOUBLE the radius
```

**Try ONE nuclear option at a time, refresh, test.**

---

## 📊 CONSOLE LOG REFERENCE

### GOOD OUTPUT (Everything Working):
```
[useMouseTracking] Mouse position: { x: 800, y: 450 }
[useMouseTracking] Return value: { isHovering: true, mousePos: {...} }
[useConstellationEngine.animate] mousePos: { x: 800, y: 450 }
[ParticleSystem.update] mousePos: { x: 800, y: 450 }
[Particle.update] mousePos: { x: 800, y: 450 }, interactionEnabled: true
[Particle.update] Distance calculation: { distance: 85, isWithinRadius: true }
[Particle.update] Force applied: { dvx: 8.5, dvy: 3.2 }
```

### BAD OUTPUT #1 (Mouse Not Tracked):
```
(no logs appear)
```
**Fix:** Canvas pointer events issue

### BAD OUTPUT #2 (Mouse Not Passed):
```
[useMouseTracking] Return value: { isHovering: true, mousePos: {...} }
[useConstellationEngine.animate] mousePos: null
```
**Fix:** Hook dependency or prop passing issue

### BAD OUTPUT #3 (Interaction Disabled):
```
[Particle.update] interactionEnabled: false
```
**Fix:** Config has interaction.enabled = false

### BAD OUTPUT #4 (Never Within Radius):
```
[Particle.update] Distance calculation: { distance: 1500, isWithinRadius: false }
```
**Fix:** Coordinate space mismatch or particles too far away

### BAD OUTPUT #5 (Force Too Weak):
```
[Particle.update] Force applied: { dvx: 0.05, dvy: 0.02 }
```
**Fix:** Increase strength value

---

## 🎯 MOST LIKELY ISSUES (In Order)

### 1️⃣ Canvas pointer-events disabled (40% chance)
**Quick Test:** Add `cursor: 'crosshair'` to canvas style, see if cursor changes
**Quick Fix:** Verify `pointerEvents: 'auto'` in ConstellationCanvas.tsx line 90

### 2️⃣ Interaction disabled in config (30% chance)
**Quick Test:** Check console for `interactionEnabled: false`
**Quick Fix:** Add `interaction: { ...config.interaction, enabled: true }` override

### 3️⃣ Mouse position not passed to particles (20% chance)
**Quick Test:** Check console logs at each stage for `mousePos: null`
**Quick Fix:** Verify all function calls pass `mousePos` parameter

### 4️⃣ Force too weak to see (5% chance)
**Quick Test:** Increase strength to 100 and test
**Quick Fix:** Adjust strength value in Particle.ts

### 5️⃣ Coordinate space mismatch (5% chance)
**Quick Test:** Compare particle positions to mouse positions in logs
**Quick Fix:** Usually getBoundingClientRect handles this correctly

---

## 🧪 TEST COMMANDS (Run in Browser Console)

### Test 1: Check Canvas Element
```javascript
const canvas = document.querySelector('.constellation-canvas');
console.log('Canvas:', {
  exists: !!canvas,
  pointerEvents: getComputedStyle(canvas).pointerEvents,
  zIndex: getComputedStyle(canvas).zIndex,
  rect: canvas.getBoundingClientRect()
});
```

### Test 2: Check Mouse Events
```javascript
const canvas = document.querySelector('.constellation-canvas');
canvas.addEventListener('mousemove', (e) => {
  console.log('MOUSE EVENT:', e.clientX, e.clientY);
});
// Move mouse over canvas - should see logs
```

### Test 3: Check Configuration
```javascript
// This only works if you expose config globally for debugging
// Add to ConstellationCanvas.tsx: window.__debugConfig = finalConfig;
console.log('Config:', window.__debugConfig);
```

---

## 🎉 SUCCESS CRITERIA

When working correctly, you should see:

**Visual:**
- ⭕ Red circle follows cursor (150px radius)
- ➕ Red crosshair at cursor center
- ➡️ Green lines from stars point AWAY from cursor when within red circle
- 🏃 Stars accelerate smoothly away from cursor
- 🐌 Stars slowly drift when cursor is far away

**Console:**
- All log stages show valid mousePos
- `interactionEnabled: true`
- `isWithinRadius: true` when cursor is near stars
- `velocityChange` values > 1.0 when force applied
- No JavaScript errors

**Behavior:**
- Natural, smooth repulsion
- Effect increases when cursor is closer
- Stars drift back to slow movement when cursor leaves

---

## 📞 STILL NOT WORKING?

Take screenshots of:
1. Browser console (with all log levels visible)
2. Canvas with red circle and green lines visible
3. DevTools Elements tab showing canvas computed styles

The logs will show EXACTLY where the failure occurs.

### Share:
- Browser and OS
- Viewport dimensions (shown in performance monitor)
- Screenshots above
- Which quick fix you tried

This will allow for precise diagnosis.
