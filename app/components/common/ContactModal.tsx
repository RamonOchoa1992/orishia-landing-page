'use client';
import React, { useState, useEffect } from 'react';
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
  CircularProgress,
  Snackbar,
  Alert,
  Slide,
  SlideProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { constant } from '@/app/utils/contact-constant';

// Nueva URL proporcionada
const GOOGLE_SHEETS_URL =
  'https://script.google.com/macros/s/AKfycbyzMmRHOYnTY34YphCc3ImtoG9TMGC408U9Z7-WjDBkm4D8rH9g3whZWBX1RPGjFrz-EA/exec';

function TransitionDown(props: SlideProps) {
  return <Slide {...props} direction='down' />;
}

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
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  useEffect(() => {
    if (open) {
      const defaultPlan =
        constant[language].plans.find((p) => p.includes('Standard')) ||
        constant[language].plans[1];
      setFormData((prev) => ({ ...prev, plan: defaultPlan }));
    }
  }, [open, language]);

  const resetForm = () => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setLoading(false);
  };

  const handleClose = () => {
    if (loading) return;
    resetForm();
    onClose();
  };

  const handleToastClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') return;
    setToast({ ...toast, open: false });
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
    if (errors[name]) setErrors({ ...errors, [name]: '' });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Mapeo riguroso de datos. Asegúrate de que tus columnas en el Sheet
    // se llamen exactamente como las claves de abajo (Nombre, Apellido, etc.)
    const dataToSend = {
      Nombre: formData.firstName,
      Apellido: formData.lastName,
      Correo: formData.email,
      Teléfono: formData.phone,
      Empresa: formData.company,
      Industria: formData.industry,
      País: formData.country,
      Plan: formData.plan,
    };

    try {
      // Usamos URLSearchParams para asegurar compatibilidad con Google Apps Script
      const body = new URLSearchParams();
      Object.entries(dataToSend).forEach(([key, value]) => {
        body.append(key, value);
      });

      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Evita errores de CORS, pero requiere URLSearchParams
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      // El éxito se asume aquí porque no-cors no devuelve respuesta legible
      handleClose();

      setTimeout(() => {
        setToast({
          open: true,
          message: isEs
            ? '¡Enviado con éxito! Nos contactaremos pronto.'
            : 'Submitted successfully!',
          severity: 'success',
        });
      }, 400);
    } catch (error) {
      console.error('Submission error:', error);
      setToast({
        open: true,
        message: isEs ? 'Hubo un problema al enviar.' : 'Error sending data.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
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
    disabled: loading,
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
    <>
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
            disabled={loading}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              zIndex: 10,
              color: { xs: 'white', md: 'grey.500' },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            sx={{
              width: { xs: '100%', md: '35%' },
              backgroundImage: 'url(/assets/images/contact-background.png)',
              backgroundSize: 'cover',
              p: { xs: 4, md: 5 },
              color: 'white',
            }}
          >
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
              name='plan'
              value={formData.plan}
              onChange={(e) =>
                setFormData({ ...formData, plan: e.target.value })
              }
            >
              <Box
                display='grid'
                gridTemplateColumns={{ xs: '1fr 1fr', sm: '1fr 1fr 1fr' }}
                gap={1}
              >
                {constant[language].plans.map((plan) => (
                  <FormControlLabel
                    key={plan}
                    value={plan}
                    disabled={loading}
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
                ))}
              </Box>
            </RadioGroup>

            <Box display='flex' justifyContent='flex-end' mt={5}>
              <Button
                type='submit'
                variant='contained'
                disabled={loading}
                endIcon={!loading && <ArrowForwardIcon />}
                fullWidth={isMobile}
                sx={{
                  borderRadius: 8,
                  textTransform: 'none',
                  px: 5,
                  py: 1.8,
                  bgcolor: '#2B438C',
                  fontWeight: 600,
                  minWidth: 150,
                  '&:hover': { bgcolor: '#1A2E63' },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color='inherit' />
                ) : isEs ? (
                  'Contáctanos'
                ) : (
                  'Contact us'
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>

      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={TransitionDown}
      >
        <Alert
          onClose={handleToastClose}
          severity={toast.severity}
          sx={{
            width: '100%',
            borderRadius: '16px',
            fontWeight: 600,
            boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
            bgcolor: toast.severity === 'success' ? '#E8F5E9' : '#FFEBEE',
            color: toast.severity === 'success' ? '#2E7D32' : '#C62828',
            border: `1px solid ${toast.severity === 'success' ? '#A5D6A7' : '#EF9A9A'}`,
            '& .MuiAlert-icon': {
              color: toast.severity === 'success' ? '#4CAF50' : '#F44336',
            },
          }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
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
