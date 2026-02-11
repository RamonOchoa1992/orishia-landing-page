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
  Autocomplete,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { constant } from '@/app/utils/contact-constant';

const GOOGLE_SHEETS_URL =
  'https://script.google.com/macros/s/AKfycbzbsNPcpN7O-kZavhbCK7HtOG81VZxFOlg-zniwe5QQmPNzWpyyNJ8xg83xjSjD-kOl/exec';

// Tipado para la API de Países (REST Countries)
interface CountryResponse {
  name: {
    common: string;
  };
  translations?: {
    spa?: {
      common: string;
    };
  };
  cca2: string;
  flags: {
    png: string;
  };
}

interface CountryOption {
  name: string;
  code: string;
  flag: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  country: string;
  plan: string;
}

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  language: 'es' | 'en';
  planIndex?: number;
}

const INITIAL_STATE: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  industry: '',
  country: '',
  plan: 'Standard',
};

const INDUSTRIES = {
  es: ['Tecnología', 'Salud'],
  en: ['Technology', 'Healthcare'],
};

function TransitionDown(props: SlideProps) {
  return <Slide {...props} direction='down' />;
}

const ContactModal: React.FC<ContactModalProps> = ({
  open,
  onClose,
  language,
  planIndex,
}) => {
  const isEs = language === 'es';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [loadingCountries, setLoadingCountries] = useState<boolean>(false);

  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Fetch de países con tipado estricto
  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      setLoadingCountries(true);
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,cca2,flags,translations',
        );
        if (!response.ok) throw new Error('Failed to fetch countries');

        const data: CountryResponse[] = await response.json();

        const formattedCountries: CountryOption[] = data
          .map((country) => ({
            name: isEs
              ? country.translations?.spa?.common || country.name.common
              : country.name.common,
            code: country.cca2,
            flag: country.flags.png,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, [isEs]);

  // Actualizar plan por defecto según props
  useEffect(() => {
    if (open) {
      const plans = constant[language].plans;
      const defaultPlan = plans[planIndex ?? 1] || plans[0];
      setFormData((prev) => ({ ...prev, plan: defaultPlan }));
    }
  }, [open, language, planIndex]);

  const handleClose = (): void => {
    if (loading) return;
    setFormData(INITIAL_STATE);
    setErrors({});
    onClose();
  };

  const handleToastClose = (
    _?: React.SyntheticEvent | Event,
    reason?: string,
  ): void => {
    if (reason === 'clickaway') return;
    setToast((prev) => ({ ...prev, open: false }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    // Validación de solo letras para ciertos campos
    const textOnlyFields: (keyof FormData)[] = [
      'firstName',
      'lastName',
      'industry',
      'company',
    ];
    const processedValue = textOnlyFields.includes(key)
      ? value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
      : value;

    setFormData((prev) => ({ ...prev, [key]: processedValue }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const body = new URLSearchParams();
    // Mapeo manual para asegurar claves en español para el Google Sheet
    body.append('Nombre', formData.firstName);
    body.append('Apellido', formData.lastName);
    body.append('Correo', formData.email);
    body.append('Teléfono', formData.phone);
    body.append('Empresa', formData.company);
    body.append('Industria', formData.industry);
    body.append('País', formData.country);
    body.append('Plan', formData.plan);

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      handleClose();
      setTimeout(() => {
        setToast({
          open: true,
          message: isEs ? '¡Enviado con éxito!' : 'Submitted successfully!',
          severity: 'success',
        });
      }, 400);
    } catch (error) {
      setToast({
        open: true,
        message: isEs ? 'Error al enviar.' : 'Error sending data.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper para props de TextField con tipado
  const getFieldProps = (
    name: keyof FormData,
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

  const fieldStyle = {
    '& .MuiInputLabel-root': { color: '#304674', fontWeight: 600 },
    '& .MuiInput-root': { mt: '20px' },
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='md'
        fullWidth
        fullScreen={isMobile}
        PaperProps={{
          sx: { borderRadius: isMobile ? 0 : 4, overflowY: 'auto' },
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

          {/* Panel Lateral */}
          <Box
            sx={{
              width: { xs: '100%', md: '35%' },
              backgroundImage: 'url(/assets/images/contact-background.png)',
              backgroundSize: 'cover',
              p: { xs: 4, md: 5 },
              color: 'white',
            }}
          >
            <Typography variant='h6' fontWeight={700} mb={2}>
              {constant[language].modalTitle}
            </Typography>
            <Typography
              variant='body2'
              mb={4}
              sx={{ opacity: 0.85, lineHeight: 1.6 }}
            >
              {constant[language].modalDescription}
            </Typography>
            <Stack spacing={2.5}>
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

          {/* Formulario */}
          <Box
            sx={{ width: { xs: '100%', md: '65%' }, p: 4, bgcolor: 'white' }}
          >
            <Box
              display='grid'
              gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
              gap={3}
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
              <Autocomplete
                options={INDUSTRIES[language]}
                value={formData.industry || null}
                onChange={(_, v) =>
                  setFormData((p) => ({ ...p, industry: v || '' }))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={isEs ? 'Industria' : 'Industry'}
                    variant='standard'
                    InputLabelProps={{ shrink: true }}
                    sx={fieldStyle}
                  />
                )}
              />

              <Box sx={{ gridColumn: { sm: 'span 2' } }}>
                <Autocomplete<CountryOption>
                  disabled={loading || loadingCountries}
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.name}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value.name
                  }
                  value={
                    countries.find((c) => c.name === formData.country) || null
                  }
                  onChange={(_, newValue) => {
                    setFormData((prev) => ({
                      ...prev,
                      country: newValue ? newValue.name : '',
                    }));
                    if (errors.country)
                      setErrors((prev) => ({ ...prev, country: '' }));
                  }}
                  renderOption={(props, option) => (
                    <Box
                      component='li'
                      sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                      {...props}
                      key={option.code}
                    >
                      <img
                        key={option.code}
                        loading='lazy'
                        width='20'
                        src={option.flag}
                        alt=''
                      />
                      {option.name} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      {...getFieldProps('country', 'País', 'Country')}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <React.Fragment>
                            {loadingCountries ? (
                              <CircularProgress color='inherit' size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        ),
                      }}
                    />
                  )}
                />
              </Box>
            </Box>

            <Typography
              variant='subtitle2'
              fontWeight={700}
              color='#304674'
              mt={4}
              mb={1}
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

            <Box display='flex' justifyContent='flex-end' mt={4}>
              <Button
                type='submit'
                variant='contained'
                disabled={loading}
                endIcon={!loading && <ArrowForwardIcon />}
                sx={{
                  borderRadius: 6,
                  px: 4,
                  py: 1.5,
                  bgcolor: '#2B438C',
                  textTransform: 'none',
                  fontWeight: 600,
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
          severity={toast.severity}
          variant='filled'
          onClose={handleToastClose}
          sx={{ width: '100%', borderRadius: 2 }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <Box display='flex' alignItems='center' gap={2}>
    <Box
      sx={{
        bgcolor: 'rgba(255,255,255,0.15)',
        p: 1,
        borderRadius: '50%',
        display: 'flex',
      }}
    >
      {icon}
    </Box>
    <Typography variant='body2' sx={{ fontSize: '0.85rem' }}>
      {text}
    </Typography>
  </Box>
);

export default ContactModal;
