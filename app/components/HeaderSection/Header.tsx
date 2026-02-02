'use client';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import LanguageToggle from './LanguageToogle';
import { constant } from './header-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Header = () => {
  const { language } = useLanguageStore();  

  return (
    <Box
      component='header'
      sx={{
        width: '100%',
        padding: '1.5rem 7rem 0 7rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* 1. LOGO */}
      <Box>
        <Image
          src='/assets/images/logo.png'
          alt='Logo'
          width={182}
          height={50}
          priority // Buena práctica para el logo en Next.js
        />
      </Box>

      {/* 2. NAVEGACIÓN Y ACCIONES GLOBALES */}
      <Box display='flex' alignItems='center' component='nav'>
        {/* Links de navegación agrupados */}
        <Box sx={{ display: 'flex', mr: '2rem' }}>
          <Button
            sx={{ fontSize: '16px', fontWeight: '600', mx: '0.75rem' }}
            variant='text'
          >
            {constant[language].firstNav}
          </Button>
          <Button
            sx={{ fontSize: '16px', fontWeight: '600', mx: '0.75rem' }}
            variant='text'
          >
            {constant[language].secondNav}
          </Button>
          <Button
            sx={{ fontSize: '16px', fontWeight: '600', mx: '0.75rem' }}
            variant='text'
          >
            {constant[language].thirdNav}
          </Button>
          <Button
            sx={{ fontSize: '16px', fontWeight: '600', ml: '0.75rem' }}
            variant='text'
          >
            {constant[language].fourthNav}
          </Button>
        </Box>

        {/* 3. ACCIONES (Toggle de Idioma al final) */}
        <Box sx={{ borderLeft: '1px solid #e0e0e0', pl: '2rem' }}>
          <LanguageToggle />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
