'use client';
import React, { useState } from 'react';
import {
  Dialog,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { constant } from '@/app/utils/contact-constant';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  language: 'es' | 'en';
}

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  industry: '',
  country: '',
  plan: 'Standard',
};

const ContactModal = ({ open, onClose, language }: ContactModalProps) => {
  const isEs = language === 'es';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const resetForm = () => {
    setFormData(INITIAL_STATE);
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const textOnlyFields = [
      'firstName',
      'lastName',
      'country',
      'industry',
      'company',
    ];

    if (textOnlyFields.includes(name)) {
      const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setFormData({ ...formData, [name]: onlyLetters });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim())
      newErrors.firstName = isEs ? 'Nombre requerido' : 'Name required';
    if (!formData.lastName.trim())
      newErrors.lastName = isEs ? 'Apellido requerido' : 'Last name required';
    if (!formData.country.trim())
      newErrors.country = isEs ? 'País requerido' : 'Country required';

    if (!formData.email.trim()) {
      newErrors.email = isEs ? 'Correo requerido' : 'Email required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = isEs ? 'Email inválido' : 'Invalid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Datos enviados:', formData);
      alert(isEs ? '¡Enviado con éxito!' : 'Submitted successfully!');
      handleClose();
    }
  };

  const getFieldProps = (
    name: keyof typeof INITIAL_STATE,
    labelEs: string,
    labelEn: string,
  ) => ({
    name,
    fullWidth: true,
    value: formData[name],
    onChange: handleChange,
    error: !!errors[name],
    helperText: errors[name],
    variant: 'standard' as const,
    InputLabelProps: { shrink: true },
    label: isEs ? labelEs : labelEn,
    sx: {
      '& .MuiInputLabel-root': {
        color: '#304674',
        fontWeight: 600,
        fontSize: '1rem',
      },
      '& .MuiInput-root': { marginTop: '22px' },
    },
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='md'
      fullWidth
      fullScreen={isMobile}
      PaperProps={{
        sx: {
          borderRadius: isMobile ? 0 : 4,
          overflowY: 'auto',
          m: isMobile ? 0 : 2,
        },
      }}
    >
      <Box
        component='form'
        onSubmit={handleSubmit}
        display='flex'
        flexDirection={{ xs: 'column', md: 'row' }}
        position='relative'
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            zIndex: 10,
            color: { xs: 'white', md: 'grey.500' },
            bgcolor: { xs: 'rgba(0,0,0,0.1)', md: 'transparent' },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* --- SECCIÓN IZQUIERDA: CON IMAGEN DE FONDO --- */}
        <Box
          sx={{
            width: { xs: '100%', md: '35%' },
            // Se reemplaza el degradado por la imagen
            backgroundImage: 'url(/assets/images/contact-background.png)', // Asegúrate de tener esta imagen en tu carpeta pública
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            p: { xs: 4, md: 5 },
            pt: { xs: 4, md: 5 },
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative', // Para el overlay
            // Overlay oscuro para mejorar la legibilidad del texto
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%', // Ajusta la opacidad según necesites
              zIndex: 0,
            },
          }}
        >
          {/* Contenido dentro de un Box para estar sobre el overlay */}
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography fontWeight={700} mb={2} fontSize={19}>
              {constant[language].modalTitle}
            </Typography>
            <Typography
              variant='body2'
              mb={5}
              sx={{ opacity: 0.9, lineHeight: 1.6 }}
            >
              {constant[language].modalDescription}
            </Typography>

            <Stack spacing={3}>
              <ContactItem
                icon={<PhoneIcon fontSize='small' />}
                text='+54 911 3108 0286'
              />
              <ContactItem
                icon={<PhoneIcon fontSize='small' />}
                text='+53 55136383'
              />
              <ContactItem
                icon={<EmailIcon fontSize='small' />}
                text='orishia@dclicksoluciones.com'
              />
            </Stack>
          </Box>
        </Box>

        {/* --- COLUMNA DERECHA --- */}
        <Box
          sx={{
            width: { xs: '100%', md: '65%' },
            p: { xs: 4, md: 5 },
            bgcolor: 'white',
          }}
        >
          <Box
            display='grid'
            gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
            columnGap={4}
            rowGap={3}
          >
            <TextField
              {...getFieldProps('firstName', 'Nombre', 'First Name')}
            />
            <TextField
              {...getFieldProps('lastName', 'Apellido', 'Last Name')}
            />
            <TextField
              {...getFieldProps('email', 'Correo', 'Email')}
              placeholder='ejemplo@gmail.com'
            />
            <TextField {...getFieldProps('phone', 'Teléfono', 'Phone')} />
            <TextField {...getFieldProps('company', 'Empresa', 'Company')} />
            <TextField
              {...getFieldProps('industry', 'Industria', 'Industry')}
            />
            <Box sx={{ gridColumn: { sm: 'span 2' } }}>
              <TextField {...getFieldProps('country', 'País', 'Country')} />
            </Box>
          </Box>

          <Typography
            variant='subtitle2'
            fontWeight={700}
            color='#304674'
            mt={5}
            mb={2}
          >
            {isEs ? '¿Qué plan necesitas?' : 'Which plan do you need?'}
          </Typography>

          <RadioGroup
            value={formData.plan}
            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
          >
            <Box
              display='grid'
              gridTemplateColumns={{ xs: '1fr 1fr', sm: '1fr 1fr 1fr' }}
              gap={1}
            >
              {constant[language].plans.map(
                (plan) => (
                  <FormControlLabel
                    key={plan}
                    value={plan}
                    control={
                      <Radio
                        size='small'
                        sx={{ '&.Mui-checked': { color: '#2B438C' } }}
                      />
                    }
                    label={
                      <Typography variant='caption' sx={{ fontWeight: 500 }}>
                        {plan}
                      </Typography>
                    }
                  />
                ),
              )}
            </Box>
          </RadioGroup>

          <Box
            display='flex'
            justifyContent='flex-end'
            mt={5}
            mb={isMobile ? 2 : 0}
          >
            <Button
              type='submit'
              variant='contained'
              endIcon={<ArrowForwardIcon />}
              fullWidth={isMobile}
              sx={{
                borderRadius: 8,
                textTransform: 'none',
                px: 5,
                py: 1.8,
                bgcolor: '#2B438C',
                fontWeight: 600,
                '&:hover': { bgcolor: '#1A2E63' },
              }}
            >
              {isEs ? 'Contáctanos' : 'Contact us'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

const ContactItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <Box display='flex' alignItems='center' gap={2}>
    <Box
      sx={{
        bgcolor: 'rgba(255,255,255,0.2)',
        p: 1.2,
        borderRadius: '50%',
        display: 'flex',
      }}
    >
      {icon}
    </Box>
    <Typography variant='body2' sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
      {text}
    </Typography>
  </Box>
);

export default ContactModal;
