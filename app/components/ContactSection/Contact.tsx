'use client';

import FadeInSection from '@/app/components/common/FadeInSection';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from './SubmitButton';
import { constant } from '@/app/utils/contact-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Contact = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection id='contacts'>
      <Box
        mt={10}
        // CAMBIO PRINCIPAL AQUÍ:
        // xs: 4 (32px) -> Espacio seguro en móviles.
        // md: 14 (~7rem) -> Mucho espacio a los lados en escritorio para que no se vea apretado.
        px={{ xs: 4, lg: 16 }}
        display={'flex'}
        flexDirection={{ xs: 'column', lg: 'row' }}
        justifyContent={'space-between'}
        gap={{ xs: 6, lg: 4 }}
      >
        {/* --- COLUMNA 1 --- */}
        <Box
          width={{ xs: '100%', lg: '30%' }}
          textAlign={{ xs: 'center', lg: 'left' }}
          mt={{ xs: 0, lg: 10 }}
        >
          <Typography sx={{ color: '#2B2B2B' }} fontSize={16} fontWeight={400}>
            Lorem Ipsum has been the industry`s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </Typography>

          <Box
            display={'flex'}
            justifyContent={{ xs: 'center', lg: 'flex-start' }}
            columnGap={2}
            mt={3}
          >
            <Link href={''}>
              <Image
                width={28}
                height={28}
                src={'/assets/images/telegram-icon.png'}
                alt='Telegram'
              />
            </Link>
            <Link href={''}>
              <Image
                width={28}
                height={28}
                src={'/assets/images/facebook-icon.png'}
                alt='Facebook'
              />
            </Link>
            <Link href={''}>
              <Image
                width={28}
                height={28}
                src={'/assets/images/instagram-icon.png'}
                alt='Instagram'
              />
            </Link>
          </Box>
        </Box>

        {/* --- COLUMNA 2 --- */}
        <Box textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={700}
            fontSize={14}
            letterSpacing={3}
            lineHeight={5}
          >
            {constant[language].firstColumnTitle}
          </Typography>
          {constant[language].firstColumnItems.map((item, i) => (
            <Typography
              key={i}
              sx={{ color: '#2B2B2B' }}
              fontWeight={400}
              fontSize={14}
              lineHeight={3}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* --- COLUMNA 3 --- */}
        <Box textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={700}
            fontSize={14}
            letterSpacing={3}
            lineHeight={5}
          >
            {constant[language].secondColumnTitle}
          </Typography>
          {constant[language].secondColumnItems.map((item, i) => (
            <Typography
              key={i}
              sx={{ color: '#2B2B2B' }}
              fontWeight={400}
              fontSize={14}
              lineHeight={3}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* --- COLUMNA 4 --- */}
        <Box
          textAlign={{ xs: 'center', lg: 'left' }}
          display='flex'
          flexDirection='column'
          alignItems={{ xs: 'center', lg: 'flex-start' }}
        >
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={700}
            fontSize={14}
            letterSpacing={3}
            lineHeight={5}
          >
            {constant[language].thirdColumnTitle}
          </Typography>
          <SubmitButton />
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Contact;
