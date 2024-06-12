import { extendTheme } from '@chakra-ui/react';

const colors = {
  redPantone: {
    500: '#e63946',
  },
  honeydew: {
    500: '#f1faee',
  },
  aquamarine: {
    500: '#34e0a1',
  },
  nonPhotoBlue: {
    500: '#a8dadc',
  },
  cerulean: {
    500: '#457b9d',
  },
  berkeleyBlue: {
    500: '#1d3557',
  },
};

const theme = extendTheme({
  colors,
});

export default theme;
