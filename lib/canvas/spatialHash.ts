/**
 * SpatialHash - Optimized spatial partitioning for particle systems
 * Reduces neighbor search from O(n²) to O(n) by dividing space into a grid
 *
 * Instead of checking every particle against every other particle,
 * we only check particles in the same cell and adjacent cells (9 cells total)
 */

import type { ParticleState } from '@/components/ConstellationHero/types';

/**
 * Grid cell that contains particles
 */
interface Cell {
  particles: ParticleState[];
}

/**
 * SpatialHash grid for efficient particle lookups
 */
export class SpatialHash {
  private cellSize: number;
  private cols: number;
  private rows: number;
  private grid: Map<string, Cell>;
  private width: number;
  private height: number;

  /**
   * Create a spatial hash grid
   * @param width - Canvas width
   * @param height - Canvas height
   * @param cellSize - Size of each grid cell (should match connection distance)
   */
  constructor(width: number, height: number, cellSize: number) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.cols = Math.ceil(width / cellSize);
    this.rows = Math.ceil(height / cellSize);
    this.grid = new Map();
  }

  /**
   * Clear all particles from the grid
   */
  clear(): void {
    this.grid.clear();
  }

  /**
   * Update grid dimensions (call on canvas resize)
   */
  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.cols = Math.ceil(width / this.cellSize);
    this.rows = Math.ceil(height / this.cellSize);
    this.clear();
  }

  /**
   * Get grid cell coordinates for a position
   */
  private getCellCoords(x: number, y: number): { col: number; row: number } {
    const col = Math.floor(x / this.cellSize);
    const row = Math.floor(y / this.cellSize);
    return {
      col: Math.max(0, Math.min(col, this.cols - 1)),
      row: Math.max(0, Math.min(row, this.rows - 1)),
    };
  }

  /**
   * Get unique cell key for a cell coordinate
   */
  private getCellKey(col: number, row: number): string {
    return `${col},${row}`;
  }

  /**
   * Insert a particle into the grid
   */
  insert(particle: ParticleState): void {
    const { col, row } = this.getCellCoords(particle.x, particle.y);
    const key = this.getCellKey(col, row);

    let cell = this.grid.get(key);
    if (!cell) {
      cell = { particles: [] };
      this.grid.set(key, cell);
    }

    cell.particles.push(particle);
  }

  /**
   * Get all particles near a position (within radius)
   * Only searches the 9 cells around the position (3x3 grid)
   * This is the key optimization that reduces O(n²) to O(n)
   */
  getNearby(particle: ParticleState, radius: number): ParticleState[] {
    const nearby: ParticleState[] = [];
    const { col, row } = this.getCellCoords(particle.x, particle.y);

    // Calculate how many cells we need to check based on radius
    const cellRadius = Math.ceil(radius / this.cellSize);

    // Search in a square of cells around the particle
    for (let c = col - cellRadius; c <= col + cellRadius; c++) {
      for (let r = row - cellRadius; r <= row + cellRadius; r++) {
        // Skip cells outside the grid
        if (c < 0 || c >= this.cols || r < 0 || r >= this.rows) {
          continue;
        }

        const key = this.getCellKey(c, r);
        const cell = this.grid.get(key);

        if (cell) {
          // Add all particles from this cell
          // We'll filter by actual distance in the calling code
          nearby.push(...cell.particles);
        }
      }
    }

    return nearby;
  }

  /**
   * Get all particles in a specific cell (for debugging/visualization)
   */
  getCell(col: number, row: number): ParticleState[] {
    const key = this.getCellKey(col, row);
    const cell = this.grid.get(key);
    return cell ? cell.particles : [];
  }

  /**
   * Get all non-empty cells (for debugging/visualization)
   */
  getAllCells(): Array<{ col: number; row: number; particles: ParticleState[] }> {
    const cells: Array<{ col: number; row: number; particles: ParticleState[] }> = [];

    this.grid.forEach((cell, key) => {
      const [col, row] = key.split(',').map(Number);
      cells.push({ col, row, particles: cell.particles });
    });

    return cells;
  }

  /**
   * Get grid statistics (for debugging/performance monitoring)
   */
  getStats(): {
    totalCells: number;
    occupiedCells: number;
    totalParticles: number;
    avgParticlesPerCell: number;
    maxParticlesPerCell: number;
  } {
    let totalParticles = 0;
    let maxParticlesPerCell = 0;

    this.grid.forEach((cell) => {
      const count = cell.particles.length;
      totalParticles += count;
      maxParticlesPerCell = Math.max(maxParticlesPerCell, count);
    });

    return {
      totalCells: this.cols * this.rows,
      occupiedCells: this.grid.size,
      totalParticles,
      avgParticlesPerCell: this.grid.size > 0 ? totalParticles / this.grid.size : 0,
      maxParticlesPerCell,
    };
  }

  /**
   * Draw the grid for debugging (pass a canvas context)
   */
  drawDebugGrid(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)';
    ctx.lineWidth = 1;

    // Draw vertical lines
    for (let col = 0; col <= this.cols; col++) {
      const x = col * this.cellSize;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let row = 0; row <= this.rows; row++) {
      const y = row * this.cellSize;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }

    // Highlight occupied cells
    ctx.fillStyle = 'rgba(255, 255, 0, 0.1)';
    this.grid.forEach((cell, key) => {
      const [col, row] = key.split(',').map(Number);
      const x = col * this.cellSize;
      const y = row * this.cellSize;
      ctx.fillRect(x, y, this.cellSize, this.cellSize);

      // Draw particle count
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = '10px monospace';
      ctx.fillText(
        cell.particles.length.toString(),
        x + this.cellSize / 2 - 5,
        y + this.cellSize / 2 + 3
      );
      ctx.fillStyle = 'rgba(255, 255, 0, 0.1)';
    });

    ctx.restore();
  }
}

/**
 * Calculate distance between two points
 * Inlined for performance (used frequently in particle systems)
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculate squared distance between two points
 * Faster than distance() when you only need to compare distances
 * (avoids expensive sqrt operation)
 */
export function distanceSquared(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return dx * dx + dy * dy;
}
