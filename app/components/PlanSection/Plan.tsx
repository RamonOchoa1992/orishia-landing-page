'use client'
import { Box, Typography } from '@mui/material';
import Divider from '../common/Divider';
import Carrusel from '../../components/PlanSection/Carrusel';
import { useState } from 'react';
import FadeInSection from '@/app/utils/Fade';
import { constant } from './plan-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Plan = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box>
        <Box
          mt={6}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
            fontWeight={700}
            fontSize={46}
            textAlign={'center'}
            sx={{
              // El degradado debe ir en el background
              backgroundImage:
                'linear-gradient(90deg, #2A458A 0%, #EE6A2D 100%)',
              // Estas propiedades hacen que el fondo solo se vea donde hay texto
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {constant[language].title}
          </Typography>
          <Divider width={950} height={2} />
          <Typography
            mt={2}
            fontWeight={400}
            fontSize={26}
            width={'70%'}
            textAlign={'center'}
          >
            {constant[language].subtitle}{' '}
            <span style={{ fontWeight: 700 }}>
              {constant[language].subtitleBold}
            </span>
          </Typography>
        </Box>
        <div className='flex items-center justify-center p-4 pb-0 mt-6'>
          <div className='relative flex flex-col items-center'>
            {/* Switch Container */}
            <div
              onClick={() => setIsAnnual(!isAnnual)}
              className='relative w-72 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1.5 cursor-pointer flex items-center group transition-all duration-300 hover:border-orange-400/50 shadow-2xl'
            >
              {/* Animated Slider (The "Thumb") */}
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-orange-400 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isAnnual ? 'translate-x-full' : 'translate-x-0'
                }`}
              />

              {/* Monthly Option */}
              <div className='relative z-10 flex-1 flex items-center justify-center'>
                <span
                  className={`text-sm font-bold tracking-wide transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-orange-400'}`}
                >
                  {constant[language].monthly}
                </span>
              </div>

              {/* Annual Option */}
              <div className='relative z-10 flex-1 flex items-center justify-center gap-2'>
                <span
                  className={`text-sm font-bold tracking-wide transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-orange-400'}`}
                >
                  {constant[language].annual}
                </span>
                {/* Discount Badge */}
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[9px] font-black transition-all duration-300 border ${
                    isAnnual
                      ? 'opacity-100 scale-100 bg-white/20 text-white border-white/40'
                      : 'opacity-0 scale-50 bg-white/10 text-orange-400 border-orange-400/20'
                  }`}
                >
                  -15%
                </span>
              </div>
            </div>

            {/* Subtitle / Helper Text */}
            <Typography mt={2} fontSize={14} fontWeight={600}>
              {constant[language].selectPlanText}
            </Typography>
          </div>
        </div>
        <Carrusel />
      </Box>
    </FadeInSection>
  );
};

export default Plan;
