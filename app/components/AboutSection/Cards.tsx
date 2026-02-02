import { Typography } from '@mui/material';
import Image from 'next/image';
import { constant } from './about-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

/**
 * Componente de tarjetas interactivas.
 * Utiliza SVGs internos para evitar dependencias de librerías externas.
 */
const InteractiveCards = () => {
  const { language } = useLanguageStore();

  const cards = [
    {
      id: 1,
      title:
        language === 'es'
          ? constant.es.firstCardTitle
          : constant.en.firstCardTitle,
      description:
        language === 'es'
          ? constant.es.firstCardDescription
          : constant.en.firstCardDescription,
      // SVG manual para no requerir lucide-react
      icon: '/assets/images/connet-logo.png',
    },
    {
      id: 2,
      title:
        language === 'es'
          ? constant.es.secondCardTitle
          : constant.en.secondCardTitle,
      description:
        language === 'es'
          ? constant.es.secondCardDescription
          : constant.en.secondCardDescription,
      icon: '/assets/images/core-logo.png',
    },
    {
      id: 3,
      title:
        language === 'es'
          ? constant.es.thirdCardTitle
          : constant.en.thirdCardTitle,
      description:
        language === 'es'
          ? constant.es.thirdCardDescription
          : constant.en.thirdCardDescription,
      icon: '/assets/images/infinitive-logo.png',
    },
  ];

  return (
    <div className='py-6 flex items-center justify-center font-sans'>
      <div className='max-w-6xl w-full mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {cards.map((card) => (
            <div
              key={card.id}
              className='group relative p-10 rounded-[2rem] transition-all duration-500 ease-out bg-transparent hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] cursor-pointer'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Contenedor del Icono con fondo suave */}
              <Image width={175} height={212} src={card.icon} alt='' />

              {/* Título */}
              <Typography
                mt={2}
                fontSize={22}
                fontWeight={700}
                className='text-xl font-bold tracking-tight'
              >
                {card.title}
              </Typography>

              {/* Descripción */}
              <Typography
                fontSize={20}
                fontWeight={500}
                textAlign={'center'}
                className='leading-relaxed text-base'
              >
                {card.description}
              </Typography>

              {/* Decoración inferior que aparece en hover */}
              <div className='mt-8 flex items-center gap-2 text-sm font-bold opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
                <Typography fontSize={14} fontWeight={600}>
                  {language === 'es' ? 'APRENDA MÁS' : 'LEARN MORE'}
                </Typography>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14m-7-7l7 7-7 7' />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCards;
