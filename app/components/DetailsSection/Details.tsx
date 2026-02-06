'use client';
import { useState } from 'react'; // Importamos useState
import useLanguageStore from '@/app/store/useLanguageStore';
import FadeInSection from '@/app/components/common/FadeInSection';
import { Box, Button, Typography } from '@mui/material';
import { constant } from '@/app/utils/details-constant';
import ContactModal from '../common/ContactModal';

const Details = () => {
  const { language } = useLanguageStore();
  const [openModal, setOpenModal] = useState(false); // Estado para el modal

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <FadeInSection>
      <Box
        width={'100%'}
        sx={{
          padding: { xs: '1.5rem', md: '1.5rem 7rem 0 7rem' },
        }}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Box mt={2} sx={{ maxWidth: '100%' }}>
          <Typography
            sx={{ fontSize: { xs: '40px', sm: '40px', md: '80px' } }}
            fontWeight={100}
            textAlign={'center'}
            style={{ wordBreak: 'break-word' }}
          >
            {constant[language].title}{' '}
            <span style={{ fontWeight: 800 }}>
              {constant[language].titleBold}
            </span>
          </Typography>
        </Box>

        <Box sx={{ width: { xs: '90%', md: '45vw' } }}>
          <Typography
            sx={{ fontSize: { xs: '20px', sm: '20px', md: '30px' } }}
            mt={5}
            textAlign={'center'}
          >
            {constant[language].subtitle}
          </Typography>
        </Box>

        <Box
          mt={6}
          display={'flex'}
          gap={2}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Button
            onClick={handleOpen} // Evento para abrir el modal
            sx={{
              borderRadius: 18,
              width: { xs: '100%', sm: 159 },
              height: 60,
              fontWeight: 600,
              fontSize: 16,
            }}
            variant='contained'
          >
            {constant[language].secondButton}
          </Button>
        </Box>
      </Box>

      {/* Renderizado del Modal */}
      <ContactModal
        open={openModal}
        onClose={handleClose}
        language={language}
      />
    </FadeInSection>
  );
};

export default Details;
