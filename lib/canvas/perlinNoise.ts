/**
 * Perlin Noise Generator - Creates organic, natural-looking noise patterns
 * Used for flow field generation to guide particle movement
 * Based on Ken Perlin's improved noise algorithm
 */

/**
 * Perlin Noise class for generating smooth, continuous random values
 */
export class PerlinNoise {
  private permutation: number[];
  private p: number[];

  constructor(seed?: number) {
    // Initialize permutation table
    this.permutation = [];
    for (let i = 0; i < 256; i++) {
      this.permutation[i] = i;
    }

    // Shuffle using seed for reproducible noise
    if (seed !== undefined) {
      this.shuffle(seed);
    } else {
      this.shuffle(Math.random() * 65536);
    }

    // Duplicate permutation table to avoid overflow
    this.p = [];
    for (let i = 0; i < 512; i++) {
      this.p[i] = this.permutation[i % 256];
    }
  }

  /**
   * Shuffle permutation table with seed
   */
  private shuffle(seed: number): void {
    // Seeded random number generator
    let random = this.seededRandom(seed);

    for (let i = this.permutation.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [this.permutation[i], this.permutation[j]] = [this.permutation[j], this.permutation[i]];
    }
  }

  /**
   * Seeded random number generator
   */
  private seededRandom(seed: number): () => number {
    return function() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }

  /**
   * Fade function for smooth interpolation (6t^5 - 15t^4 + 10t^3)
   */
  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  /**
   * Linear interpolation
   */
  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  /**
   * Calculate gradient for a given hash and coordinates
   */
  private grad(hash: number, x: number, y: number, z: number = 0): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  /**
   * 2D Perlin noise - returns value between -1 and 1
   */
  noise2D(x: number, y: number): number {
    // Find unit cube that contains point
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;

    // Find relative x, y in cube
    x -= Math.floor(x);
    y -= Math.floor(y);

    // Compute fade curves
    const u = this.fade(x);
    const v = this.fade(y);

    // Hash coordinates of the 4 cube corners
    const aa = this.p[this.p[X] + Y];
    const ab = this.p[this.p[X] + Y + 1];
    const ba = this.p[this.p[X + 1] + Y];
    const bb = this.p[this.p[X + 1] + Y + 1];

    // Blend results from corners
    return this.lerp(
      v,
      this.lerp(u, this.grad(aa, x, y), this.grad(ba, x - 1, y)),
      this.lerp(u, this.grad(ab, x, y - 1), this.grad(bb, x - 1, y - 1))
    );
  }

  /**
   * 3D Perlin noise - returns value between -1 and 1
   * Used for time-varying flow fields
   */
  noise3D(x: number, y: number, z: number): number {
    // Find unit cube that contains point
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    // Find relative x, y, z in cube
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    // Compute fade curves
    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    // Hash coordinates of the 8 cube corners
    const aaa = this.p[this.p[this.p[X] + Y] + Z];
    const aba = this.p[this.p[this.p[X] + Y + 1] + Z];
    const aab = this.p[this.p[this.p[X] + Y] + Z + 1];
    const abb = this.p[this.p[this.p[X] + Y + 1] + Z + 1];
    const baa = this.p[this.p[this.p[X + 1] + Y] + Z];
    const bba = this.p[this.p[this.p[X + 1] + Y + 1] + Z];
    const bab = this.p[this.p[this.p[X + 1] + Y] + Z + 1];
    const bbb = this.p[this.p[this.p[X + 1] + Y + 1] + Z + 1];

    // Blend results from 8 corners
    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(u, this.grad(aaa, x, y, z), this.grad(baa, x - 1, y, z)),
        this.lerp(u, this.grad(aba, x, y - 1, z), this.grad(bba, x - 1, y - 1, z))
      ),
      this.lerp(
        v,
        this.lerp(u, this.grad(aab, x, y, z - 1), this.grad(bab, x - 1, y, z - 1)),
        this.lerp(u, this.grad(abb, x, y - 1, z - 1), this.grad(bbb, x - 1, y - 1, z - 1))
      )
    );
  }

  /**
   * Octave noise - layers multiple frequencies for more detail
   * Returns value between -1 and 1
   */
  octaveNoise2D(
    x: number,
    y: number,
    octaves: number = 4,
    persistence: number = 0.5,
    lacunarity: number = 2.0
  ): number {
    let total = 0;
    let frequency = 1;
    let amplitude = 1;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      total += this.noise2D(x * frequency, y * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }

    return total / maxValue;
  }
}

/**
 * Flow Field - Grid of directional vectors based on Perlin noise
 */
export class FlowField {
  private noise: PerlinNoise;
  private field: Float32Array;
  private cols: number;
  private rows: number;
  private resolution: number;
  private noiseScale: number;
  private timeOffset: number;

  constructor(
    width: number,
    height: number,
    resolution: number = 20,
    noiseScale: number = 0.01
  ) {
    this.noise = new PerlinNoise();
    this.resolution = resolution;
    this.noiseScale = noiseScale;
    this.timeOffset = 0;

    this.cols = Math.ceil(width / resolution);
    this.rows = Math.ceil(height / resolution);
    this.field = new Float32Array(this.cols * this.rows * 2); // x, y for each cell

    this.generate();
  }

  /**
   * Generate flow field from Perlin noise
   */
  private generate(): void {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const index = (y * this.cols + x) * 2;

        // Get noise value and map to angle
        const noiseValue = this.noise.noise3D(
          x * this.noiseScale,
          y * this.noiseScale,
          this.timeOffset
        );

        // Convert noise (-1 to 1) to angle (0 to 2π)
        const angle = noiseValue * Math.PI * 2;

        // Store as unit vector
        this.field[index] = Math.cos(angle);
        this.field[index + 1] = Math.sin(angle);
      }
    }
  }

  /**
   * Update flow field (for animated flow)
   */
  update(deltaTime: number, speed: number = 0.0002): void {
    this.timeOffset += deltaTime * speed;
    this.generate();
  }

  /**
   * Get flow direction at a specific position
   */
  getFlow(x: number, y: number): { x: number; y: number } {
    const col = Math.floor(x / this.resolution);
    const row = Math.floor(y / this.resolution);

    // Clamp to field boundaries
    const clampedCol = Math.max(0, Math.min(col, this.cols - 1));
    const clampedRow = Math.max(0, Math.min(row, this.rows - 1));

    const index = (clampedRow * this.cols + clampedCol) * 2;

    return {
      x: this.field[index],
      y: this.field[index + 1],
    };
  }

  /**
   * Resize flow field
   */
  resize(width: number, height: number): void {
    this.cols = Math.ceil(width / this.resolution);
    this.rows = Math.ceil(height / this.resolution);
    this.field = new Float32Array(this.cols * this.rows * 2);
    this.generate();
  }

  /**
   * Draw flow field for debugging
   */
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.lineWidth = 1;

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const index = (y * this.cols + x) * 2;
        const fx = this.field[index];
        const fy = this.field[index + 1];

        const px = x * this.resolution + this.resolution / 2;
        const py = y * this.resolution + this.resolution / 2;

        const length = 10;

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + fx * length, py + fy * length);
        ctx.stroke();
      }
    }

    ctx.restore();
  }
}
