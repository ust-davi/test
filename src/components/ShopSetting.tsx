import Layout from '../pages/Layout';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_70,
  COLOR_VIOLET_60,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../common/styles/Shadow';

import DefaultTab from '../common/components/DefaultTab';
import RegistrationRequestCon from './RegistrationRequestCon';

const headTabMenu = [
  {
    id: 1,
    value: '등록요청',
    label: '등록요청',
  },
  {
    id: 2,
    value: '등록대기',
    label: '등록대기',
  },
  {
    id: 3,
    value: '승인불가',
    label: '승인불가',
  },
];

const ShopSetting = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickListButton = () => {
    history.push('/shopManagement/shopsetting/shopmember');
  };

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          샵 설정
        </Typography>
        <Button
          variant="contained"
          size="small"
          disableElevation
          sx={{ mb: 5 }}
          onClick={onClickListButton}
        >
          샵멤버
        </Button>
      </Box>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <DefaultTab
          className={classes.headTab}
          tabmenu={headTabMenu}
          defaultValue="등록요청"
        />
        <RegistrationRequestCon />
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: theme.spacing(9.5, 15),
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  headTab: {
    '& .MuiTab-root': {
      minWidth: 'auto',
      padding: '5px 12px',
      color: COLOR_GREY_70,
      fontWeight: 700,
      '&.Mui-selected': {
        color: COLOR_DARK_GREY,
        zIndex: 1,
      },
    },
    '& .MuiTabs-indicator': {
      height: 4,
      borderRadius: 4,
    },
  },
  quickMenuBtn: {
    '&.MuiButton-root': {
      minWidth: 'auto',
      minHeight: 33,
      fontSize: 14,
      borderRadius: 99,
      marginLeft: theme.spacing(8.5),
      padding: theme.spacing(3, 5),
      background: COLOR_VIOLET_60,
      boxShadow: VIOLET_SHADOW_2DP,
    },
  },
}));

export default ShopSetting;
