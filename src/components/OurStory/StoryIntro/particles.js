const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  opacity: Math.random() * 0.6 + 0.2,
}));

export default particles;