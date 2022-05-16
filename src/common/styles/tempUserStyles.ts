import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_20,
  COLOR_GREY_30,
  COLOR_MINT_70,
  COLOR_RED_60,
  COLOR_VIOLET_0,
  COLOR_VIOLET_40,
  COLOR_VIOLET_5,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from './Color';

const useCommonUserStyles = makeStyles({
  container: {
    width: '100%',
    maxWidth: '1158px',
    height: 'inherit',
  },
  contentWrap: {
    width: '100%',
    maxWidth: '324px',
    height: 'inherit',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&>div': {
      margin: '22px 0',
    },
    '@media screen and (max-width: 768px)': {
      paddingTop: '70px',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: 'auto',
      transform: 'none',
    },
  },
  rowWrap: {
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  textfield: {
    color: COLOR_DARK_GREY,
    width: '100%',
    height: '40px',
    marginTop: '0.125 rem',
    marginBottom: '0.125 rem',

    '&&': {
      '&>div': {
        padding: '0px',
      },
    },

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${COLOR_GREY_20}`,
      borderColor: COLOR_GREY_20,
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${COLOR_VIOLET_70}`,
      borderColor: COLOR_VIOLET_70,
    },

    '&:focused .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        border: `2px solid ${COLOR_VIOLET_70}`,
        borderColor: COLOR_VIOLET_70,
      },
    '& .MuiOutlinedInput-input': {
      color: COLOR_DARK_GREY,
      fontWeight: 400,
      fontSize: 16,
    },
    '&:hover .MuiOutlinedInput-input': {
      color: COLOR_DARK_GREY,
      fontWeight: 400,
      fontSize: 16,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: COLOR_DARK_GREY,
      fontWeight: 400,
      fontSize: 16,
    },
    '& .MuiInputLabel-outlined': {
      color: COLOR_DARK_GREY,
      fontWeight: 400,
      fontSize: 16,
    },
    '&:hover .MuiInputLabel-outlined': {
      color: COLOR_DARK_GREY,
      fontWeight: 400,
      fontSize: 16,
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: COLOR_DARK_GREY,
      fontWeight: 400,
      fontSize: 16,
    },

    '& input:-webkit-autofill': {
      '-webkit-box-shadow': '0 0 0 30px white inset',
    },
    '& input:-webkit-autofill:hover': {
      '-webkit-box-shadow': '0 0 0 30px white inset',
    },
    '& input:-webkit-autofill:focus': {
      '-webkit-box-shadow': '0 0 0 30px white inset',
    },
    '& input:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 30px white inset',
    },

    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  button: {
    '&&': {
      width: '40%',
      fontSize: '14px',
      fontWeight: 700,
      borderRadius: '99px',
      whiteSpace: 'pre',
      marginLeft: '8px',
      backgroundColor: COLOR_VIOLET_60,
      height: '40px',
      color: COLOR_VIOLET_0,
      '&:hover': {
        backgroundColor: COLOR_VIOLET_70,
        color: COLOR_VIOLET_0,
      },
      '&:disabled': {
        backgroundColor: COLOR_VIOLET_5,
        color: COLOR_VIOLET_40,
      },
    },
  },
  nextButton: {
    '&&': {
      width: '100%',
      fontSize: '14px',
      fontWeight: 700,
      backgroundColor: COLOR_VIOLET_60,
      height: '40px',
      color: COLOR_VIOLET_0,
      '&:hover': {
        backgroundColor: COLOR_VIOLET_70,
        color: COLOR_VIOLET_0,
      },
      '&:disabled': {
        backgroundColor: COLOR_VIOLET_5,
        color: COLOR_VIOLET_40,
      },
      '@media screen and (max-width: 768px)': {
        position: 'absolute',
        bottom: '16px',
      },
    },
  },
  secretNumber: {
    color: COLOR_DARK_GREY,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '22px',
  },
  iconButton: {
    margin: '0px',
  },
  clearButton: {
    fontSize: '20px',
  },
  iconWrapper: {
    padding: '0px 8px',
    backgroundColor: COLOR_WHITE,
  },
  checkButton: {
    fontSize: '20px',
    backgroundColor: COLOR_WHITE,
    color: COLOR_MINT_70,
  },
  errorMessage: {
    color: COLOR_RED_60,
    position: 'fixed',
  },
  timer: {
    paddingRight: '8px',
    color: COLOR_RED_60,
  },
  disabledInput: {
    backgroundColor: COLOR_VIOLET_5,
    border: 'none',
  },
  borderNone: {
    border: 'none',
  },
});

export default useCommonUserStyles;
