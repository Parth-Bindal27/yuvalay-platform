import { useMemo } from "react";

const icons = [
  "⚙️",
  "🤖",
  "💡",
  "🧠",
  "🛰️",
  "🚀",
  "📡",
  "💻",
  "⌨️",
  "🖥️",
  "🔬",
  "🛠️",
  "🔋",
  "📐",
  "📱",
  "⚡",
  "🧬",
  "🎯",
  "🌍",
  "</>",
];

export default function FloatingObjects() {
  const objects = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 28 + Math.random() * 38,
      delay: Math.random() * 6,
      duration: 8 + Math.random() * 10,
      rotate: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="floating-container">
      {objects.map((item) => (
        <div
          key={item.id}
          className="floating-object"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            transform: `rotate(${item.rotate}deg)`,
          }}
        >
          <span>{item.icon}</span>
        </div>
      ))}
    </div>
  );
}