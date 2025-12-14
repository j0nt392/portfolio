import { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;
    
    // Mouse tracking variables
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout: any;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track scroll speed
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      scrollSpeed = delta;
      lastScrollY = currentScrollY;
      
      // Decay scroll speed
      setTimeout(() => {
        scrollSpeed *= 0.9; // Friction
        if (Math.abs(scrollSpeed) < 0.1) scrollSpeed = 0;
      }, 100);
    };
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.2; // Even slower random drift
        this.vy = (Math.random() - 0.5) * 0.2; // Even slower random drift
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        // Base movement (No Gravity)
        this.x += this.vx;
        this.y += this.vy;

        // Apply scroll influence (Parallax / Warp effect) - ONLY when scrollSpeed is significant
        if (Math.abs(scrollSpeed) > 0.1) {
             this.y -= scrollSpeed * 0.5;
        }

        // Mouse Attraction Logic
        if (isMouseMoving) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Gentle attraction radius
          if (distance < 400) {
            const force = (400 - distance) / 400; // Stronger when closer
            const angle = Math.atan2(dy, dx);
            
            // Move towards mouse slowly
            this.x += Math.cos(angle) * force * 1.5; 
            this.y += Math.sin(angle) * force * 1.5;
          }
        }

        // Wrap around - Fix glitchy behavior by ensuring they wrap smoothly
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`; // Indigo
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Optional: Draw trails if moving fast due to scroll
        if (Math.abs(scrollSpeed) > 5) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${this.opacity * 0.5})`;
            ctx.lineWidth = this.size;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + scrollSpeed * 2);
            ctx.stroke();
        }
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dampen scroll speed frame by frame
      scrollSpeed *= 0.95;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-80"
    />
  );
};
