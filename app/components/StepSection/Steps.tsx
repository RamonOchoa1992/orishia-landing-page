'use client'
import { Box, Paper, Typography } from '@mui/material';
import Divider from '../common/Divider';
import FadeInSection from '@/app/utils/Fade';

const Steps = () => {
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
            De la idea a la acción
          </Typography>
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
            en 3 simples pasos
          </Typography>
          <Divider width={950} height={2} />
          <Typography
            mt={2}
            fontWeight={400}
            fontSize={26}
            width={'70%'}
            textAlign={'center'}
          >
            Tus clientes quieren respuestas rápidas, claras y al momento.{' '}
            <span style={{ fontWeight: 700 }}>
              Con OrishIA, eso se convierte en tu valor diferencia.
            </span>
          </Typography>
        </Box>
        <Box
          width='100%'
          display='flex'
          justifyContent='space-around'
          alignContent={'center'}
          mt={6}
          px={12}
        >
          <Paper
            sx={{
              width: '70%',
              height: 145,
              boxShadow: '0px 35px 116px -10px #9AA7C140',
              borderRadius: '24px',
              padding: '12px 24px',
              textAlign: 'right',
              //py: 2,
              //pr:2,
              //display: 'flex',
            }}
          >
            <Box
              display={'flex'}
              justifyContent={'flex-end'}
              alignItems={'center'}
              py={1}
            >
              <Box mr={4}>
                <Typography fontSize={40} fontWeight={700}>
                  ANÁLISIS Y DIAGNÓSTICO
                </Typography>
                <Typography fontSize={28} fontWeight={500}>
                  IDENTIFICAMOS TUS NECESIDADES ESPECÍFICAS
                </Typography>
              </Box>
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
          </Paper>
          <Box width={'25%'} display={'flex'} justifyContent={'center'}>
            <Typography pt={4} fontSize={48} fontWeight={600}>
              Paso 1.
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
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
        <Box
          width='100%'
          display='flex'
          justifyContent='space-around'
          alignContent={'center'}
          px={12}
        >
          <Box width={'25%'} display={'flex'} justifyContent={'center'}>
            <Typography pt={4} fontSize={48} fontWeight={600}>
              Paso 2.
            </Typography>
          </Box>
          <Paper
            sx={{
              width: '70%',
              height: 145,
              boxShadow: '0px 35px 116px -10px #9AA7C140',
              borderRadius: '24px',
              padding: '12px 24px',
              textAlign: 'right',
              //py: 2,
              //pr:2,
              //display: 'flex',
            }}
          >
            <Box
              display={'flex'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              py={1}
            >
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
              <Box ml={4}>
                <Typography fontSize={40} fontWeight={700}>
                  CONFIGURACIÓN PERSONALIZADA
                </Typography>
                <Typography fontSize={28} fontWeight={500}>
                  DISEÑAMOS UNA SOLUCIÓN HECHA A MEDIDA
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
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
        <Box
          width='100%'
          display='flex'
          justifyContent='space-around'
          alignContent={'center'}
          px={12}
        >
          <Paper
            sx={{
              width: '70%',
              height: 170,
              boxShadow: '0px 35px 116px -10px #9AA7C140',
              borderRadius: '24px',
              padding: '12px 24px',
              textAlign: 'right',
              //py: 2,
              //pr:2,
              //display: 'flex',
            }}
          >
            <Box
              display={'flex'}
              justifyContent={'flex-end'}
              alignItems={'center'}
              py={1}
            >
              <Box mr={4}>
                <Typography fontSize={40} fontWeight={700}>
                  OPTIMIZACIÓN CONTINUA
                </Typography>
                <Typography fontSize={28} fontWeight={500}>
                  MONITORIZAMOS Y MEJORAMOS LOS RESULTADOS CONSTANTEMENTE
                </Typography>
              </Box>
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
          </Paper>
          <Box width={'25%'} display={'flex'} justifyContent={'center'}>
            <Typography pt={6} fontSize={48} fontWeight={600}>
              Paso 3.
            </Typography>
          </Box>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Steps;
