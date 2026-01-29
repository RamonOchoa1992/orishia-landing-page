'use client';

import FadeInSection from '@/app/utils/Fade';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from './SubmitButton';
import Divider from '../common/Divider';

const Contact = () => {
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
            COMPANY
          </Typography>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={400}
            fontSize={14}
            lineHeight={3}
          >
            About
          </Typography>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={400}
            fontSize={14}
            lineHeight={3}
          >
            Features
          </Typography>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={400}
            fontSize={14}
            lineHeight={3}
          >
            Works
          </Typography>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={400}
            fontSize={14}
            lineHeight={3}
          >
            Career
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={700}
            fontSize={14}
            letterSpacing={3}
            lineHeight={5}
          >
            HELP
          </Typography>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={400}
            fontSize={14}
            lineHeight={3}
          >
            Customer Support
          </Typography>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={400}
            fontSize={14}
            lineHeight={3}
          >
            Delivery Details
          </Typography>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={400}
            fontSize={14}
            lineHeight={3}
          >
            Terms & Conditions
          </Typography>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={400}
            fontSize={14}
            lineHeight={3}
          >
            Privacy Policy
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: '#2B2B2B' }}
            fontWeight={700}
            fontSize={14}
            letterSpacing={3}
            lineHeight={5}
          >
            SUBSCRIBE TO NEWSLETTER
          </Typography>
          <SubmitButton />
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Contact;
