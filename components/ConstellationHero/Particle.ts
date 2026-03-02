/**
 * Particle - Simple star particle with mouse repulsion
 * Implements research-backed physics for professional star field effect
 */

import type {
  ParticleState,
  ParticleConfig,
  InteractionConfig,
  MousePosition,
} from './types';

/**
 * Generate a unique particle ID
 */
let particleIdCounter = 0;
function generateParticleId(): string {
  return `particle_${particleIdCounter++}`;
}

/**
 * Simple star particle with mouse repulsion
 */
export class Particle implements ParticleState {
  // Position
  x: number;
  y: number;

  // Velocity (very small for barely-moving effect)
  vx: number;
  vy: number;

  // Properties
  radius: number;
  baseRadius: number;
  baseSpeed: number;
  id: string;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    config: ParticleConfig
  ) {
    this.id = generateParticleId();

    // Random position
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;

    // Very slow idle velocity for barely-moving stars
    const idleSpeed = 0.05; // px/frame - barely perceptible
    const angle = Math.random() * Math.PI * 2;

    this.vx = Math.cos(angle) * idleSpeed;
    this.vy = Math.sin(angle) * idleSpeed;

    this.baseSpeed = idleSpeed;
    this.baseRadius = config.minRadius + Math.random() * (config.maxRadius - config.minRadius);
    this.radius = this.baseRadius;
  }

  /**
   * Update particle with simple mouse repulsion
   */
  update(
    deltaTime: number,
    canvasWidth: number,
    canvasHeight: number,
    mousePos: MousePosition | null,
    interactionConfig: InteractionConfig
  ): void {
    const dt = Math.min(deltaTime, 16.67) / 16.67;

    // DEBUG: Log update parameters for first particle only
    if (this.id === 'particle_0') {
      console.log('[Particle.update] ID:', this.id, {
        position: { x: this.x, y: this.y },
        velocity: { vx: this.vx, vy: this.vy },
        mousePos,
        interactionEnabled: interactionConfig.enabled,
        interactionRadius: interactionConfig.radius,
        canvasSize: { width: canvasWidth, height: canvasHeight },
        deltaTime,
        dt
      });
    }

    // Simple mouse repulsion ONLY
    if (mousePos && interactionConfig.enabled) {
      const dx = this.x - mousePos.x;
      const dy = this.y - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Repel radius from config
      const repelRadius = interactionConfig.radius || 150;

      // DEBUG: Log distance calculation for first particle
      if (this.id === 'particle_0') {
        console.log('[Particle.update] Distance calculation:', {
          particlePos: { x: this.x, y: this.y },
          mousePos: { x: mousePos.x, y: mousePos.y },
          dx,
          dy,
          distance,
          repelRadius,
          isWithinRadius: distance < repelRadius
        });
      }

      if (distance < repelRadius && distance > 0) {
        // Squared falloff for smooth, natural repulsion
        const force = Math.pow((repelRadius - distance) / repelRadius, 2);

        // Normalize direction
        const dirX = dx / distance;
        const dirY = dy / distance;

        // Apply repulsion force - INCREASED from 0.5 to 15 based on research
        // Working examples use 10-50 for visible repulsion
        const strength = 15;

        const oldVx = this.vx;
        const oldVy = this.vy;

        this.vx += dirX * force * strength * dt; // Multiply by dt for framerate independence
        this.vy += dirY * force * strength * dt;

        // DEBUG: Log force application for first particle
        if (this.id === 'particle_0') {
          console.log('[Particle.update] Force applied:', {
            force,
            direction: { dirX, dirY },
            strength,
            dt,
            velocityChange: {
              dvx: this.vx - oldVx,
              dvy: this.vy - oldVy
            },
            newVelocity: { vx: this.vx, vy: this.vy }
          });
        }
      }
    }

    // Damping factor - CHANGED from 0.95 to 0.98 (retains velocity longer)
    // 0.98 allows particles to retain ~30% velocity after 1 second vs only 5% with 0.95
    const damping = 0.98;
    this.vx *= damping;
    this.vy *= damping;

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Handle boundaries
    this.handleBoundaries(canvasWidth, canvasHeight);
  }

  /**
   * Handle particle boundaries (wrap around)
   */
  private handleBoundaries(width: number, height: number): void {
    // Wrap around screen edges
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  /**
   * Draw simple star with glow
   */
  draw(
    ctx: CanvasRenderingContext2D,
    config: ParticleConfig,
    time: number = 0
  ): void {
    ctx.save();

    // Subtle pulsing effect for alive feeling
    const pulse = 1 + Math.sin(time * 0.001 + this.x * 0.01) * 0.08;
    const drawRadius = this.radius * pulse;

    // Outer glow (static intensity - no mouse effects)
    const glowRadius = config.glowIntensity;
    if (glowRadius > 0) {
      const outerGradient = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        drawRadius + glowRadius
      );

      // Teal glow with smooth falloff
      outerGradient.addColorStop(0, `rgba(95, 169, 159, ${config.opacity})`);
      outerGradient.addColorStop(0.2, `rgba(95, 169, 159, ${config.opacity * 0.7})`);
      outerGradient.addColorStop(0.5, `rgba(95, 169, 159, ${config.opacity * 0.3})`);
      outerGradient.addColorStop(1, 'rgba(95, 169, 159, 0)');

      ctx.globalAlpha = 1;
      ctx.fillStyle = outerGradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, drawRadius + glowRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Bright core with white center
    const coreGradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      drawRadius
    );

    coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    coreGradient.addColorStop(0.4, `rgba(95, 169, 159, ${config.opacity})`);
    coreGradient.addColorStop(1, `rgba(95, 169, 159, ${config.opacity * 0.5})`);

    ctx.globalAlpha = config.opacity;
    ctx.fillStyle = coreGradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, drawRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  /**
   * Get particle state
   */
  getState(): ParticleState {
    return {
      x: this.x,
      y: this.y,
      vx: this.vx,
      vy: this.vy,
      radius: this.radius,
      baseSpeed: this.baseSpeed,
      id: this.id,
    };
  }

  /**
   * Calculate distance to another particle
   */
  distanceTo(other: Particle | ParticleState): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Calculate squared distance to another particle (faster)
   */
  distanceSquaredTo(other: Particle | ParticleState): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return dx * dx + dy * dy;
  }

  /**
   * Draw debug information
   */
  drawDebug(ctx: CanvasRenderingContext2D): void {
    ctx.save();

    // Draw velocity vector
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.vx * 20, this.y + this.vy * 20);
    ctx.stroke();

    ctx.restore();
  }

  /**
   * Reset particle
   */
  reset(canvasWidth: number, canvasHeight: number, config: ParticleConfig): void {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;

    const speed = config.minSpeed + Math.random() * (config.maxSpeed - config.minSpeed);
    const angle = Math.random() * Math.PI * 2;

    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.baseSpeed = speed;

    this.baseRadius = config.minRadius + Math.random() * (config.maxRadius - config.minRadius);
    this.radius = this.baseRadius;
  }
}
