import { createTheme } from '@mui/material/styles';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#212121',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#424242',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#616161',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#757575',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#9E9E9E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
    },
  },
});

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#7C4DFF',
//       contrastText: '#FFFFFF',
//     },
//     secondary: {
//       main: '#B388FF',
//       contrastText: '#000000'
//     },
//     error: {
//       main: '#FF4081',
//       contrastText: '#FFFFFF',
//     },
//     warning: {
//       main: '#FFB300',
//       contrastText: '#000000',
//     },
//     success: {
//       main: '#00C853',
//       contrastText: '#FFFFFF'
//     }
//   },
// });
