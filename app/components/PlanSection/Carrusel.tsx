'use client';
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useSyncExternalStore,
} from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ListItem from './ListItem';
import useLanguageStore from '@/app/store/useLanguageStore';
import { constant } from '@/app/utils/plan-constant';

// Suscripción segura al ancho de ventana para evitar errores de hidratación y renders en cascada
function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const { language } = useLanguageStore();
  const autoPlayRef = useRef<number | null>(null);
  const items = constant[language].items;

  // Hook moderno para manejar window de forma síncrona y segura en Next.js
  const windowWidth = useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    () => 0, // Valor inicial en servidor
  );

  const isMobile = windowWidth > 0 && windowWidth < 768;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isPaused && windowWidth > 0) {
      autoPlayRef.current = window.setInterval(nextSlide, 3000);
    }
    return () => {
      if (autoPlayRef.current !== null)
        window.clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide, windowWidth]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    if (autoPlayRef.current !== null) window.clearInterval(autoPlayRef.current);
    setTimeout(() => setIsPaused(false), 5000);
  };

  if (windowWidth === 0) return <div className='h-[520px]' />;

  return (
    <div className='text-slate-900 flex flex-col items-center justify-center overflow-hidden p-6 pt-12 lg:pt-5'>
      <div
        className='relative h-[500px] md:h-[480px] flex items-center justify-center [perspective:2000px] w-full max-w-6xl'
        style={{ transformStyle: 'preserve-3d', pointerEvents: 'none' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((item, index) => {
          const offset = index - activeIndex;
          let displayOffset = offset;
          if (offset > 2) displayOffset = offset - items.length;
          if (offset < -2) displayOffset = offset + items.length;

          const isActive = displayOffset === 0;
          const isVisible = Math.abs(displayOffset) <= (isMobile ? 1 : 2);
          if (!isVisible) return null;

          const zIndex = isActive ? 100 : 50 - Math.abs(displayOffset) * 10;
          const translateX = isMobile
            ? `${displayOffset * 80}%`
            : `${displayOffset * 280}px`;

          return (
            <div
              key={item.id}
              onClick={() => handleDotClick(index)}
              className='absolute transition-all duration-700 ease-out group'
              style={{
                zIndex,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                transform: `
                  translateX(${translateX}) 
                  scale(${isActive ? 1 : isMobile ? 0.85 : 0.75}) 
                  translateZ(${isActive ? 150 : -300}px)
                  rotateY(${displayOffset * (isMobile ? -15 : -35)}deg)
                `,
                opacity: isActive ? 1 : isMobile ? 0.6 : 0.85,
                filter: isActive ? 'none' : 'blur(0.5px)',
                cursor: isActive ? 'default' : 'pointer',
                pointerEvents: 'auto',
              }}
            >
              {/* Contenedor Externo (Marco Naranja si es popular) */}
              <div
                className={`relative rounded-[26px] transition-all duration-300 ease-in-out pt-8 pl-3 
                  ${isMobile ? 'w-[320px] h-[480px]' : 'w-[674px] h-[362px]'} 
                  ${item.popular ? 'bg-orange-400 shadow-2xl ' : 'bg-transparent'}`}
              >
                {item.popular && (
                  <Typography
                    mt={-3}
                    mb={0.5}
                    fontSize={14}
                    fontWeight={700}
                    textAlign={'center'}
                    color='text.secondary'
                  >
                    {constant[language].popularPlanText}
                  </Typography>
                )}

                {/* Contenedor Interno (La Tarjeta Blanca) */}
                <div
                  className={`relative rounded-[26px] overflow-hidden transition-all duration-300 ease-in-out shadow-2xl 
                    ${isMobile ? 'w-[300px] h-[440px]' : 'w-[650px] md:h-[320px]'}
                    ${isActive ? 'group-hover:scale-[1.02] group-hover:shadow-blue-500/10' : ''}`}
                  style={{
                    background: '#FFFFFF', // Aquí se mantiene blanca la tarjeta para legibilidad del texto
                    border: '2px solid #FFD5BA',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className='absolute inset-0 p-6 md:p-8 flex flex-col justify-between'>
                    <Box>
                      <Box
                        display={'flex'}
                        flexDirection={isMobile ? 'column' : 'row'}
                        justifyContent={'space-between'}
                      >
                        <Box>
                          <Typography
                            fontSize={isMobile ? 26 : 32}
                            fontWeight={700}
                            sx={{ color: '#1A1A1A' }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            fontSize={15}
                            fontWeight={400}
                            sx={{ color: '#666666' }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                        <Box display={'flex'} mt={isMobile ? 1 : 0.5}>
                          <Typography
                            fontSize={isMobile ? 26 : 30}
                            fontWeight={700}
                            sx={{ color: '#1A1A1A' }}
                          >
                            {`$${item.price}`}
                          </Typography>
                          <Typography
                            fontSize={isMobile ? 18 : 22}
                            fontWeight={700}
                            sx={{ color: '#1A1A1A', marginLeft: '.3rem' }}
                          >
                            {item.planType}
                          </Typography>
                        </Box>
                      </Box>

                      <div className='w-full flex mt-1 mb-3'>
                        <Image
                          src='/assets/images/cardSeparador.png'
                          alt='Separador'
                          width={550}
                          height={1}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>

                      <Box
                        sx={{
                          maxHeight: isMobile ? '240px' : 'none',
                          overflowY: isMobile ? 'auto' : 'visible',
                        }}
                      >
                        <ListItem contents={item.contents} />
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex gap-3 mt-10 md:mb-15'>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className='group relative w-10 h-10 flex items-center justify-center'
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? 'w-4 h-4 bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.5)]'
                  : 'w-2 h-2 bg-slate-300 group-hover:bg-orange-400'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
