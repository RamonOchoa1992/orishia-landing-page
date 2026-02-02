import { Box, Paper, Typography } from "@mui/material";

type AutomatizationCardProps = {
  title: string,
  subtitle: string
}

const AutomatizationCard = ({ title, subtitle }: AutomatizationCardProps) => {
  return (
    <Paper
      elevation={0} // Opcional: para quitar sombra por defecto si usas boxShadow manual
      sx={{
        // 1. ANCHO RESPONSIVE
        // Ocupa el 100% del ancho disponible en móvil, pero se detiene en 550px
        width: '100%', 
        maxWidth: 550, 
        
        // 2. ALTO DINÁMICO
        // 'auto' permite que crezca si el texto es largo.
        // 'minHeight' mantiene la estética original si hay poco texto.
        height: 'auto',
        minHeight: 130,
        
        boxShadow: '0px 35px 116px -10px #9AA7C140',
        borderRadius: '24px',
        
        // Padding adaptable
        p: { xs: 2, md: 2 }, // Padding general (py, pr, pl, pt)
        pr: { xs: 2, md: 4 }, // Un poco más de espacio a la derecha en desktop

        display: 'flex',
        alignItems: 'flex-start', // Alinea el icono arriba si el texto crece mucho
      }}
    >
      {/* Contenedor para el SVG */}
      <Box 
        component="div" 
        sx={{ 
            margin: '-.5rem 1rem 0 0', // Ajusté el margen derecho a 0 y lo controlo con el Box
            mr: { xs: 1, md: 2 }, // Margen derecho responsive
            flexShrink: 0 // IMPORTANTE: Evita que el icono se aplaste
        }}
      >
        <svg
          width='80'
          height='80'
          viewBox='0 0 60 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{ display: 'block' }} // Evita espacios fantasma en svg
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
      <Box sx={{ pt: 1 }}> {/* Un poco de padding top para alinear con el icono */}
        <Typography 
            // 3. FUENTE RESPONSIVE
            // Más pequeña en móvil (20px) y original en desktop (26px)
            fontSize={{ xs: 20, md: 26 }} 
            fontWeight={700}
            lineHeight={1.2} // Mejora la lectura en títulos de varias líneas
            mb={0.5}
        >
          {title}
        </Typography>
        <Typography 
            fontSize={{ xs: 16, md: 20 }} 
            fontWeight={500}
            lineHeight={1.4}
        >
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AutomatizationCard;