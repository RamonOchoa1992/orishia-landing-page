'use client';
import { useState, useEffect } from 'react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* 1. Definimos la animación personalizada aquí mismo */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          50% {
            transform: translateY(-8px); /* Sube 8px */
            box-shadow: 0 20px 20px rgba(0, 0, 0, 0.15); /* La sombra se aleja */
          }
          100% {
            transform: translateY(0px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* 2. Contenedor: Maneja la entrada, salida y posición */}
      <div
        className={`
          fixed bottom-8 right-8 z-50 
          transition-all duration-500 ease-out
          ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16 pointer-events-none'
          }
        `}
      >
        {/* 3. Botón: Maneja el click, el color y la animación de flotar */}
        <button
          onClick={scrollToTop}
          style={{ backgroundColor: '#2A458A', cursor: 'pointer' }}
          className='animate-float p-3 rounded-full text-white transition-colors hover:brightness-110 focus:outline-none'
          aria-label='Volver arriba'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 10l7-7m0 0l7 7m-7-7v18'
            />
          </svg>
        </button>
      </div>
    </>
  );
};
