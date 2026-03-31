import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#395144',    // dark forest green — AppBar, Footer, primary buttons
      light: '#5a7e5d',   // medium sage — hover states
      dark: '#2a3d33',    // deeper green — active states
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#aa8b56',    // warm tan — card accents, chips, dividers
      light: '#c4a97a',   // lighter tan
      dark: '#8a6e3c',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f0ebce', // cream — page background
      paper: '#faf7ef',   // warm near-white — cards, drawer
    },
    text: {
      primary: '#2a2a2a',
      secondary: '#5a5a4a',
    },
  },
  typography: {
    fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    fontSize: 18,
    h1: { fontFamily: '"Playfair Display", "Georgia", serif' },
    h2: { fontFamily: '"Playfair Display", "Georgia", serif' },
    h3: { fontFamily: '"Playfair Display", "Georgia", serif' },
    h4: { fontFamily: '"Playfair Display", "Georgia", serif' },
    h5: { fontFamily: '"Playfair Display", "Georgia", serif' },
    h6: { fontFamily: '"Playfair Display", "Georgia", serif' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f0ebce',
          margin: 0,
          padding: 0,
        },
        'h1, h2, h3, h4, p, a, ul, li': {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        ul: {
          listStyle: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#395144',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontFamily: '"Lato", sans-serif',
          fontWeight: 600,
        },
        contained: {
          padding: '0.6em 2em',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 700,
          fontSize: '0.7rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Lato", sans-serif',
          textTransform: 'none',
          borderRadius: '10px !important',
          border: '1px solid #2a2a2a',
          padding: '6px 20px',
          '&.Mui-selected': {
            backgroundColor: '#395144',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#5a7e5d',
            },
          },
          '&:hover': {
            backgroundColor: '#aa8b56',
            color: '#ffffff',
          },
        },
      },
    },
  },
});

export default theme;
