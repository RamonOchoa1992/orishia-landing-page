'use client'
import { Box, Typography } from '@mui/material';
import Divider from '../common/Divider';
import AutomatizationCard from './Card';
import FadeInSection from '@/app/utils/Fade';
import { constant } from './automatization-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Automatization = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box>
        <Box
          mt={4}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
            fontWeight={400}
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
            {language === 'es' ? constant.es.title : constant.en.title}
          </Typography>
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
            {language === 'es' ? constant.es.titleBold : constant.en.titleBold}
          </Typography>
          <Divider width={950} height={2} />
          <Typography
            mt={2}
            fontWeight={400}
            fontSize={26}
            width={'70%'}
            textAlign={'center'}
          >
            {language === 'es' ? constant.es.subtitle : constant.en.subtitle}{' '}
            <span style={{ fontWeight: 700 }}>
              {language === 'es' ? constant.es.subtitleBold : constant.en.subtitleBold}
            </span>
          </Typography>
        </Box>
        <Box
          mt={6}
          display='grid'
          // Definimos 1 columna para móvil (base) y 2 para tablets/desktop (md)
          // Si usas Chakra UI: gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          // Si usas MUI: sx={{ gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}
          gridTemplateColumns={{
            base: '1fr',
            lg: 'repeat(2, 1fr)',
          }}
          gap={8} // Espaciado entre tarjetas
          justifyItems='center' // Centra el contenido horizontalmente en cada celda
          alignItems='center' // Centra el contenido verticalmente
          maxWidth='1200px' // Opcional: limita el ancho máximo para que no se estire demasiado en pantallas enormes
          mx='auto' // Centra el contenedor completo en la pantalla
        >
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            sx={{ mt: { lg: -10 } }}
          >
            <AutomatizationCard
              title={language === 'es' ? constant.es.firstCardTitle : constant.en.firstCardTitle}
              subtitle={language === 'es' ? constant.es.firstCardDescription : constant.en.firstCardDescription}
            />
          </Box>
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            sx={{ mt: { lg: 6 } }}
          >
            <AutomatizationCard
              title={language === 'es' ? constant.es.secondCardTitle : constant.en.secondCardTitle}
              subtitle={language === 'es' ? constant.es.secondCardDescription : constant.en.secondCardDescription}
            />
          </Box>
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            sx={{ mt: { lg: -16 } }}
          >
            <AutomatizationCard
              title={language === 'es' ? constant.es.thirdCardTitle : constant.en.thirdCardTitle}
              subtitle={language === 'es' ? constant.es.thirdCardDescription : constant.en.thirdCardDescription}
            />
          </Box>
          <Box width='100%' display='flex' justifyContent='center'>
            <AutomatizationCard
              title={language === 'es' ? constant.es.fourthCardTitle : constant.en.fourthCardTitle}
              subtitle={language === 'es' ? constant.es.fourthCardDescription : constant.en.fourthCardDescription}
            />
          </Box>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Automatization;
