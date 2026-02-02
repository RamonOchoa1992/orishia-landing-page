'use client';

import FadeInSection from '@/app/utils/Fade';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from './SubmitButton';
import { constant } from './ready-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Contact = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box mt={10} display={'flex'} columnGap={12}>
        <Box width={'23vw'} mt={10}>
          <Typography sx={{ color: '#2B2B2B' }} fontSize={16} fontWeight={400}>
            Lorem Ipsum has been the industry`s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </Typography>
          <Box display={'flex'} columnGap={2} mt={3}>
            <Link href={''}>
              <Image
                width={28}
                height={28}
                src={'/assets/images/telegram-icon.png'}
                alt='Telegram'
              ></Image>
            </Link>
            <Link href={''}>
              <Image
                width={28}
                height={28}
                src={'/assets/images/facebook-icon.png'}
                alt='Telegram'
              ></Image>
            </Link>
            <Link href={''}>
              <Image
                width={28}
                height={28}
                src={'/assets/images/instagram-icon.png'}
                alt='Telegram'
              ></Image>
            </Link>
          </Box>
        </Box>
        <Box>
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
        <Box>
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
        <Box>
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
