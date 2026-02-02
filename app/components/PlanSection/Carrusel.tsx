import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import ListItem from './ListItem';
import { itemsList } from '@/app/utils/items-list';
import useLanguageStore from '@/app/store/useLanguageStore';
import { constant } from './plan-constant';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const { language } = useLanguageStore();

  // Referencia tipada para el intervalo (number en el navegador)
  const autoPlayRef = useRef<number | null>(null);

  const items = itemsList;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = window.setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current !== null) {
        window.clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isPaused, nextSlide]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);

    if (autoPlayRef.current !== null) {
      window.clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    // Reanudar tras 5 segundos de inactividad manual
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  return (
    <div className='text-slate-900 flex flex-col items-center justify-center overflow-hidden p-6 pt-15'>
      <div
        className='relative h-[450px] md:h-[550px] flex items-center justify-center [perspective:2000px] w-full max-w-6xl'
        style={{ transformStyle: 'preserve-3d', pointerEvents: 'none' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((item, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          let displayOffset = offset;
          if (offset > 2) displayOffset = offset - items.length;
          if (offset < -2) displayOffset = offset + items.length;

          const isVisible = Math.abs(displayOffset) <= 2;
          if (!isVisible) return null;

          // CÁLCULO DE PRIORIDAD:
          // La activa tiene 50, las laterales 40, 30, etc.
          const zIndexCalculed = 50 - Math.abs(displayOffset) * 10;

          return (
            <div
              key={item.id}
              onClick={() => handleDotClick(index)}
              className={`absolute transition-all duration-700 ease-out cursor-pointer group`}
              style={{
                // 1. Z-index dinámico para que las capas no se solapen
                zIndex: zIndexCalculed,
                transformStyle: 'preserve-3d',
                transform: `
          translateX(${displayOffset * 280}px) 
          scale(${isActive ? 1 : 0.75}) 
          translateZ(${isActive ? 0 : -300}px)
          rotateY(${displayOffset * -35}deg)
        `,
                opacity: isActive ? 1 : 0.4,
                filter: isActive ? 'none' : 'blur(2px)',
                // 2. IMPORTANTE: Si no es la activa, bajamos su prioridad de eventos si fuera necesario
                // aunque con el z-index dinámico debería bastar.
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
            >
              <div
                className={`relative w-[300px] h-[400px]  md:w-[356px] md:h-[522px] rounded-[26px] overflow-hidden transition-all duration-200 ease-in-out pt-8 pl-2 ${item.popular ? 'bg-orange-400 shadow-2xl ' : 'bg-transparent'}`}
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
                <div
                  className={`relative w-[300px] h-[400px] md:w-[340px] md:h-[480px] rounded-[26px] overflow-hidden transition-all duration-200 ease-in-out shadow-2xl ${
                    isActive
                      ? 'group-hover:scale-[1.02] group-hover:shadow-blue-500/10'
                      : ''
                  }`}
                  style={{
                    background: item.popular
                      ? '#FFFFFF'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)',
                    //backdropFilter: 'blur(12px)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    border: '2px solid #FFD5BA',
                  }}
                >
                  {/* Contenedor de Texto */}
                  <div
                    className={`transition-all duration-500 transform ${
                      isActive
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-0 opacity-100'
                    } absolute inset-0 p-8 bg-gradient-to-t from-white/60 via-transparent to-transparent`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography
                        fontSize={32}
                        fontWeight={700}
                        sx={{ color: '#1A1A1A' }}
                      >
                        {language === 'es' ? item.title[0] : item.title[1]}
                      </Typography>
                      <Typography
                        fontSize={15}
                        fontWeight={400}
                        sx={{ color: '#666666' }}
                      >
                        {language === 'es'
                          ? item.subtitle[0]
                          : item.subtitle[1]}
                      </Typography>
                      <div
                        className='w-full flex justify-center mt-1'
                        style={{ marginLeft: '-.1rem' }}
                      >
                        <Image
                          src='/assets/images/cardSeparador.png'
                          alt='Separador'
                          width={270}
                          height={2}
                        />
                      </div>
                      <Box display={'flex'} mt={0.5}>
                        <Typography
                          fontSize={30}
                          fontWeight={700}
                          sx={{ color: '#1A1A1A' }}
                        >
                          {`$${item.price}`}
                        </Typography>
                        <Typography
                          fontSize={22}
                          fontWeight={700}
                          sx={{ color: '#1A1A1A', marginLeft: '.3rem' }}
                        >
                          {language === 'es'
                            ? item.planType[0]
                            : item.planType[1]}
                        </Typography>
                      </Box>
                      <ListItem contents={item.contents} />
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-end'}>
                      <Button
                        sx={{ fontWeight: 700, fontSize: 12 }}
                        variant='text'
                      >
                        {constant[language].seeMoreText}
                      </Button>
                    </Box>
                    <Box mt={0.5}>
                      <Button
                        fullWidth
                        variant='contained'
                        sx={{
                          borderRadius: 18,
                          py: 1.5,
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1rem',
                          background: '#2A458A',
                          boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.4)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow:
                              '0 15px 25px -5px rgba(37, 99, 235, 0.5)',
                            background: '#18274F',
                          },
                        }}
                      >
                        {constant[language].selectPlanButton}
                      </Button>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navegación (Dots) */}
      <div className='flex gap-3 mt-20 mb-5'>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className='group relative w-10 h-10 flex items-center justify-center'
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? 'w-4 h-4 bg-orange-400 shadow-[0_0_15px_rgba(37,99,237,0.5)]'
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
