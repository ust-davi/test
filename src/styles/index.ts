import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_70,
  COLOR_GREY_80,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP, GREY_SHADOW_8DP } from '../common/styles/Shadow';

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: 150,
    position: 'fixed',
    top: 0,
    width: '100%',
    margin: '0 auto',
    zIndex: 999,
    background: COLOR_WHITE,
    boxShadow: GREY_SHADOW_2DP,
  },
  headerWrap: {
    position: 'relative',
    width: 1158,
    margin: '0 auto',
  },
  logoArea: {
    position: 'absolute',
    top: 50,
    margin: 0,
    '& > a': {
      display: 'inline-block',
    },
  },
  logo: {
    display: 'inline-block',
  },
  logoDesc: {
    display: 'inline-block',
    color: '#343A40',
    marginLeft: '15px !important',
  },
  serviceMenu: {
    position: 'absolute',
    top: 26,
    right: 0,
    display: 'flex',
    alignItems: 'center',
  },
  gnb: {
    position: 'absolute',
    top: 90,
    right: 0,
  },
  menuList: {
    '&& .MuiTabs-indicator': {
      borderRadius: 4,
      height: 4,
      backgroundColor: COLOR_VIOLET_70,
    },
  },
  menuItem: {
    '&&': {
      minWidth: 'auto',
      color: COLOR_GREY_70,
      display: 'inline-block',
    },
  },
  myMenu: {
    marginLeft: 41,
    '& > button': {
      marginLeft: 16,
    },
  },
  memberName: {
    fontSize: 16,
    marginLeft: 64,
  },
  textWrap: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(0, 0, 0, 0.75)',
  },
  sliderItem: {
    '& .slick-slide': {
      padding: 10,
    },
  },
  loginButton: {
    '&&': {
      color: COLOR_GREY_70,
    },
  },
  joinButton: {
    '&&': {
      color: 'white',
      marginLeft: '15px',
    },
  },
  sideBar: {
    width: 250,
    minWidth: 250,
    height: 'auto',
    display: 'inline-block',
    padding: '19px 0',
    borderRadius: '0px 20px 20px 0px',
    zIndex: 2,
    boxShadow: GREY_SHADOW_8DP,
    background: COLOR_GREY_80,
  },
  adminMenu: {
    '&.MuiMenuItem-root': {
      minHeight: 56,
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(10),
      borderRadius: '16px 0px 0px 16px',
      color: COLOR_WHITE,
      cursor: 'pointer',
    },
  },
  active: {
    '&.MuiMenuItem-root': {
      minHeight: 56,
      backgroundColor: COLOR_VIOLET_60,
      marginLeft: 19,
      padding: '0 0 0 16px',
      borderRadius: '16px 0px 0px 16px',
      '&:hover': {
        backgroundColor: COLOR_VIOLET_60,
        marginLeft: 19,
        padding: '0 0 0 16px',
        borderRadius: '16px 0px 0px 16px',
      },
    },
  },
}));

export { useStyles as default };
