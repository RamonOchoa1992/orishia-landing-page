'use client'
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
          {language === 'es' ? constant.es.title : constant.en.title}
        </Typography>
        <Divider width={950} height={2} />
        <Typography
          mt={2}
          fontWeight={500}
          fontSize={26}
          width={'70%'}
          textAlign={'center'}
        >
          {language === 'es' ? constant.es.subtitle : constant.en.subtitle}
        </Typography>
        <InteractiveCards />
      </Box>
    </FadeInSection>
  );
};

export default About;
