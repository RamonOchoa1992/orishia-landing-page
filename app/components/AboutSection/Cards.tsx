'use client';

import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { constant } from '@/app/utils/about-constant';
import useLanguageStore from '@/app/store/useLanguageStore';
import OrishiaModal, { ModalData } from './OrishiaModal';

const InteractiveCards = () => {
  const { language } = useLanguageStore();

  const [selectedCardData, setSelectedCardData] = useState<ModalData | null>(
    null,
  );

  const handleCardClick = (modalData: ModalData) => {
    setSelectedCardData(modalData);
  };

  const handleCloseModal = () => {
    setSelectedCardData(null);
  };

  // Definición de las tarjetas
  const cards = [
    {
      id: 1,
      title: constant[language].secondCardTitle, // "OrishIA Connet"
      description: constant[language].secondCardDescription,
      icon: '/assets/images/connet-logo.png',
      modalData: {
        logoSrc: '/assets/images/connet-card.png',
        description:constant[language].firstModalDescription,
        dividerColor: '#EE6A2D',
        // BENEFICIOS CON ICONOS PERSONALIZADOS
        benefits: [
          {
            text: constant[language].firstModalBenefitOne,
            iconSrc: '/assets/images/connet-card-icon1.png', // Reemplaza con tu icono real
          },
          {
            text: constant[language].firstModalBenefitTwo,
            iconSrc: '/assets/images/connet-card-icon2.png',
          },
          {
            text: constant[language].firstModalBenefitThree,
            iconSrc: '/assets/images/connet-card-icon3.png',
          },
        ],
      },
    },
    {
      id: 2,
      title: constant[language].thirdCardTitle, // "OrishIA Core"
      description: constant[language].thirdCardDescription,
      icon: '/assets/images/core-logo.png',
      modalData: {
        logoSrc: '/assets/images/core-card.png',
        description: constant[language].secondModalDescription,
        dividerColor: '#EE6A2D',
        benefits: [
          {
            text: constant[language].secondModalBenefitOne,
            iconSrc: '/assets/images/core-card-icon1.png',
          },
          {
            text: constant[language].secondModalBenefitTwo,
            iconSrc: '/assets/images/core-card-icon2.png',
          },
          {
            text: constant[language].secondModalBenefitThree,
            iconSrc: '/assets/images/core-card-icon3.png',
          },
          {
            text: constant[language].secondModalBenefitFour,
            iconSrc: '/assets/images/core-card-icon4.png',
          },
          {
            text: constant[language].secondModalBenefitFive,
            iconSrc: '/assets/images/core-card-icon5.png',
          },
        ],
      },
    },
    {
      id: 3,
      title: constant[language].firstCardTitle, // "OrishIA Infinite"
      description: constant[language].firstCardDescription,
      icon: '/assets/images/infinitive-logo.png',
      modalData: {
        logoSrc: '/assets/images/infinite-card.png',
        description: constant[language].thirdModalDescription,
        dividerColor: '#EE6A2D',
        benefits: [
          {
            text: constant[language].thirdModalBenefitOne,
            iconSrc: '/assets/images/infinite-card-icon1.png',
          },
          {
            text: constant[language].thirdModalBenefitTwo,
            iconSrc: '/assets/images/infinite-card-icon2.png',
          },
          {
            text: constant[language].thirdModalBenefitThree,
            iconSrc: '/assets/images/infinite-card-icon3.png',
          },
        ],
      },
    },
  ];

  return (
    <>
      <div className='py-6 flex items-center justify-center font-sans'>
        <div className='max-w-6xl w-full mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.modalData)}
                className='group relative p-6 md:p-10 rounded-[2rem] transition-all duration-500 ease-out bg-transparent hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] cursor-pointer'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Imagen Preview */}
                <div className='relative w-[140px] h-[170px] md:w-[175px] md:h-[212px]'>
                  <Image
                    fill
                    style={{ objectFit: 'contain' }}
                    src={card.icon}
                    alt={card.title}
                  />
                </div>

                <Typography
                  mt={2}
                  fontSize={22}
                  fontWeight={700}
                  className='text-xl font-bold tracking-tight text-center'
                >
                  {card.title}
                </Typography>

                <Typography
                  fontSize={{ xs: 16, md: 20 }}
                  fontWeight={500}
                  textAlign={'center'}
                  className='leading-relaxed text-base mt-2'
                >
                  {card.description}
                </Typography>

                <div className='mt-8 flex items-center gap-2 text-sm font-bold opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
                  <Typography fontSize={14} fontWeight={600}>
                    {constant[language].cardLink}
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

      <OrishiaModal
        open={!!selectedCardData}
        onClose={handleCloseModal}
        data={selectedCardData}
      />
    </>
  );
};

export default InteractiveCards;
