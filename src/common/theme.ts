import { createTheme } from '@mui/material/styles';
import {
  COLOR_WHITE,
  COLOR_RED_5,
  COLOR_RED_70,
  COLOR_VIOLET_5,
  COLOR_VIOLET_70,
  COLOR_UST_70,
  COLOR_UST_5,
  COLOR_ORANGE_70,
  COLOR_ORANGE_5,
  COLOR_PINK_5,
  COLOR_PINK_70,
  COLOR_MINT_5,
  COLOR_MINT_70,
  COLOR_GREY_70,
  COLOR_TEAL_70,
  COLOR_MINT_80,
  COLOR_TEAL_5,
  COLOR_GREY_5,
  COLOR_GREY_50,
  COLOR_DARK_GREY,
} from '../common/styles/Color';

const theme = createTheme({
  // palette color
  palette: {
    default: {
      main: COLOR_GREY_70,
    },
    primary: {
      main: COLOR_VIOLET_70,
    },
    secondary: {
      main: COLOR_MINT_70,
    },
    success: {
      main: COLOR_TEAL_70,
    },
    warning: {
      main: COLOR_PINK_70,
    },
    ust: {
      main: COLOR_UST_70,
      contrastText: COLOR_WHITE,
    },
    attentionAlt: {
      main: COLOR_ORANGE_70,
      contrastText: COLOR_WHITE,
    },
    successAlt: {
      main: COLOR_TEAL_70,
      contrastText: COLOR_WHITE,
    },
  },

  typography: {
    fontFamily: ['"Spoqa Han Sans Neo"', 'sans-serif'].join(','),
    h2: {
      fontStyle: 'normal',
      fontSize: 46,
      fontWeight: 'bold',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontStyle: 'normal',
      fontSize: 42,
      fontWeight: 'bold',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontStyle: 'normal',
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.035em',
    },
    h5: {
      fontStyle: 'normal',
      fontSize: 21,
      fontWeight: 700,
    },
    h6: {
      fontStyle: 'normal',
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: '0.0075em',
    },
    body1: {
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: '0em',
    },
    caption: {
      fontStyle: 'normal',
      fontSize: '12px',
      fontWeight: 'bold',
      letterSpacing: '0.018em',
    },
    button: {
      fontSize: 16,
    },
  },

  // breakPoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1500,
    },
  },

  // spacing
  spacing: 2,

  // overrides
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: COLOR_DARK_GREY,
        },
        li: {
          listStyle: 'none',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { fontSize: 'large' },
          style: {
            fontSize: '20px',
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: 'inherit',
        },
        sizeSmall: {
          padding: '6.5px 10px',
          fontSize: 14,
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: 'white',
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            padding: '6px 8px',
            fontSize: 12,
          },
        },
        {
          props: { size: 'medium' },
          style: {
            padding: '6px 10px',
            fontSize: 14,
          },
        },
        {
          props: { color: 'default' },
          style: {
            background: COLOR_GREY_5,
            color: COLOR_GREY_50,
          },
        },
        {
          props: { color: 'primary' },
          style: {
            background: COLOR_VIOLET_5,
            color: COLOR_VIOLET_70,
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            background: COLOR_MINT_5,
            color: COLOR_MINT_80,
          },
        },
        {
          props: { color: 'ust' },
          style: {
            background: COLOR_UST_5,
            color: COLOR_UST_70,
          },
        },
        {
          props: { color: 'attentionAlt' },
          style: {
            background: COLOR_ORANGE_5,
            color: COLOR_ORANGE_70,
          },
        },
        {
          props: { color: 'successAlt' },
          style: {
            background: COLOR_TEAL_5,
            color: COLOR_TEAL_70,
          },
        },
        {
          props: { color: 'error' },
          style: {
            background: COLOR_RED_5,
            color: COLOR_RED_70,
          },
        },
        {
          props: { color: 'warning' },
          style: {
            background: COLOR_PINK_5,
            color: COLOR_PINK_70,
          },
        },
      ],
    },
    MuiOutlinedInput: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            fontSize: 14,
          },
        },
      ],
      styleOverrides: {
        root: {
          lineHeight: 'inherit',
          fontWeight: 400,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    default: Palette['primary'];
  }

  interface PaletteOptions {
    default?: PaletteOptions['primary'];
    ust?: any;
    attentionAlt?: any;
    successAlt?: any;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    ust: true;
    attentionAlt: true;
    successAlt: true;
  }
}

export default theme;
