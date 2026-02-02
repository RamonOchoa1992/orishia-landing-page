'use client'

import { Box, Typography } from "@mui/material"
import Divider from "../common/Divider";
import { constant } from './footer-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Footer = () => { 
  const { language } = useLanguageStore();
  
  return (
    <Box mt={12}>
      <Box>
        <Divider width={800} height={2} />
      </Box>
      <Box display={'flex'} justifyContent={'center'} mt={4}>
        <Typography fontSize={14} fontWeight={400} sx={{ color: '#2B2B2B' }}>
          { constant[language].title }
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer