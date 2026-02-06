'use client';
import { Box, Button, Typography } from '@mui/material';
import Divider from '../common/Divider';
import FadeInSection from '@/app/components/common/FadeInSection';
import { constant } from '@/app/utils/ready-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Ready = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box
        mt={{ xs: 8, md: language === 'es' ? 13 : 16.5 }}
        // 2. Padding lateral para que nada toque los bordes en móvil
        px={{ xs: 2, md: 0 }}
      >
        {/* WRAPPER PARA EL DIVIDER SUPERIOR */}
        <Box display='flex' justifyContent='center' width='100%'>
          <Box width={{ xs: '90%', md: 'auto' }}>
            <Divider width={1000} height={2} />
          </Box>
        </Box>

        <Box
          mt={5}
          mb={5}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          rowGap={4}
        >
          {/* TÍTULO PRINCIPAL */}
          <Typography
            // 3. ANCHO Y FUENTE RESPONSIVE
            width={{ xs: '100%', md: '55%' }}
            fontSize={{ xs: 24, sm: 30, md: 38 }}
            fontWeight={500}
            textAlign='center' // Aseguramos alineación centro en móvil
            lineHeight={1.2}
          >
            {constant[language].firstTitle}{' '}
            <span style={{ fontWeight: 700 }}>
              {constant[language].secondTitle}
            </span>
            , {constant[language].thirdTitle}
          </Typography>

          {/* SUBTÍTULO */}
          <Typography
            textAlign={'center'}
            width={{ xs: '100%', md: '45%' }}
            fontSize={{ xs: 18, sm: 24, md: 34 }} // Más pequeño en móvil
            fontWeight={500}
            lineHeight={1.3}
          >
            {constant[language].subTitle}
          </Typography>

          {/* BOTÓN */}
          <Button
            sx={{
              borderRadius: 18,
              // 4. BOTÓN RESPONSIVE: 100% ancho en móvil, 159px en escritorio
              width: { xs: '100%', sm: 159 },
              height: 60,
              fontWeight: 600,
              fontSize: 16,
              mt: -1,
              mb: 1,
            }}
            variant='contained'
          >
            {constant[language].button}
          </Button>
        </Box>

        {/* WRAPPER PARA EL DIVIDER INFERIOR */}
        <Box display='flex' justifyContent='center' width='100%' mt={7}>
          <Box width={{ xs: '90%', md: 'auto' }}>
            <Divider width={1000} height={2} />
          </Box>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Ready;
