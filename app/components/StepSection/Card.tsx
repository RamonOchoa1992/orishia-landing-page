import { Box, Paper, Typography } from "@mui/material";

type AutomatizationCardProps = {
  title: string,
  subtitle: string
}

const AutomatizationCard = ({ title, subtitle }: AutomatizationCardProps) => {
  return (
    <Paper
      sx={{
        width: 550,
        height: 130,
        boxShadow: '0px 35px 116px -10px #9AA7C140',
        borderRadius: '24px',
        py: 2,
        pr:2,
        display: 'flex',
      }}
    >
      <svg
        width='80'
        height='80'
        viewBox='0 0 60 60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ margin: '-.5rem 1rem 0 1rem' }}
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
      <Box>
        <Typography fontSize={26} fontWeight={700}>
          {title}
        </Typography>
        <Typography fontSize={20} fontWeight={500}>
          { subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AutomatizationCard;