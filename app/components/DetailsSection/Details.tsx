'use client';
import FadeInSection from '@/app/utils/Fade';
import { Box, Button, Typography } from '@mui/material';

const Details = () => {
  return (
    <FadeInSection>
      <Box
        width={'inherit'}
        padding={'1.5rem 7rem 0 7rem'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Box mt={2}>
          <Typography
            sx={{ fontSize: { xs: '40px', sm: '40px', md: '80px' } }}
            fontWeight={100}
            textAlign={'center'}
          >
            Haz del servicio al cliente{' '}
            <span style={{ fontWeight: 800 }}>tu ventaja competitiva </span>
          </Typography>
        </Box>
        <Box sx={{ width: '45vw' }}>
          <Typography
            sx={{ fontSize: { xs: '20px', sm: '20px', md: '30px' } }}
            mt={5}
            textAlign={'center'}
          >
            La plataforma omnicanal que conecta, centraliza y potencia cada
            interacción con nuestra IA multiagente.
          </Typography>
        </Box>
        <Box
          mt={6}
          display={'flex'}
          sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <Button
            sx={{
              borderRadius: 18,
              width: 159,
              height: 60,
              fontWeight: 600,
              fontSize: 16,
              mr: { xs: 0, sm: '1rem' },
              mb: { xs: '1rem', sm: 0 },
            }}
            variant='contained'
          >
            Learn more
          </Button>
          <Button
            sx={{
              borderRadius: 18,
              width: 159,
              height: 60,
              fontWeight: 600,
              fontSize: 16,
            }}
            variant='outlined'
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Details;
