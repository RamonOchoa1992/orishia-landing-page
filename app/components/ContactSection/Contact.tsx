'use client';

import FadeInSection from '@/app/components/common/FadeInSection';
import { Box, Button, Typography, Stack, Tooltip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { constant } from '@/app/utils/contact-constant';
import useLanguageStore from '@/app/store/useLanguageStore';
import { theme } from '@/app/theme/default';

const Contact = () => {
  const { language } = useLanguageStore();
  const PRIMARY_COLOR = theme.palette.primary.main;

  const contactData = [
    {
      type: 'phone',
      flag: 'https://flagcdn.com/h40/ar.png',
      text: '(+54) 9 11 3108-0286',
      alt: 'Argentina Flag',
      href: 'tel:+5491131080286',
    },
    {
      type: 'phone',
      flag: 'https://flagcdn.com/h40/cu.png',
      text: '(+53) 5513-6383',
      alt: 'Cuba Flag',
      href: 'tel:+5355136383',
    },
    {
      type: 'email',
      icon: <MailOutlineIcon sx={{ color: PRIMARY_COLOR, fontSize: 24 }} />,
      text: 'orishia@dclicksoluciones.com',
      href: 'mailto:orishia@dclicksoluciones.com',
    },
  ];

  return (
    <FadeInSection id='contacts'>
      <Box
        mt={15}
        px={{ xs: 4, lg: 16 }}
        display={'flex'}
        flexDirection={{ xs: 'column', lg: 'row' }}
        justifyContent={'space-between'}
        alignItems={{ xs: 'center', lg: 'flex-start' }}
        gap={{ xs: 8, lg: 0 }}
      >
        {/* --- COLUMNA 1: INFO & SOCIAL --- */}
        <Box
          width={{ xs: '100%', lg: '30%' }}
          textAlign={{ xs: 'center', lg: 'left' }}
        >
          <Box mb={2}>
            <Image
              src='/assets/images/logo.png'
              alt='Logo'
              width={190}
              height={60}
              priority
            />
          </Box>
          <Typography  fontSize={16} fontWeight={400}>
            {constant[language].logoText}
          </Typography>

          <Box
            display={'flex'}
            justifyContent={{ xs: 'center', lg: 'flex-start' }}
            columnGap={2}
            alignItems={'center'}
            mt={3}
          >
            {['whatsapp', 'facebook', 'twitter', 'linkedin', 'instagram'].map(
              (social) => (
                <Link key={social} href={'#'}>
                  <Tooltip title={social.charAt(0).toUpperCase() + social.slice(1)}>
                    <Image
                      width={21}
                      height={24}
                      src={`/assets/images/${social}-icon.png`}
                      alt={social}
                    />
                  </Tooltip>
                </Link>
              ),
            )}
          </Box>
        </Box>

        {/* --- BLOQUE DERECHO --- */}
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={{ xs: 8, sm: 10, lg: 12 }}
          width={{ xs: '100%', lg: 'auto' }}
          justifyContent={{ xs: 'center', lg: 'flex-end' }}
        >
          {/* --- COLUMNA 2: NAVEGACIÓN --- */}
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={{ xs: 'center', sm: 'flex-start' }}
          >
            {constant[language].secondColumnItems.map((item, index) => (
              <Button
                key={index}
                href={item.href}
                variant='text'
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: PRIMARY_COLOR,
                  textTransform: 'none',
                  minWidth: 0,
                  justifyContent: 'flex-start',
                  '&:hover': {
                    backgroundColor: `${PRIMARY_COLOR}10`,
                    color: PRIMARY_COLOR,
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* --- COLUMNA 3: CONTACTOS (Alineada con la 2) --- */}
          <Box
            display='flex'
            flexDirection='column'
            alignItems={{ xs: 'center', sm: 'flex-start' }}
          >
            <Stack spacing={0}>
              <Typography
                fontSize={16}
                fontWeight={600}
                mt={0.5}
                mb={1.2}
                textAlign={{ xs: 'center', md: 'left' }}
              >
                {constant[language].thirdColumnTitle}
              </Typography>
              {contactData.map((item, index) => (
                <Stack
                  key={index}
                  direction='row'
                  spacing={2}
                  alignItems='center'
                  sx={{ py: '6px' }} // Ajuste exacto para igualar la altura visual del Button
                >
                  <Box
                    sx={{
                      width: 32,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {item.type === 'phone' ? (
                      <Box
                        sx={{
                          width: '100%',
                          height: 20,
                          borderRadius: '4px',
                          overflow: 'hidden',
                          border: '1px solid #e0e0e0',
                          display: 'flex',
                          position: 'relative',
                        }}
                      >
                        <Image
                          src={item.flag as string}
                          alt={item.alt as string}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </Box>
                    ) : (
                      item.icon
                    )}
                  </Box>

                  <Link
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: PRIMARY_COLOR,
                      fontWeight: 600,
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.text}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </FadeInSection>
  );
};

export default Contact;
