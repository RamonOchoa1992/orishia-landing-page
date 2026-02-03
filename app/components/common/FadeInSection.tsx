import React, { useEffect, useRef, useState, ReactNode } from 'react';

// Definimos los tipos de dirección permitidos
type FadeDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInSectionProps {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number; // Opcional: para cascada de animaciones
  threshold?: number; // Opcional: sensibilidad del scroll
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  // Especificamos que la referencia es a un elemento DIV de HTML
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tipamos el observador
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // Dejamos de observar una vez activado
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      { threshold },
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold]);

  // Función para obtener clases de Tailwind basadas en el estado y dirección
  const getDirectionClass = (): string => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-10 opacity-0';
        case 'down':
          return '-translate-y-10 opacity-0';
        case 'left':
          return 'translate-x-10 opacity-0';
        case 'right':
          return '-translate-x-10 opacity-0';
        default:
          return 'opacity-0';
      }
    }

    // Clases cuando es visible
    switch (direction) {
      case 'up':
      case 'down':
        return 'translate-y-0 opacity-100';
      case 'left':
      case 'right':
        return 'translate-x-0 opacity-100';
      default:
        return 'opacity-100';
    }
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${getDirectionClass()}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
