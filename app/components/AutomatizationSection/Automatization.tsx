'use client';
import { Box, Typography } from '@mui/material';
import Divider from '../common/Divider';
import AutomatizationCard from './Card';
import FadeInSection from '@/app/components/common/FadeInSection';
import { constant } from '@/app/utils/automatization-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Automatization = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box px={{ xs: 2, md: 0 }}>
        {' '}
        {/* Padding lateral de seguridad en móvil */}
        {/* --- HEADER DE LA SECCIÓN --- */}
        <Box
          mt={{ xs: 6, md: 4 }} // Menos margen superior en móvil
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {/* Título Principal */}
          <Typography
            fontWeight={400}
            // RESPONSIVE: Texto más pequeño en móvil para evitar cortes
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

          {/* Título Bold */}
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
            {constant[language].titleBold}
          </Typography>

          {/* DIVIDER RESPONSIVE: Controlamos el ancho desde el contenedor */}
          <Box
            sx={{
              width: { xs: '90%', md: 'auto' },
              my: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Asumiendo que tu Divider acepta width pero tiene max-width: 100% internamente */}
            <Divider width={950} height={2} />
          </Box>

          {/* Subtítulo */}
          <Typography
            mt={2}
            fontWeight={400}
            fontSize={{ xs: 18, md: 26 }} // Fuente legible en móvil
            width={{ xs: '100%', md: '70%' }} // Ancho completo en móvil
            textAlign={'center'}
          >
            {constant[language].subtitle}{' '}
            <span style={{ fontWeight: 700 }}>
              {constant[language].subtitleBold}
            </span>
          </Typography>
        </Box>
        {/* --- GRID DE TARJETAS --- */}
        <Box
          mt={{ xs: 4, md: 10 }} // Más espacio en desktop
          display='grid'
          // RESPONSIVE GRID:
          // xs: 1 columna
          // md: 2 columnas
          sx={{
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 4, md: 8 }, // Espacio entre tarjetas variable
            maxWidth: '1200px',
            mx: 'auto',
          }}
          justifyItems='center'
          alignItems='center'
        >
          {/* CARD 1 */}
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            // Solo aplicamos el margen negativo en pantallas grandes (lg)
            sx={{ mt: { xs: 0, lg: -10 } }}
          >
            <AutomatizationCard
              title={constant[language].firstCardTitle}
              subtitle={constant[language].firstCardDescription}
            />
          </Box>

          {/* CARD 2 */}
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            sx={{ mt: { xs: 0, lg: 6 } }}
          >
            <AutomatizationCard
              title={constant[language].secondCardTitle}
              subtitle={constant[language].secondCardDescription}
            />
          </Box>

          {/* CARD 3 */}
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            sx={{ mt: { xs: 0, lg: -16 } }}
          >
            <AutomatizationCard
              title={constant[language].thirdCardTitle}
              subtitle={constant[language].thirdCardDescription}
            />
          </Box>

          {/* CARD 4 */}
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            // Sin margen especial, sigue el flujo natural
          >
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
