'use client';
import { Box, Paper, Typography } from '@mui/material';
import Divider from '../common/Divider';
import FadeInSection from '@/app/components/common/FadeInSection';
import { constant } from '@/app/utils/step-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Steps = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box px={{ xs: 2, md: 0 }}>
        {' '}
        {/* Padding lateral de seguridad en móvil */}
        {/* --- HEADER --- */}
        <Box
          mt={{ xs: 6, md: 4 }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
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
          <Typography
            fontWeight={400}
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
            {constant[language].description}
          </Typography>

          {/* Divider Responsive Wrapper */}
          <Box
            sx={{
              width: { xs: '90%', md: 'auto' },
              display: 'flex',
              justifyContent: 'center',
              my: 2,
            }}
          >
            <Divider width={950} height={2} />
          </Box>

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
        {/* --- STEP 1 --- */}
        <Box
          width='100%'
          display='flex'
          // RESPONSIVE LAYOUT:
          // xs: column-reverse (El texto "Paso 1" queda arriba, la tarjeta abajo)
          // md: row (Diseño original izquierda-derecha)
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          justifyContent='space-around'
          alignItems='center'
          mt={8}
          mb={8}
          px={{ xs: 0, md: 12 }} // Quitamos el padding enorme en móvil
          gap={{ xs: 2, md: 0 }} // Espacio entre elementos en móvil
        >
          <Paper
            elevation={0} // Opcional si usas boxShadow manual
            sx={{
              width: { xs: '100%', md: '70%' },
              height: 'auto', // Altura dinámica
              minHeight: 145,
              boxShadow: '0px 35px 116px -10px #9AA7C140',
              borderRadius: '24px',
              padding: { xs: '20px', md: '12px 24px' },
              textAlign: 'right',
            }}
          >
            <Box
              display={'flex'}
              justifyContent={'flex-end'}
              alignItems={'center'}
              py={1}
            >
              <Box mr={{ xs: 2, md: 4 }}>
                <Typography
                  fontSize={{ xs: 24, md: 40 }}
                  fontWeight={700}
                  lineHeight={1.2}
                >
                  {constant[language].firstTitle}
                </Typography>
                <Typography
                  fontSize={{ xs: 16, md: 28 }}
                  fontWeight={500}
                  lineHeight={1.3}
                >
                  {constant[language].firstDescription}
                </Typography>
              </Box>
              <Box flexShrink={0}>
                {' '}
                {/* Evita que la barra naranja se aplaste */}
                <svg
                  width={4}
                  height={100}
                  viewBox={`0 0 ${4} ${100}`}
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='none'
                >
                  <rect width={4} height={100} fill='#F28C38' />
                </svg>
              </Box>
            </Box>
          </Paper>

          <Box
            width={{ xs: '100%', md: '25%' }}
            display={'flex'}
            justifyContent={'center'}
          >
            <Typography fontSize={{ xs: 32, md: 48 }} fontWeight={600}>
              {constant[language].firstStep}
            </Typography>
          </Box>
        </Box>
        {/* --- CONNECTOR 1 (Solo Desktop) --- */}
        <Box
          display={{ xs: 'none', md: 'flex' }} // Oculto en móvil
          justifyContent={'center'}
          alignItems={'center'}
        >
          <svg
            width='100'
            height='100'
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='25'
              y1='20'
              x2='50'
              y2='45'
              stroke='#F28C38'
              strokeWidth='6'
              strokeLinecap='round'
            />
            <line
              x1='60'
              y1='55'
              x2='85'
              y2='80'
              stroke='#F28C38'
              strokeWidth='6'
              strokeLinecap='round'
            />
          </svg>
        </Box>
        {/* --- STEP 2 --- */}
        <Box
          width='100%'
          display='flex'
          // RESPONSIVE LAYOUT:
          // xs: column (Texto "Paso 2" arriba, Tarjeta abajo)
          // md: row (Diseño original)
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent='space-around'
          alignItems='center'
          px={{ xs: 0, md: 12 }}
          mt={{ xs: 4, md: 0 }} // Margen en móvil porque no hay conector
          gap={{ xs: 2, md: 0 }}
        >
          <Box
            width={{ xs: '100%', md: '25%' }}
            display={'flex'}
            justifyContent={'center'}
          >
            <Typography fontSize={{ xs: 32, md: 48 }} fontWeight={600}>
              {constant[language].secondStep}
            </Typography>
          </Box>

          <Paper
            sx={{
              width: { xs: '100%', md: '70%' },
              height: 'auto',
              minHeight: 145,
              boxShadow: '0px 35px 116px -10px #9AA7C140',
              borderRadius: '24px',
              padding: { xs: '20px', md: '12px 24px' },
              textAlign: 'left', // Alineación izquierda para este paso
            }}
          >
            <Box
              display={'flex'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              py={1}
            >
              <Box flexShrink={0}>
                <svg
                  width={4}
                  height={100}
                  viewBox={`0 0 ${4} ${100}`}
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='none'
                >
                  <rect width={4} height={100} fill='#F28C38' />
                </svg>
              </Box>
              <Box ml={{ xs: 2, md: 4 }}>
                <Typography
                  fontSize={{ xs: 24, md: 40 }}
                  fontWeight={700}
                  lineHeight={1.2}
                >
                  {constant[language].secondTitle}
                </Typography>
                <Typography
                  fontSize={{ xs: 16, md: 28 }}
                  fontWeight={500}
                  lineHeight={1.3}
                >
                  {constant[language].secondDescription}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
        {/* --- CONNECTOR 2 (Solo Desktop) --- */}
        <Box
          display={{ xs: 'none', md: 'flex' }} // Oculto en móvil
          justifyContent={'center'}
          alignItems={'center'}
        >
          <svg
            width='100'
            height='100'
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='75'
              y1='20'
              x2='50'
              y2='45'
              stroke='#F28C38'
              strokeWidth='6'
              strokeLinecap='round'
            />
            <line
              x1='42'
              y1='55'
              x2='18'
              y2='80'
              stroke='#F28C38'
              strokeWidth='6'
              strokeLinecap='round'
            />
          </svg>
        </Box>
        {/* --- STEP 3 --- */}
        <Box
          width='100%'
          display='flex'
          // RESPONSIVE LAYOUT: Same as Step 1
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          justifyContent='space-around'
          alignItems='center'
          px={{ xs: 0, md: 12 }}
          mt={{ xs: 4, md: 0 }}
          gap={{ xs: 2, md: 0 }}
        >
          <Paper
            sx={{
              width: { xs: '100%', md: '70%' },
              height: 'auto',
              minHeight: 170, // Altura original
              boxShadow: '0px 35px 116px -10px #9AA7C140',
              borderRadius: '24px',
              padding: { xs: '20px', md: '12px 24px' },
              textAlign: 'right',
            }}
          >
            <Box
              display={'flex'}
              justifyContent={'flex-end'}
              alignItems={'center'}
              py={1}
            >
              <Box mr={{ xs: 2, md: 4 }}>
                <Typography
                  fontSize={{ xs: 24, md: 40 }}
                  fontWeight={700}
                  lineHeight={1.2}
                >
                  {constant[language].thirdTitle}
                </Typography>
                <Typography
                  fontSize={{ xs: 16, md: 28 }}
                  fontWeight={500}
                  lineHeight={1.3}
                >
                  {constant[language].thirdDescription}
                </Typography>
              </Box>
              <Box flexShrink={0}>
                <svg
                  width={4}
                  height={110}
                  viewBox={`0 0 ${4} ${110}`}
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='none'
                >
                  <rect width={4} height={110} fill='#F28C38' />
                </svg>
              </Box>
            </Box>
          </Paper>

          <Box
            width={{ xs: '100%', md: '25%' }}
            display={'flex'}
            justifyContent={'center'}
          >
            <Typography fontSize={{ xs: 32, md: 48 }} fontWeight={600}>
              {constant[language].thirdStep}
            </Typography>
          </Box>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Steps;
