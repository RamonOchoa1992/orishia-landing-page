'use client';
import useLanguageStore from '@/app/store/useLanguageStore';
import FadeInSection from '@/app/utils/Fade';
import { Box, Button, Typography } from '@mui/material';
import { constant } from './details-constant';

const Details = () => {
  const { language } = useLanguageStore();
  
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
            {language === 'es' ? constant.es.title : constant.en.title}{' '}
            <span style={{ fontWeight: 800 }}>
              {' '}
              {language === 'es'
                ? constant.es.titleBold
                : constant.en.titleBold}
            </span>
          </Typography>
        </Box>
        <Box sx={{ width: '45vw' }}>
          <Typography
            sx={{ fontSize: { xs: '20px', sm: '20px', md: '30px' } }}
            mt={5}
            textAlign={'center'}
          >
            {language === 'es' ? constant.es.subtitle : constant.en.subtitle}
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
            {language === 'es'
              ? constant.es.firstButton
              : constant.en.firstButton}
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
            {language === 'es' ? constant.es.secondButton : constant.en.secondButton}
          </Button>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Details;
