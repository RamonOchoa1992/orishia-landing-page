'use client';
import useLanguageStore from '@/app/store/useLanguageStore';
import FadeInSection from '@/app/components/common/FadeInSection';
import { Box, Button, Typography } from '@mui/material';
import { constant } from '@/app/utils/details-constant';

const Details = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box
        width={'100%'} // Asegura que use el ancho disponible
        // 1. RESPONSIVE: Padding pequeño en móvil, grande en escritorio
        sx={{
          padding: { xs: '1.5rem', md: '1.5rem 7rem 0 7rem' },
        }}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Box mt={2} sx={{ maxWidth: '100%' }}>
          <Typography
            sx={{ fontSize: { xs: '40px', sm: '40px', md: '80px' } }}
            fontWeight={100}
            textAlign={'center'}
            // Evita que el texto se salga en pantallas muy pequeñas
            style={{ wordBreak: 'break-word' }}
          >
            {constant[language].title}{' '}
            <span style={{ fontWeight: 800 }}>
              {' '}
              {constant[language].titleBold}
            </span>
          </Typography>
        </Box>

        {/* 2. RESPONSIVE: Ancho del subtítulo */}
        <Box sx={{ width: { xs: '90%', md: '45vw' } }}>
          <Typography
            sx={{ fontSize: { xs: '20px', sm: '20px', md: '30px' } }}
            mt={5}
            textAlign={'center'}
          >
            {constant[language].subtitle}
          </Typography>
        </Box>

        <Box
          mt={6}
          display={'flex'}
          // Usamos gap para separar botones en lugar de márgenes manuales
          gap={2}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: '100%', sm: 'auto' }, // En móvil ocupa todo el ancho
          }}
        >
          <Button
            sx={{
              borderRadius: 18,
              // 3. RESPONSIVE: 100% ancho en móvil, 159px fijo en escritorio
              width: { xs: '100%', sm: 159 },
              height: 60,
              fontWeight: 600,
              fontSize: 16,
              // Eliminé los margenes manuales (mr, mb) porque usamos 'gap' arriba
            }}
            variant='contained'
          >
            {constant[language].firstButton}
          </Button>

          <Button
            sx={{
              borderRadius: 18,
              // 3. RESPONSIVE: Igual aquí, adaptable
              width: { xs: '100%', sm: 159 },
              height: 60,
              fontWeight: 600,
              fontSize: 16,
            }}
            variant='outlined'
          >
            {constant[language].secondButton}
          </Button>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Details;
