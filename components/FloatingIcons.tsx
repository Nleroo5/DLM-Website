'use client';

export default function FloatingIcons({ icons }: { icons: string[] }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-[clamp(14px,2.5vw,18px)] text-[rgba(242,169,34,0.4)]"
          style={{
            top: index === 0 ? '20%' : index === 1 ? '60%' : '30%',
            left: index === 0 ? '10%' : index === 2 ? '20%' : 'auto',
            right: index === 1 ? '15%' : 'auto',
            bottom: index === 2 ? '30%' : 'auto',
            animation: `floatIcon${index + 1} 15s ease-in-out infinite`,
            animationDelay: `${index * 5}s`,
          }}
        >
          {icon}
        </div>
      ))}
      <style jsx>{`
        @keyframes floatIcon1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          25% { transform: translateY(-15px) rotate(90deg); opacity: 0.6; }
          50% { transform: translateY(-25px) rotate(180deg); opacity: 0.5; }
          75% { transform: translateY(-10px) rotate(270deg); opacity: 0.5; }
        }
        @keyframes floatIcon2 {
          0%, 100% { transform: translateX(0px) scale(1); opacity: 0.4; }
          33% { transform: translateX(18px) scale(1.05); opacity: 0.6; }
          66% { transform: translateX(-8px) scale(0.95); opacity: 0.5; }
        }
        @keyframes floatIcon3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translate(15px, -18px) rotate(180deg); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
