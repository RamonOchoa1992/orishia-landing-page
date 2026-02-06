import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ItemData {
  name: string;
  isActive: boolean;
  description: string;
}

interface ListItemProps {
  contents: ItemData[];
}

const ListItem = ({ contents }: ListItemProps) => {
  if (!contents || contents.length === 0) return null;

  return (
    <Box
      display={'grid'}
      // 1 columna en móvil (xs), 2 columnas en escritorio (md)
      gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr' }}
      columnGap={3}
      rowGap={1}
    >
      {contents.map((el) => (
        <Box key={el.name} display='flex' alignItems='flex-start' mt={1.5}>
          <Box sx={{ flexShrink: 0}}>
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
          </Box>
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
              {el.description}{' '}
            </span>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ListItem;
