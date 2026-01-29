'use client'
import { Box, Button, Typography } from "@mui/material"
import Divider from "../common/Divider";
import FadeInSection from "@/app/utils/Fade";

const Ready = () => { 
  return (
    <FadeInSection>
      <Box mt={25}>
        <Divider width={1000} height={2} />
        <Box
          mt={5}
          mb={5}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          rowGap={4}
        >
          <Typography width={'55%'} fontSize={38} fontWeight={500}>
            ¿Listo para conocer como{' '}
            <span style={{ fontWeight: 700 }}>OrishIA</span>, puede potenciar tu
            negocio?
          </Typography>
          <Typography
            textAlign={'center'}
            width={'45%'}
            fontSize={34}
            fontWeight={500}
          >
            El primer paso lo das tú. Hablemos hoy mismo.
          </Typography>
          <Button
            sx={{
              borderRadius: 18,
              width: 159,
              height: 60,
              fontWeight: 600,
              fontSize: 16,
              mt: -1,
              mb: 1
            }}
            variant='contained'
          >
            Learn more
          </Button>
        </Box>
        <Divider width={1000} height={2} />
      </Box>
    </FadeInSection>
  );
}

export default Ready