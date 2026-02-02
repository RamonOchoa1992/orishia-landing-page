'use client';
import { Box, Button, Typography } from '@mui/material';
import Divider from '../common/Divider';
import FadeInSection from '@/app/utils/Fade';
import { constant } from './ready-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Ready = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box mt={25}>
        <Divider width={1000} height={2} />
        <Box
          mt={5}
          mb={5}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          rowGap={4}
        >
          <Typography width={'55%'} fontSize={38} fontWeight={500}>
            {language === 'es'
              ? constant.es.firstTitle
              : constant.en.firstTitle}{' '}
            <span style={{ fontWeight: 700 }}>
              {language === 'es'
                ? constant.es.secondTitle
                : constant.en.secondTitle}
            </span>
            ,{' '}
            {language === 'es'
              ? constant.es.thirdTitle
              : constant.en.thirdTitle}
          </Typography>
          <Typography
            textAlign={'center'}
            width={'45%'}
            fontSize={34}
            fontWeight={500}
          >
            {language === 'es' ? constant.es.subTitle : constant.en.subTitle}
          </Typography>
          <Button
            sx={{
              borderRadius: 18,
              width: 159,
              height: 60,
              fontWeight: 600,
              fontSize: 16,
              mt: -1,
              mb: 1,
            }}
            variant='contained'
          >
            {language === 'es' ? constant.es.button : constant.en.button}
          </Button>
        </Box>
        <Divider width={1000} height={2} />
      </Box>
    </FadeInSection>
  );
};

export default Ready;
