//Creating custom theme for Material UI Components 
import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

const fontHeader = {
  color: rawTheme.palette.primary,
  fontWeight: rawTheme.typography.fontWeightRegular,
  //fontFamily: "'Roboto Condensed', sans-serif",
  //textTransform: 'uppercase'
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    ...fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 65,
      fontWeight: rawTheme.typography.fontWeightBold
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 55,
      fontWeight: rawTheme.typography.fontWeightBold
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 40,
      fontWeight: rawTheme.typography.fontWeightBold
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 26,
      fontWeight: rawTheme.typography.fontWeightBold
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightRegular,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 14,
      fontWeight: rawTheme.typography.fontWeightBold
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightLight,
      fontSize: 14,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 12,
    },
  },
};

export default theme;