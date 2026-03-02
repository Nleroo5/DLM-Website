'use client';

import { useRef, useEffect } from 'react';

export default function ParticleTextSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth < 768 ? 400 : 600; // Responsive height: 400px mobile, 600px desktop
      initializeParticles();
    };

    // Generate particle positions from text
    const createTextPositions = (): Array<{x: number, y: number}> => {
      const positions: Array<{x: number, y: number}> = [];
      const textCanvas = document.createElement('canvas');
      const textCtx = textCanvas.getContext('2d', { willReadFrequently: true });
      if (!textCtx) return positions;

      const text = canvas.width < 1440
        ? 'target your\nexact audience'
        : 'target your exact audience\nwithout wasting ad spend';
      const lines = text.split('\n');

      // Responsive font size
      let fontSize: number;
      if (canvas.width < 640) {
        fontSize = Math.min(canvas.width * 0.08, 50);
      } else if (canvas.width < 768) {
        fontSize = Math.min(canvas.width * 0.08, 60);
      } else if (canvas.width < 1024) {
        fontSize = Math.min(canvas.width * 0.075, 70);
      } else {
        fontSize = Math.min(canvas.width * 0.08, 72);
      }

      textCanvas.width = canvas.width;
      textCanvas.height = canvas.height;

      textCtx.font = `bold ${fontSize}px Arial, sans-serif`;
      textCtx.fillStyle = '#FFFFFF';
      textCtx.textAlign = 'center';
      textCtx.textBaseline = 'middle';

      const centerY = canvas.height * 0.5;
      const lineHeight = fontSize * 1.15; // Tighter line spacing for better readability
      const startY = centerY - ((lines.length - 1) * lineHeight) / 2;

      lines.forEach((line, index) => {
        const y = startY + index * lineHeight;
        textCtx.fillText(line, canvas.width / 2, y);
      });

      const imageData = textCtx.getImageData(0, 0, textCanvas.width, textCanvas.height);
      const pixels = imageData.data;

      const samplingRate = window.innerWidth < 768 ? 2 : 0.3; // Tighter spacing for better readability

      for (let y = 0; y < textCanvas.height; y += samplingRate) {
        for (let x = 0; x < textCanvas.width; x += samplingRate) {
          const index = (Math.floor(y) * textCanvas.width + Math.floor(x)) * 4;
          const alpha = pixels[index + 3];

          if (alpha > 128) {
            positions.push({ x, y });
          }
        }
      }

      return positions;
    };

    // Mouse tracking
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Particles
    let particles: Array<{x: number, y: number, targetX: number, targetY: number, vx: number, vy: number}> = [];

    const initializeParticles = () => {
      const textPositions = createTextPositions();
      const particleCount = Math.min(textPositions.length, window.innerWidth < 768 ? 0 : 8000); // Disabled on mobile, Desktop: 8000

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const targetPos = textPositions[Math.floor(i * textPositions.length / particleCount)];
        particles.push({
          x: targetPos.x,
          y: targetPos.y,
          targetX: targetPos.x,
          targetY: targetPos.y,
          vx: 0,
          vy: 0
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Mouse repulsion - Increased radius and force
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150 && dist > 0) { // Increased from 120 to 150
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.25;
          p.vy += (dy / dist) * force * 0.25;
        }

        // Pull back to target - Increased force for faster return
        const toTargetX = p.targetX - p.x;
        const toTargetY = p.targetY - p.y;
        const distToTarget = Math.sqrt(toTargetX * toTargetX + toTargetY * toTargetY);

        if (distToTarget > 1) {
          p.vx += (toTargetX / distToTarget) * 0.12;
          p.vy += (toTargetY / distToTarget) * 0.12;
        }

        // Damping - Increased friction for less movement
        p.vx *= 0.92;
        p.vy *= 0.92;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle - White with teal glow shadow
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#5FA99F';
        ctx.shadowBlur = 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-0 md:py-[5px] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-0 md:h-[600px] relative z-10"
        style={{
          display: 'block',
          background: 'transparent'
        }}
      />
    </section>
  );
}
