/**
 * ParticleSystem - Simple star particle system with mouse repulsion
 * Manages individual star particles with mouse repulsion physics
 */

import { Particle } from './Particle';
import type {
  ParticleConfig,
  InteractionConfig,
  MousePosition,
  ConstellationBreakpointConfig,
} from './types';
import { PERFORMANCE_THRESHOLDS } from './constants';

/**
 * Simple star particle system
 */
export class ParticleSystem {
  private particles: Particle[] = [];
  private config: ConstellationBreakpointConfig;
  private canvasWidth: number;
  private canvasHeight: number;
  private lastQualityAdjustment: number = 0;
  private lastDebugLog: number = 0;

  constructor(
    width: number,
    height: number,
    config: ConstellationBreakpointConfig
  ) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.config = config;

    this.initializeParticles();
  }

  /**
   * Initialize all particles
   */
  private initializeParticles(): void {
    this.particles = [];
    const count = this.config.particles.count;

    for (let i = 0; i < count; i++) {
      const particle = new Particle(
        this.canvasWidth,
        this.canvasHeight,
        this.config.particles
      );
      this.particles.push(particle);
    }
  }

  /**
   * Update all particles
   */
  update(
    deltaTime: number,
    width: number,
    height: number,
    mousePos: MousePosition | null
  ): void {
    // DEBUG: Log update call (throttled to once per second)
    const now = performance.now();
    if (!this.lastDebugLog || now - this.lastDebugLog > 1000) {
      console.log('[ParticleSystem.update] Update called:', {
        deltaTime,
        canvasSize: { width, height },
        storedSize: { width: this.canvasWidth, height: this.canvasHeight },
        mousePos,
        interactionConfig: this.config.interaction,
        particleCount: this.particles.length
      });
      this.lastDebugLog = now;
    }

    // Update canvas dimensions if changed
    if (width !== this.canvasWidth || height !== this.canvasHeight) {
      this.resize(width, height);
    }

    // Update each particle with simple repulsion
    for (const particle of this.particles) {
      particle.update(
        deltaTime,
        this.canvasWidth,
        this.canvasHeight,
        mousePos,
        this.config.interaction
      );
    }
  }

  /**
   * Draw all particles (simple stars - no connections)
   */
  draw(ctx: CanvasRenderingContext2D, time: number, mousePos: MousePosition | null = null): void {
    // DEBUG: Draw mouse repel radius
    if (mousePos && this.config.interaction.enabled) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, this.config.interaction.radius || 150, 0, Math.PI * 2);
      ctx.stroke();

      // Draw crosshair at mouse position
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(mousePos.x - 10, mousePos.y);
      ctx.lineTo(mousePos.x + 10, mousePos.y);
      ctx.moveTo(mousePos.x, mousePos.y - 10);
      ctx.lineTo(mousePos.x, mousePos.y + 10);
      ctx.stroke();
      ctx.restore();
    }

    // Draw individual stars only
    for (const particle of this.particles) {
      particle.draw(ctx, this.config.particles, time);

      // DEBUG: Draw velocity vectors
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(particle.x + particle.vx * 10, particle.y + particle.vy * 10);
      ctx.stroke();
      ctx.restore();
    }
  }

  /**
   * Resize the particle system
   */
  resize(width: number, height: number): void {
    this.canvasWidth = width;
    this.canvasHeight = height;
  }

  /**
   * Adapt particle count based on performance
   */
  adaptQuality(currentFPS: number, timestamp: number): void {
    if (!this.config.performance.adaptiveQuality) return;

    if (timestamp - this.lastQualityAdjustment < PERFORMANCE_THRESHOLDS.adjustmentCooldown) {
      return;
    }

    const targetParticles = this.config.particles.count;
    const currentCount = this.particles.length;

    if (currentFPS < PERFORMANCE_THRESHOLDS.reduceFPS) {
      const newCount = Math.max(
        PERFORMANCE_THRESHOLDS.minParticles,
        Math.floor(currentCount * (1 - PERFORMANCE_THRESHOLDS.adjustmentRate))
      );

      if (newCount < currentCount) {
        this.setParticleCount(newCount);
        this.lastQualityAdjustment = timestamp;
        console.log(`[ParticleSystem] Reduced particles: ${currentCount} → ${newCount} (FPS: ${currentFPS.toFixed(1)})`);
      }
    } else if (currentFPS > PERFORMANCE_THRESHOLDS.increaseFPS && currentCount < targetParticles) {
      const newCount = Math.min(
        targetParticles,
        Math.floor(currentCount * (1 + PERFORMANCE_THRESHOLDS.adjustmentRate))
      );

      if (newCount > currentCount) {
        this.setParticleCount(newCount);
        this.lastQualityAdjustment = timestamp;
        console.log(`[ParticleSystem] Increased particles: ${currentCount} → ${newCount} (FPS: ${currentFPS.toFixed(1)})`);
      }
    }
  }

  /**
   * Set particle count
   */
  private setParticleCount(count: number): void {
    const currentCount = this.particles.length;

    if (count > currentCount) {
      const toAdd = count - currentCount;
      for (let i = 0; i < toAdd; i++) {
        const particle = new Particle(
          this.canvasWidth,
          this.canvasHeight,
          this.config.particles
        );
        this.particles.push(particle);
      }
    } else if (count < currentCount) {
      this.particles = this.particles.slice(0, count);
    }
  }

  /**
   * Update configuration
   */
  updateConfig(config: ConstellationBreakpointConfig): void {
    const oldCount = this.config.particles.count;
    this.config = config;

    if (config.particles.count !== oldCount) {
      this.setParticleCount(config.particles.count);
    }
  }

  /**
   * Get current particle count
   */
  getParticleCount(): number {
    return this.particles.length;
  }

  /**
   * Get all particles (for debugging)
   */
  getParticles(): Particle[] {
    return this.particles;
  }

  /**
   * Draw debug information
   */
  drawDebug(ctx: CanvasRenderingContext2D): void {
    // Draw particle debug info
    for (const particle of this.particles) {
      particle.drawDebug(ctx);
    }

    // Draw stats
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(10, 10, 200, 60);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = '12px monospace';
    ctx.fillText(`Particles: ${this.particles.length}`, 20, 30);
    ctx.fillText(`Star Field: Active`, 20, 50);
    ctx.restore();
  }

  /**
   * Destroy particle system
   */
  destroy(): void {
    this.particles = [];
  }
}
