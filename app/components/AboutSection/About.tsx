'use client';
import { Box, Typography } from '@mui/material';
import InteractiveCards from './Cards';
import Divider from '../common/Divider';
import FadeInSection from '@/app/utils/Fade';
import useLanguageStore from '@/app/store/useLanguageStore';
import { constant } from './about-constant';

const About = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box
        // 1. RESPONSIVE: Menos margen superior en móvil, normal en escritorio
        mt={{ xs: 6, md: 10 }}
        // 2. Padding lateral de seguridad para que nada toque los bordes en móvil
        px={{ xs: 2, md: 0 }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width='100%'
      >
        <Typography
          fontWeight={700}
          // 3. RESPONSIVE: Fuente escalable (32px móvil -> 46px escritorio)
          fontSize={{ xs: 32, sm: 40, md: 46 }}
          textAlign='center'
          sx={{
            backgroundImage: 'linear-gradient(90deg, #2A458A 0%, #EE6A2D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: { xs: 1.2, md: 1.5 },
          }}
        >
          {constant[language].title}
        </Typography>

        {/* Mantenemos el width original, el componente Divider ya es responsive internamente */}
        <Divider width={950} height={2} />

        <Typography
          mt={2}
          fontWeight={500}
          fontSize={{ xs: 18, md: 26 }} // Texto más pequeño en móvil
          width={{ xs: '100%', md: '70%' }} // Ancho completo en móvil
          textAlign={'center'}
        >
          {constant[language].subtitle}
        </Typography>

        {/* Contenedor wrapper para las cards */}
        <Box width='100%' mt={4}>
          <InteractiveCards />
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default About;
