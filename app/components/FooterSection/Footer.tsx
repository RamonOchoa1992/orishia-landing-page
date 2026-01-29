import { Box, Typography } from "@mui/material"
import Divider from "../common/Divider";

const Footer = () => { 
  return (
    <Box mt={12}>
      <Box>
        <Divider width={800} height={2} />
      </Box>
      <Box display={'flex'} justifyContent={'center'} mt={4}>
        <Typography fontSize={14} fontWeight={400} sx={{ color: '#2B2B2B' }}>
          © Copyright 2026, All Rights Reserved by name
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer