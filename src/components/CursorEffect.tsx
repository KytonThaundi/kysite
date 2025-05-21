import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  speed: number;
  active: number;
  activeSpeed: number;
  opacity: number;
}

const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 60;
    
    // Create points
    const pointsCount = 30;
    let points: Point[] = [];
    
    const initPoints = () => {
      points = [];
      for (let i = 0; i < pointsCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        points.push({
          x,
          y,
          originX: x,
          originY: y,
          size: 2 + Math.random() * 3,
          color: `rgb(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)})`,
          speed: 0.1 + Math.random() * 0.2,
          active: 0,
          activeSpeed: 0.005 + Math.random() * 0.02,
          opacity: 0.2 + Math.random() * 0.3
        });
      }
    };
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      initPoints();
    };
    
    // Initialize canvas size
    resizeCanvas();
    
    // Track mouse movement
    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < pointsCount; i++) {
        const point = points[i];
        
        // Check if point is close to mouse
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        
        if (distance < mouseRadius) {
          point.active = 1;
          point.x += -Math.cos(angle) * point.activeSpeed * mouseRadius;
          point.y += -Math.sin(angle) * point.activeSpeed * mouseRadius;
        } else {
          point.active = 0;
          point.x += (point.originX - point.x) * point.speed;
          point.y += (point.originY - point.y) * point.speed;
        }
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${point.color.slice(4, -1)}, ${point.opacity * (point.active ? 1.5 : 1)})`;
        ctx.fill();
        
        // Connect points
        for (let j = i + 1; j < pointsCount; j++) {
          const p2 = points[j];
          const dx = point.x - p2.x;
          const dy = point.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.1 * (1 - distance / 120) * (point.active || p2.active ? 1.5 : 1)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', updateMousePosition);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CursorEffect;