import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  length: number;
  opacity: number;
  speed: number;
}

export const ShootingStarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createStar = (): Star => ({
      x: Math.random() * canvas.width,
      y: 0,
      length: Math.random() * 80 + 20,
      opacity: Math.random(),
      speed: Math.random() * 10 + 5,
    });

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly add new stars
      if (Math.random() < 0.05) {
        stars.push(createStar());
      }

      stars.forEach((star, index) => {
        star.x -= star.speed; // Move left
        star.y += star.speed; // Move down

        ctx.beginPath();
        const gradient = ctx.createLinearGradient(star.x, star.y, star.x + star.length, star.y - star.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.length, star.y - star.length);
        ctx.stroke();

        // Remove if out of bounds
        if (star.x < -100 || star.y > canvas.height + 100) {
          stars.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none mix-blend-screen"
    />
  );
};

