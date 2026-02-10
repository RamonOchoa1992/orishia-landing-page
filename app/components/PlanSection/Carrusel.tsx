'use client';
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useSyncExternalStore,
} from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import ListItem from './ListItem';
import useLanguageStore from '@/app/store/useLanguageStore';
import { constant } from '@/app/utils/plan-constant';
import ContactModal from '../common/ContactModal';

// Suscripción segura al ancho de ventana para evitar errores de hidratación y renders en cascada
function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [selectedIndex, setSelectedIndex] = useState<number>(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div className='text-slate-900 flex flex-col items-center justify-center overflow-hidden p-6 pt-12 lg:pt-15'>
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
                  ${isMobile ? 'w-[320px] h-[540px]' : 'w-[674px] h-[522px]'} 
                  ${item.popular ? 'bg-orange-400 shadow-2xl ' : 'bg-transparent'}`}
                style={{ transformStyle: 'preserve-3d' }}
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
                    ${isMobile ? 'w-[300px] h-[500px]' : 'w-[650px] md:h-[480px]'}
                    ${isActive ? 'group-hover:scale-[1.02] group-hover:shadow-blue-500/10' : ''}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#FFFFFF',
                    border: '2px solid #FFD5BA',
                    backfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className='inset-0 p-6 md:p-8 flex flex-col justify-between h-full'
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Box
                      display='flex'
                      flexDirection='column'
                      height='100%'
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Box
                        display={'flex'}
                        flexDirection={isMobile ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        style={{ transformStyle: 'preserve-3d' }}
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
                      {index === 4 && (
                        <Box>
                          <Typography
                            fontSize={16}
                            fontWeight={700}
                            sx={{ color: '#1A1A1A' }}
                          >
                            {constant[language].customQuotesText}
                          </Typography>
                        </Box>
                      )}
                      {/* FlexGrow permite que este Box ocupe el espacio y empuje el botón al fondo */}
                      <Box
                        sx={{
                          flexGrow: 1,
                          maxHeight: isMobile ? '240px' : 'none',
                          overflowY: isMobile ? 'auto' : 'visible',
                        }}
                      >
                        <ListItem contents={item.contents} />
                      </Box>

                      <Box
                        mt={2}
                        display={'flex'}
                        justifyContent={'center'}
                        style={{
                          transform: isActive
                            ? 'translateZ(30px)'
                            : 'translateZ(0px)',
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <Button
                          fullWidth
                          variant='contained'
                          onClick={(e) => {
                            if (isActive) {
                              e.stopPropagation();
                              setSelectedIndex(index);
                              handleOpenModal();
                            }
                          }}
                          sx={{
                            width: { xs: '100%', md: '60%' },
                            borderRadius: 18,
                            py: 1.5,
                            fontWeight: 700,
                            textTransform: 'none',
                            fontSize: '1rem',
                            background: '#2A458A',
                            boxShadow:
                              '0 10px 20px -5px rgba(37, 99, 235, 0.4)',
                            transition: 'all 0.2s ease',
                            pointerEvents: isActive ? 'auto' : 'none',
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
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex gap-3 mt-15 md:mb-6'>
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
      <ContactModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={language}
        planIndex={selectedIndex}
      />
    </div>
  );
};

export default App;
