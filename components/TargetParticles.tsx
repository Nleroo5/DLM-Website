'use client';

import { useIsMobile } from '@/hooks/useIsMobile';

export default function TargetParticles() {
  const isMobile = useIsMobile();

  // Don't render particles at all on mobile - saves 24 DOM nodes + 72 pseudo-elements
  if (isMobile) return null;

  return (
    <>
      <div className="particle-background">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <style jsx global>{`
        .particle-background {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 0 !important;
          overflow: hidden !important;
          pointer-events: none !important;
        }

        .particle {
          position: absolute !important;
          pointer-events: none !important;
          will-change: transform !important;
          border-radius: 50% !important;
          contain: layout style paint !important;
        }

        /* Target Ring Styles */
        .particle::before,
        .particle::after {
          content: '' !important;
          position: absolute !important;
          border-radius: 50% !important;
        }

        /* Golden Targets (1-6) */
        .particle:nth-child(-n+6) {
          border: 2px solid #D4A574 !important;
          opacity: 0.3 !important;
        }
        .particle:nth-child(-n+6)::before {
          top: 50% !important;
          left: 50% !important;
          width: 60% !important;
          height: 60% !important;
          border: 1px solid #D4A574 !important;
          transform: translate(-50%, -50%) !important;
          opacity: 0.5 !important;
        }
        .particle:nth-child(-n+6)::after {
          top: 50% !important;
          left: 50% !important;
          width: 20% !important;
          height: 20% !important;
          background: #D4A574 !important;
          transform: translate(-50%, -50%) !important;
          opacity: 0.6 !important;
        }

        /* Teal Targets (7-12) */
        .particle:nth-child(n+7):nth-child(-n+12) {
          border: 2px solid #5FA99F !important;
          opacity: 0.25 !important;
        }
        .particle:nth-child(n+7):nth-child(-n+12)::before {
          top: 50% !important;
          left: 50% !important;
          width: 65% !important;
          height: 65% !important;
          border: 1px solid #5FA99F !important;
          transform: translate(-50%, -50%) !important;
          opacity: 0.45 !important;
        }
        .particle:nth-child(n+7):nth-child(-n+12)::after {
          top: 50% !important;
          left: 50% !important;
          width: 25% !important;
          height: 25% !important;
          background: #5FA99F !important;
          transform: translate(-50%, -50%) !important;
          opacity: 0.55 !important;
        }

        /* Light Teal Targets (13-18) */
        .particle:nth-child(n+13):nth-child(-n+18) {
          border: 1px solid #2C7873 !important;
          opacity: 0.2 !important;
        }
        .particle:nth-child(n+13):nth-child(-n+18)::before {
          top: 50% !important;
          left: 50% !important;
          width: 70% !important;
          height: 70% !important;
          border: 1px solid #2C7873 !important;
          transform: translate(-50%, -50%) !important;
          opacity: 0.4 !important;
        }
        .particle:nth-child(n+13):nth-child(-n+18)::after {
          top: 50% !important;
          left: 50% !important;
          width: 30% !important;
          height: 30% !important;
          background: #2C7873 !important;
          transform: translate(-50%, -50%) !important;
          opacity: 0.5 !important;
        }

        /* Cream Targets (19-24) */
        .particle:nth-child(n+19):nth-child(-n+24) {
          border: 1px solid #F8F6F3 !important;
          opacity: 0.15 !important;
        }
        .particle:nth-child(n+19):nth-child(-n+24)::before {
          top: 50% !important;
          left: 50% !important;
          width: 60% !important;
          height: 60% !important;
          border: 1px solid #F8F6F3 !important;
          transform: translate(-50%, -50%) !important;
          opacity: 0.35 !important;
        }
        .particle:nth-child(n+19):nth-child(-n+24)::after {
          top: 50% !important;
          left: 50% !important;
          width: 20% !important;
          height: 20% !important;
          background: #F8F6F3 !important;
          transform: translate(-50%, -50%) !important;
          opacity: 0.45 !important;
        }

        /* Particle Positions & Sizes */
        .particle:nth-child(1) {
          width: 18px;
          height: 18px;
          top: 15%;
          left: 10%;
          animation: float-a 16s infinite ease-in-out;
        }
        .particle:nth-child(2) {
          width: 20px;
          height: 20px;
          top: 25%;
          left: 85%;
          animation: float-b 20s infinite ease-in-out;
        }
        .particle:nth-child(3) {
          width: 16px;
          height: 16px;
          top: 60%;
          left: 20%;
          animation: float-c 18s infinite ease-in-out;
        }
        .particle:nth-child(4) {
          width: 19px;
          height: 19px;
          top: 40%;
          left: 70%;
          animation: float-d 22s infinite ease-in-out;
        }
        .particle:nth-child(5) {
          width: 17px;
          height: 17px;
          top: 80%;
          left: 50%;
          animation: float-a 14s infinite ease-in-out;
        }
        .particle:nth-child(6) {
          width: 15px;
          height: 15px;
          top: 30%;
          left: 30%;
          animation: float-b 24s infinite ease-in-out;
        }
        .particle:nth-child(7) {
          width: 14px;
          height: 14px;
          top: 50%;
          left: 15%;
          animation: float-c 19s infinite ease-in-out;
        }
        .particle:nth-child(8) {
          width: 17px;
          height: 17px;
          top: 90%;
          left: 75%;
          animation: float-d 23s infinite ease-in-out;
        }
        .particle:nth-child(9) {
          width: 13px;
          height: 13px;
          top: 20%;
          left: 45%;
          animation: float-a 15s infinite ease-in-out;
        }
        .particle:nth-child(10) {
          width: 16px;
          height: 16px;
          top: 65%;
          left: 90%;
          animation: float-b 27s infinite ease-in-out;
        }
        .particle:nth-child(11) {
          width: 13px;
          height: 13px;
          top: 35%;
          left: 5%;
          animation: float-c 17s infinite ease-in-out;
        }
        .particle:nth-child(12) {
          width: 18px;
          height: 18px;
          top: 75%;
          left: 35%;
          animation: float-d 21s infinite ease-in-out;
        }
        .particle:nth-child(13) {
          width: 10px;
          height: 10px;
          top: 45%;
          left: 40%;
          animation: float-a 21s infinite ease-in-out;
        }
        .particle:nth-child(14) {
          width: 10px;
          height: 10px;
          top: 85%;
          left: 20%;
          animation: float-b 25s infinite ease-in-out;
        }
        .particle:nth-child(15) {
          width: 11px;
          height: 11px;
          top: 15%;
          left: 80%;
          animation: float-c 17s infinite ease-in-out;
        }
        .particle:nth-child(16) {
          width: 10px;
          height: 10px;
          top: 95%;
          left: 55%;
          animation: float-d 19s infinite ease-in-out;
        }
        .particle:nth-child(17) {
          width: 11px;
          height: 11px;
          top: 25%;
          left: 95%;
          animation: float-a 23s infinite ease-in-out;
        }
        .particle:nth-child(18) {
          width: 10px;
          height: 10px;
          top: 70%;
          left: 10%;
          animation: float-b 14s infinite ease-in-out;
        }
        .particle:nth-child(19) {
          width: 8px;
          height: 8px;
          top: 40%;
          left: 55%;
          animation: float-c 26s infinite ease-in-out;
        }
        .particle:nth-child(20) {
          width: 10px;
          height: 10px;
          top: 80%;
          left: 65%;
          animation: float-d 16s infinite ease-in-out;
        }
        .particle:nth-child(21) {
          width: 8px;
          height: 8px;
          top: 60%;
          left: 5%;
          animation: float-a 22s infinite ease-in-out;
        }
        .particle:nth-child(22) {
          width: 8px;
          height: 8px;
          top: 30%;
          left: 75%;
          animation: float-b 18s infinite ease-in-out;
        }
        .particle:nth-child(23) {
          width: 8px;
          height: 8px;
          top: 90%;
          left: 25%;
          animation: float-c 24s infinite ease-in-out;
        }
        .particle:nth-child(24) {
          width: 10px;
          height: 10px;
          top: 10%;
          left: 90%;
          animation: float-d 20s infinite ease-in-out;
        }

        /* Float Animations */
        @keyframes float-a {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(30px, -35px) rotate(180deg);
          }
        }
        @keyframes float-b {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-28px, 42px) rotate(-180deg);
          }
        }
        @keyframes float-c {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(35px, -28px) rotate(180deg);
          }
        }
        @keyframes float-d {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-32px, 38px) rotate(-180deg);
          }
        }

        /* Mobile Optimization - HIDE ALL PARTICLES ON MOBILE */
        @media (max-width: 1024px) {
          .particle-background {
            display: none !important;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .particle {
            animation: none !important;
            opacity: 0.1 !important;
          }
        }
      `}</style>
    </>
  );
}
