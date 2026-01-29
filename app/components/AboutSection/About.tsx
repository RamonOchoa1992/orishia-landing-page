'use client'
import { Box, Typography } from '@mui/material';
import InteractiveCards from './Cards';
import Divider from '../common/Divider';
import FadeInSection from '@/app/utils/Fade';

const About = () => {
  return (
    <FadeInSection>
      <Box
        mt={10}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography
          fontWeight={700}
          fontSize={46}
          sx={{
            // El degradado debe ir en el background
            backgroundImage: 'linear-gradient(90deg, #2A458A 0%, #EE6A2D 100%)',
            // Estas propiedades hacen que el fondo solo se vea donde hay texto
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          ¿Que es OrishIA?
        </Typography>
        <Divider width={950} height={2} />
        <Typography
          mt={2}
          fontWeight={500}
          fontSize={26}
          width={'70%'}
          textAlign={'center'}
        >
          La plataforma omnicanal que conecta, centraliza y potencia cada
          interacción con nuestra IA multiagente.
        </Typography>
        <InteractiveCards />
      </Box>
    </FadeInSection>
  );
};

export default About;
