'use client';
import { Box, Typography } from '@mui/material';
import Divider from '../common/Divider';
import Carrusel from '../../components/PlanSection/Carrusel';
//import { useState } from 'react';
import FadeInSection from '@/app/components/common/FadeInSection';
import { constant } from '@/app/utils/plan-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Plan = () => {
  //const [isAnnual, setIsAnnual] = useState(false);
  const { language } = useLanguageStore();

  return (
    <FadeInSection id='plans'>
      <Box mt={10} px={{ xs: 2, md: 0 }}>
        {' '}
        {/* Padding lateral de seguridad en móvil */}
        <Box
          mt={{ xs: 6, md: 6 }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {/* Título Responsive */}
          <Typography
            fontWeight={700}
            fontSize={{ xs: 32, sm: 40, md: 46 }}
            textAlign={'center'}
            sx={{
              backgroundImage:
                'linear-gradient(90deg, #2A458A 0%, #EE6A2D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: { xs: 1.2, md: 1.5 },
            }}
          >
            {constant[language].title}
          </Typography>

          {/* Divider Responsive: Controlamos el ancho desde el contenedor */}
          <Box
            sx={{
              width: { xs: '90%', md: 'auto' },
              display: 'flex',
              justifyContent: 'center',
              my: 2,
            }}
          >
            {/* Asumiendo que tu componente Divider se adapta al 100% del padre */}
            <Divider width={950} height={2} />
          </Box>

          {/* Subtítulo Responsive */}
          <Typography
            mt={1}
            fontWeight={400}
            fontSize={{ xs: 18, md: 26 }}
            width={{ xs: '100%', md: '70%' }}
            textAlign={'center'}
          >
            {constant[language].subtitle}{' '}
            <span style={{ fontWeight: 700 }}>
              {constant[language].subtitleBold}
            </span>
          </Typography>
        </Box>
        {/* Switch Toggle */}
        {/* <div className='flex items-center justify-center p-4 pb-0 mt-6'>
          <div className='relative flex flex-col items-center max-w-full'>
            <div
              onClick={() => setIsAnnual(!isAnnual)}
              // Ajustamos el ancho en pantallas muy pequeñas (w-full max-w-xs)
              className='relative w-72 max-w-full h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1.5 cursor-pointer flex items-center group transition-all duration-300 hover:border-orange-400/50 shadow-2xl'
            >
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-orange-400 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isAnnual ? 'translate-x-full' : 'translate-x-0'
                }`}
              />

              <div className='relative z-10 flex-1 flex items-center justify-center'>
                <span
                  className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
                    !isAnnual ? 'text-white' : 'text-orange-400'
                  }`}
                >
                  {constant[language].monthly}
                </span>
              </div>

              <div className='relative z-10 flex-1 flex items-center justify-center gap-2'>
                <span
                  className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
                    isAnnual ? 'text-white' : 'text-orange-400'
                  }`}
                >
                  {constant[language].annual}
                </span>
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

            <Typography
              mt={2}
              fontSize={14}
              fontWeight={600}
              textAlign='center'
            >
              {constant[language].selectPlanText}
            </Typography>
          </div>
        </div> */}
        <Carrusel />
      </Box>
    </FadeInSection>
  );
};

export default Plan;
