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
            {constant[language].title}
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
            {constant[language].titleBold}
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
              title={constant[language].firstCardTitle}
              subtitle={constant[language].firstCardDescription}
            />
          </Box>
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            sx={{ mt: { lg: 6 } }}
          >
            <AutomatizationCard
              title={constant[language].secondCardTitle}
              subtitle={constant[language].secondCardDescription}
            />
          </Box>
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            sx={{ mt: { lg: -16 } }}
          >
            <AutomatizationCard
              title={constant[language].thirdCardTitle}
              subtitle={constant[language].thirdCardDescription}
            />
          </Box>
          <Box width='100%' display='flex' justifyContent='center'>
            <AutomatizationCard
              title={constant[language].fourthCardTitle}
              subtitle={constant[language].fourthCardDescription}
            />
          </Box>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Automatization;
