const particles = Array.from({ length: 180 }, (_, i) => ({
  id: i,

  x: Math.random() * window.innerWidth,

  y: Math.random() * window.innerHeight,

  size: Math.random() * 4 + 1,

  opacity: Math.random() * 0.7 + 0.15,

  speed: Math.random() * 0.7 + 0.2,

  delay: Math.random() * 5,
}));

export default particles;