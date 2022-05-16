import Layout from '../../pages/Layout';
import { useState } from 'react';
import {
  Grid,
  Box,
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
  COLOR_VIOLET_40,
  COLOR_VIOLET_5,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';

import DefaultTab from '../../common/components/DefaultTab';
import ShopInfoCon from './ShopInfoCon';
import OperationSettingCon from './OperationSettingCon';

const headTabMenu = [
  {
    id: 1,
    value: '샵 정보',
    label: '샵 정보',
  },
  {
    id: 2,
    value: '운영설정',
    label: '운영설정',
  },
];

const quickMenuItems = [
  {
    id: 1,
    label: '회원등록',
  },
  {
    id: 2,
    label: '예약',
  },
  {
    id: 3,
    label: '상품판매',
  },
  {
    id: 4,
    label: 'SMS발송',
  },
];

const ShopSetting = () => {
  const classes = useStyles();

  const [headTabValue, setHeadTabValue] = useState<string>(
    headTabMenu[0].value,
  );

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          샵 설정
        </Typography>
        <div>
          {quickMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="contained"
              color="primary"
              className={classes.quickMenuMemberBtn}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Box>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <Box display="flex" justifyContent="space-between">
          <DefaultTab
            tabmenu={headTabMenu}
            defaultValue={headTabMenu[0].value}
            className={classes.headTab}
            onChange={setHeadTabValue}
          />
          <Button
            variant="contained"
            disableElevation
            className={classes.shopRegistrationBtn}
          >
            샵 등록 신청
          </Button>
        </Box>
        <Grid className={classes.content}>
          {headTabValue === headTabMenu[0].value ? (
            <ShopInfoCon />
          ) : (
            <OperationSettingCon />
          )}
        </Grid>
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
  content: {
    padding: theme.spacing(17.5, 15),
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
  shopRegistrationBtn: {
    '&.MuiButton-root': {
      width: 101,
      height: 40,
      fontSize: 14,
      whiteSpace: 'nowrap',
      color: COLOR_VIOLET_40,
      background: COLOR_VIOLET_5,
      '&.MuiButton-root:hover': {
        color: COLOR_VIOLET_40,
        background: COLOR_VIOLET_5,
      },
    },
  },
  quickMenuMemberBtn: {
    '&.MuiButton-root': {
      minWidth: 'auto',
      minHeight: 33,
      fontSize: 14,
      borderRadius: 99,
      marginLeft: theme.spacing(8.5),
      padding: theme.spacing(3, 5),
      color: COLOR_VIOLET_40,
      background: COLOR_VIOLET_5,
      boxShadow: VIOLET_SHADOW_2DP,
      '&.MuiButton-root:hover': {
        color: COLOR_VIOLET_40,
        background: COLOR_VIOLET_5,
        boxShadow: VIOLET_SHADOW_2DP,
      },
    },
  },
}));

export default ShopSetting;
