import { useState } from 'react';
import SubLayout from '../pages/SubLayout';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Box, Grid, Paper, Container, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../common/styles/Shadow';
import {
  COLOR_DARK_GREY,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_VIOLET_60,
  COLOR_GREY_70,
} from '../common/styles/Color';

import DefaultTab from '../common/components/DefaultTab';
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

interface MatchParams {
  id: string;
}

const ShopSettingDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const [headTabValue, setHeadTabValue] = useState<string>(
    headTabMenu[0].value,
  );

  return (
    <SubLayout>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          샵 설정
        </Typography>
      </Box>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <Box display="flex" justifyContent="space-between" mx={15} mt={15}>
          <DefaultTab
            className={classes.headTab}
            tabmenu={headTabMenu}
            onChange={setHeadTabValue}
            defaultValue="샵 정보"
          />
        </Box>
        <Grid container className={classes.content}>
          {headTabValue === headTabMenu[0].value ? (
            <ShopInfoCon />
          ) : (
            <OperationSettingCon />
          )}
        </Grid>
      </Container>
    </SubLayout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '0',
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  content: {
    padding: '35px 60px',
  },
  quickMenuBtn: {
    '&.MuiButton-root': {
      minWidth: 'auto',
      minHeight: 33,
      fontSize: 14,
      borderRadius: 99,
      marginLeft: 17,
      padding: '6px 10px',
      background: COLOR_VIOLET_60,
      boxShadow: VIOLET_SHADOW_2DP,
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
}));

export default ShopSettingDetail;
