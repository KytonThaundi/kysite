import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const floatingElements = floatingElementsRef.current;
    if (!container || !floatingElements) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();

      mouseX = ((clientX - left) / width - 0.5) * 2;
      mouseY = ((clientY - top) / height - 0.5) * 2;
    };

    const animate = () => {
      targetX += (mouseX - targetX) * 0.1;
      targetY += (mouseY - targetY) * 0.1;

      floatingElements.style.transform = `
        translate3d(${targetX * 50}px, ${targetY * 50}px, 0)
        rotateX(${-targetY * 20}deg)
        rotateY(${targetX * 20}deg)
      `;

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.8)_0,rgba(255,255,255,0)_60%)]"></div>
      </div>

      <div
        ref={floatingElementsRef}
        className="container mx-auto px-4 md:px-8 py-16 flex flex-col items-center text-center transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="max-w-5xl space-y-6 md:space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 transform hover:scale-110 transition-transform duration-300">
              Creating
            </span>{' '}
            <span className="inline-block transform hover:translate-y-[-10px] transition-transform duration-300">
              Digital Experiences
            </span>{' '}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 transform hover:scale-110 transition-transform duration-300">
              That Inspire
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transform hover:translate-z-10 transition-transform duration-300">
            Results-driven Information Technology professional with expertise in business systems analysis, product management, database management, software development, and network administration.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-z-20 hover:scale-110"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-z-20 hover:scale-110"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;