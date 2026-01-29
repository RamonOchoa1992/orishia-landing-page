import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: "'DaxlinePro', 'Poppins', sans-serif",
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#2A458A',
      dark: '#18274F',
      //dark: '#303287',
      light: '#9aaee0',
      100: '#9aaee0',
      200: '#CACBEC',
      300: '#A5A6DF',
      400: '#8081D0',
      800: '#1F2056',
      // 900: '#15163B',
      900: '#17173b',
    },
    secondary: {
      main: '#ED833E',
      light: '#FAE7D5',
      dark: '#BF5F29',
      100: '#FAE7D5',
      200: '#F5D2B1',
      300: '#F0B88B',
      400: '#EC9E69',
      500: '#ED833E',
      600: '#D67035',
      700: '#BF5F29',
      800: '#A84E1F',
      900: '#7D320F',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E9132D',
      dark: '#A91123',
      light: '#F9C4CB',
    },
    success: {
      main: '#A4CE3C',
      dark: '#197942',
      light: '#DBFDD7',
    },
    warning: {
      main: '#F5C30F',
      dark: '#EE843F',
      light: '#FDF1C3',
    },
    info: {
      main: '#5B99FF',
      dark: '#3F70C1',
      light: '#D6E4FF',
      900: '#393CA2',
    },
    text: {
      primary: '#2A458A',
      secondary: '#FFFFFF',
      disabled: '#999999',
    },
    background: {
      default: '#FFFFFF',
      paper: '#ffffff',
    },
    grey: {
      50: '#CED4DA',
      100: '#ECEFF6',
      200: '#E9ECEF',
      300: '#c0bfbfff',
      400: '#BBBBBB',
      500: '#A4A4A4',
      600: '#666666',
      700: '#4D4D4D',
      800: '#333333',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Firefox
          scrollbarColor: '#ED833E transparent',
          // WebKit-based browsers
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: 4,
            height: 4,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            backgroundColor: '#ED833E',
            borderRadius: 8,
          },
          '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
            background: 'transparent',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
        inputProps: {
          autoComplete: 'off',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 0,
        transformOrigin: { horizontal: 'right', vertical: 'top' },
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      },
    },

    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },

    MuiCheckbox: {
      defaultProps: {
        color: 'secondary',
        size: 'small',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.grey[300],
        }),
        checked: ({ theme }) => ({
          background: theme.palette.grey[300],
        }),
      },
    },

    MuiRadio: {
      defaultProps: {
        color: 'secondary',
        size: 'small',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.grey[300],
        }),
        checked: ({ theme }) => ({
          background: theme.palette.grey[300],
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: ({ theme }) => ({
          color: theme.palette.secondary.dark,
          fontSize: 14,
          fontWeight: 500,
        }),
      },
    },
  },
});
export default responsiveFontSizes(theme);
