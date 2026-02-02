import { Box, Paper, Typography } from '@mui/material';

type AutomatizationCardProps = {
  title: string;
  subtitle: string;
};

const AutomatizationCard = ({ title, subtitle }: AutomatizationCardProps) => {
  return (
    <Paper
      elevation={0} // Opcional: para limpiar estilos base si usas boxShadow manual
      sx={{
        // 1. RESPONSIVE SIZE:
        // Ocupa el 100% disponible, pero nunca más de 550px
        width: '100%',
        maxWidth: 550,

        // La altura se adapta al contenido, pero mantiene el look original como mínimo
        height: 'auto',
        minHeight: 130,

        boxShadow: '0px 35px 116px -10px #9AA7C140',
        borderRadius: '24px',

        // Padding responsivo
        padding: { xs: 2, md: 2 },
        pr: { xs: 2, md: 4 }, // Un poco más de espacio a la derecha en desktop

        display: 'flex',
        alignItems: 'center', // Centra verticalmente el contenido
        gap: 2, // Espacio entre el icono y el texto (reemplaza márgenes manuales)
      }}
    >
      {/* Contenedor del SVG */}
      <Box
        sx={{
          flexShrink: 0, // IMPORTANTE: Evita que el icono se aplaste en pantallas pequeñas
          mt: -1, // Ajuste visual ligero para mantener tu alineación original
          ml: 1,
        }}
      >
        <svg
          width='80'
          height='80'
          viewBox='0 0 60 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='30' cy='30' r='30' fill='#F1F4F9' />
          <path
            d='M30 17.5L33 19.5L36.5 19.1L38 22.2L41.2 24L41 27.5L42.5 30.6L40.2 33.5L39.3 37L36 38.1L33.4 40.6L30 39.7L26.6 40.6L24 38.1L20.7 37L19.8 33.5L17.5 30.6L19 27.5L18.8 24L22 22.2L23.5 19.1L27 19.5L30 17.5Z'
            stroke='#2A458A'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M26.2 31.2L28.7 33.7L34.3 27.5'
            stroke='#2A458A'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Box>

      {/* Contenedor de Texto */}
      <Box>
        <Typography
          // 2. RESPONSIVE FONT:
          // 20px en móvil, 26px en escritorio
          fontSize={{ xs: 20, sm: 24, md: 26 }}
          fontWeight={700}
          lineHeight={1.2} // Mejora la lectura si el título salta de línea
        >
          {title}
        </Typography>
        <Typography
          // 16px en móvil, 20px en escritorio
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          fontWeight={500}
          sx={{ mt: 0.5 }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AutomatizationCard;
