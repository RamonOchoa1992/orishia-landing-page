'use client';
import React, { useState } from 'react'; // 1. Importar useState
import { Box, Button, Typography } from '@mui/material';
import Divider from '../common/Divider';
import FadeInSection from '@/app/components/common/FadeInSection';
import { constant } from '@/app/utils/ready-constant';
import useLanguageStore from '@/app/store/useLanguageStore';
import ContactModal from '@/app/components/common/ContactModal'; // 2. Importar tu modal

const Ready = () => {
  const { language } = useLanguageStore();

  // 3. Estado para controlar el Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para abrir y cerrar
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <FadeInSection>
      <Box
        mt={{ xs: 8, md: language === 'es' ? 13 : 16.5 }}
        px={{ xs: 2, md: 0 }}
      >
        {/* DIVIDER SUPERIOR */}
        <Box display='flex' justifyContent='center' width='100%'>
          <Box width={{ xs: '90%', md: 'auto' }}>
            <Divider width={1000} height={2} />
          </Box>
        </Box>

        <Box
          mt={5}
          mb={5}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          rowGap={4}
        >
          {/* TÍTULOS */}
          <Typography
            width={{ xs: '100%', md: '55%' }}
            fontSize={{ xs: 24, sm: 30, md: 38 }}
            fontWeight={500}
            textAlign='center'
            lineHeight={1.2}
          >
            {constant[language].firstTitle}{' '}
            <span style={{ fontWeight: 700 }}>
              {constant[language].secondTitle}
            </span>
            , {constant[language].thirdTitle}
          </Typography>

          <Typography
            textAlign={'center'}
            width={{ xs: '100%', md: '45%' }}
            fontSize={{ xs: 18, sm: 24, md: 34 }}
            fontWeight={500}
            lineHeight={1.3}
          >
            {constant[language].subTitle}
          </Typography>

          {/* 4. BOTÓN CON EVENTO CLICK */}
          <Button
            onClick={handleOpenModal} // Llamamos a la función para abrir
            sx={{
              borderRadius: 18,
              width: { xs: '100%', sm: 159 },
              height: 60,
              fontWeight: 600,
              fontSize: 16,
              mt: -1,
              mb: 1,
              bgcolor: '#2B438C', // Asegurando el color de tu marca
              '&:hover': { bgcolor: '#1A2E63' },
            }}
            variant='contained'
          >
            {constant[language].button}
          </Button>
        </Box>

        {/* DIVIDER INFERIOR */}
        <Box display='flex' justifyContent='center' width='100%' mt={7}>
          <Box width={{ xs: '90%', md: 'auto' }}>
            <Divider width={1000} height={2} />
          </Box>
        </Box>

        {/* 5. EL COMPONENTE MODAL */}
        <ContactModal
          open={isModalOpen}
          onClose={handleCloseModal}
          language={language}
        />
      </Box>
    </FadeInSection>
  );
};

export default Ready;
