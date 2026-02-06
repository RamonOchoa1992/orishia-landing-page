'use client';
import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import LanguageToggle from './LanguageToogle';
import { constant } from '@/app/utils/header-constant';
import useLanguageStore from '@/app/store/useLanguageStore';
import { theme } from '@/app/theme/default';

const Header = () => {
  const { language } = useLanguageStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Definimos el color primario aquí para mantener la consistencia
  const PRIMARY_COLOR = theme.palette.primary.main;

  const navItems = [
    constant[language].firstNav,
    constant[language].secondNav,
    constant[language].thirdNav,
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // --- CONTENIDO DEL MENÚ LATERAL (MÓVIL) ---
  const drawerContent = (
    <Box
      sx={{
        width: 280,
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      role='presentation'
    >
      <Box display='flex' justifyContent='flex-end' mb={2}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: PRIMARY_COLOR }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center', py: 2, borderRadius: 2 }}
              href={item.href}
              onClick={() => setMobileOpen(false)} // Solo añadimos esto para que el drawer cierre
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: '18px',
                  color: PRIMARY_COLOR,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box display='flex' justifyContent='center' mb={4}>
        <LanguageToggle />
      </Box>
    </Box>
  );

  return (
    <Box
      component='header'
      sx={{
        width: '100%',
        px: { xs: '1.5rem', md: '7rem' },
        pt: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* 1. LOGO */}
      <Box>
        <Image
          src='/assets/images/logo.png'
          alt='Logo'
          width={182}
          height={50}
          priority
          style={{ width: 'auto', height: 'auto', maxHeight: '50px' }}
        />
      </Box>

      {/* 2. NAVEGACIÓN DESKTOP */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', mr: '2rem' }}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              href={item.href}
              variant='text'
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                mx: '0.75rem',
                color: PRIMARY_COLOR,
                '&:hover': {
                  backgroundColor: `${PRIMARY_COLOR}10`,
                  color: PRIMARY_COLOR,
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        <Box sx={{ borderLeft: '1px solid #e0e0e0', pl: '2rem' }}>
          <LanguageToggle />
        </Box>
      </Box>

      {/* 3. MENÚ HAMBURGUESA MÓVIL */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <IconButton
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ color: PRIMARY_COLOR }}
        >
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      {/* 4. DRAWER */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        disableRestoreFocus // <-- ESTE ES EL ÚNICO CAMBIO REAL.
        // Evita que el scroll salte al botón de arriba cuando el drawer cierra.
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderRadius: '20px 0 0 20px',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Header;
