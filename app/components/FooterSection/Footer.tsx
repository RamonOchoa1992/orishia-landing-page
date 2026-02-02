'use client';

import { Box, Typography } from '@mui/material';
import Divider from '../common/Divider';
import { constant } from './footer-constant';
import useLanguageStore from '@/app/store/useLanguageStore';
import FadeInSection from '@/app/utils/Fade';

const Footer = () => {
  const { language } = useLanguageStore();

  return (
    <FadeInSection>
      <Box
        mt={12}
        pb={{ xs: 4, md: 3 }}
        // Padding lateral de seguridad
        px={{ xs: 2, md: 0 }}
      >
        {/* Wrapper para controlar el ancho del Divider en móvil */}
        <Box display='flex' justifyContent='center' width='100%'>
          <Box width={{ xs: '90%', md: 'auto' }}>
            <Divider width={800} height={2} />
          </Box>
        </Box>

        <Box display={'flex'} justifyContent={'center'} mt={4}>
          <Typography
            fontSize={14}
            fontWeight={400}
            sx={{ color: '#2B2B2B' }}
            textAlign='center' // Asegura que si el texto es largo, se centre bien
          >
            {constant[language].title}
          </Typography>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Footer;
