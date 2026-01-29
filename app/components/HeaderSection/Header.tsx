'use client';
import { Box, Button } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  return (
    <Box
      width={'inherit'}
      padding={'1.5rem 7rem 0 7rem'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
        <Image
          src='/assets/images/logo.png'
          alt='Logo'
          width={182}
          height={50}
        />
      </Box>
      <nav>
        <Button
          sx={{ fontSize: '16px', fontWeight: '600', mr: '1.5rem' }}
          variant='text'
        >
          Demo
        </Button>
        <Button
          sx={{ fontSize: '16px', fontWeight: '600', mr: '1.5rem' }}
          variant='text'
        >
          About
        </Button>
        <Button
          sx={{ fontSize: '16px', fontWeight: '600', mr: '1.5rem' }}
          variant='text'
        >
          Pages
        </Button>
        <Button
          sx={{ fontSize: '16px', fontWeight: '600' }}
          variant='text'
        >
          Contact
        </Button>
      </nav>
    </Box>
  );
};

export default Header;
