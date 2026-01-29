import { Box, Typography } from '@mui/material';
import Image from 'next/image';

// Definimos la estructura de un solo elemento
interface ItemData {
  name: string;
  isActive: boolean;
  description: string;
}

// Definimos que el componente recibe un objeto con una propiedad 'contents' que es un array
interface ListItemProps {
  contents: ItemData[];
}

const ListItem = ({ contents }: ListItemProps) => {
  // Siempre es bueno validar que contents exista antes de mapear
  if (!contents || contents.length === 0) return null;

  return (
    <>
      {contents.map((el) => (
        <Box
          key={el.name}
          display='flex'
          alignItems='center' // Alinea el icono con el texto verticalmente
          mt={1}
        >
          <Image
            src={
              el.isActive
                ? '/assets/images/active-plan-list-icon.png'
                : '/assets/images/plan-list-icon.png'
            }
            alt='Check icon'
            width={16}
            height={18}
            style={{ objectFit: 'contain' }}
          />
          <Typography
            fontSize={14}
            fontWeight={el.isActive ? 700 : 400}
            sx={{
              color: '#1A1A1A',
              marginLeft: '0.5rem',
              lineHeight: 1.2,
            }}
          >
            {el.name}{' '}
            <span style={{ fontWeight: 400, color: '#7F7F7F' }}>
              {el.description}
            </span>
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default ListItem;
