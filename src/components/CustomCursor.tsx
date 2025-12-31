import { useEffect, useRef } from 'react';

const MathMouseTrailer = () => {
  const countRef = useRef(0);
  const lastRef = useRef({
    starTimestamp: Date.now(),
    starPosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 }
  });

  const config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: ["255 255 255", "120 200 255"], // white and deep pink
    sizes: ["2.0rem", "2.0rem", "2.0rem"],
    animations: ["fall-1", "fall-2", "fall-3"],
    mathSymbols: ['π', 'Σ', '+', '−', '÷', '%', '×', 'θ', '∫', '∞', '√', '∂']
  };

  useEffect(() => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const selectRandom = items => items[rand(0, items.length - 1)];
    
    const calcDistance = (a, b) => {
      const diffX = b.x - a.x;
      const diffY = b.y - a.y;
      return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    };

    const calcElapsedTime = (start, end) => end - start;

    const appendElement = element => document.body.appendChild(element);
    const removeElement = (element, delay) => 
      setTimeout(() => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
        }
      }, delay);

    const createStar = position => {
      const star = document.createElement("span");
      const color = selectRandom(config.colors);
      
      star.className = "math-star";
      star.textContent = selectRandom(config.mathSymbols);
      
      star.style.left = `${position.x}px`;
      star.style.top = `${position.y}px`;
      star.style.fontSize = selectRandom(config.sizes);
      star.style.color = `rgb(${color})`;
      star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
      star.style.animationName = config.animations[countRef.current++ % 3];
      star.style.animationDuration = `${config.starAnimationDuration}ms`;
      
      appendElement(star);
      removeElement(star, config.starAnimationDuration);
    };

    const createGlowPoint = position => {
      const glow = document.createElement("div");
      
      glow.className = "glow-point";
      glow.style.left = `${position.x}px`;
      glow.style.top = `${position.y}px`;
      
      appendElement(glow);
      removeElement(glow, config.glowDuration);
    };

    const determinePointQuantity = distance => 
      Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

    const createGlow = (last, current) => {
      const distance = calcDistance(last, current);
      const quantity = determinePointQuantity(distance);
      
      const dx = (current.x - last.x) / quantity;
      const dy = (current.y - last.y) / quantity;
      
      Array.from(Array(quantity)).forEach((_, index) => { 
        const x = last.x + dx * index;
        const y = last.y + dy * index;
        createGlowPoint({ x, y });
      });
    };

    const updateLastStar = position => {
      lastRef.current.starTimestamp = Date.now();
      lastRef.current.starPosition = position;
    };

    const updateLastMousePosition = position => {
      lastRef.current.mousePosition = position;
    };

    const adjustLastMousePosition = position => {
      if (lastRef.current.mousePosition.x === 0 && lastRef.current.mousePosition.y === 0) {
        lastRef.current.mousePosition = position;
      }
    };

    const handleOnMove = e => {
      const mousePosition = { x: e.clientX, y: e.clientY };
      
      adjustLastMousePosition(mousePosition);
      
      const now = Date.now();
      const hasMovedFarEnough = 
        calcDistance(lastRef.current.starPosition, mousePosition) >= config.minimumDistanceBetweenStars;
      const hasBeenLongEnough = 
        calcElapsedTime(lastRef.current.starTimestamp, now) > config.minimumTimeBetweenStars;
      
      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);
        updateLastStar(mousePosition);
      }
      
      createGlow(lastRef.current.mousePosition, mousePosition);
      updateLastMousePosition(mousePosition);
    };

    const handleMouseLeave = () => {
      updateLastMousePosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', e => handleOnMove(e.touches[0]));
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', e => handleOnMove(e.touches[0]));
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --glow-rgb: 239 42 201;
        }

        * {
          cursor: none !important;
        }

        .glow-point {
          position: fixed;
          width: 0;
          height: 0;
          box-shadow: 0rem 0rem 1.2rem 0.6rem rgb(var(--glow-rgb));
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
        }

        .math-star {
          position: fixed;
          z-index: 9999;
          color: white;
          font-size: 1rem;
          font-weight: bold;
          font-family: 'Times New Roman', serif;
          animation-duration: 1500ms;
          animation-fill-mode: forwards;
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        @keyframes fall-1 {
          0% {
            transform: translate(-50%, -50%) translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(0.25);
            opacity: 0;
          }
          
          5% {
            transform: translate(-50%, -50%) translate(10px, -10px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(1);
            opacity: 1;
          }
          
          100% {
            transform: translate(-50%, -50%) translate(25px, 200px) rotateX(180deg) rotateY(270deg) rotateZ(90deg) scale(1);
            opacity: 0;
          }
        }

        @keyframes fall-2 {
          0% {
            transform: translate(-50%, -50%) translate(0px, 0px) rotateX(-20deg) rotateY(10deg) scale(0.25);
            opacity: 0;
          }
          
          10% {
            transform: translate(-50%, -50%) translate(-10px, -5px) rotateX(-20deg) rotateY(10deg) scale(1);
            opacity: 1;
          }
          
          100% {
            transform: translate(-50%, -50%) translate(-10px, 160px) rotateX(-90deg) rotateY(45deg) scale(0.25);
            opacity: 0;
          }
        }

        @keyframes fall-3 {
          0% {
            transform: translate(-50%, -50%) translate(0px, 0px) rotateX(0deg) rotateY(45deg) scale(0.5);
            opacity: 0;
          }
          
          15% {
            transform: translate(-50%, -50%) translate(7px, 5px) rotateX(0deg) rotateY(45deg) scale(1);
            opacity: 1;
          }
          
          100% {
            transform: translate(-50%, -50%) translate(20px, 120px) rotateX(-180deg) rotateY(-90deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default MathMouseTrailer;