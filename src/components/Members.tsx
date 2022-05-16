import Layout from '../pages/Layout';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  TextField,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_70,
  COLOR_VIOLET_60,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../common/styles/Shadow';

import SelectInput from '../common/components/SelectInput';
import DefaultTab from '../common/components/DefaultTab';
import MembersShopCon from './MembersShopCon';
import MembersGeneralCon from './MembersGeneralCon';
import MembersManagerCon from './MembersManagerCon';

const areaMenu = [
  {
    id: 1,
    value: '전국',
  },
  {
    id: 2,
    value: '서울',
  },
  {
    id: 3,
    value: '경기',
  },
  {
    id: 4,
    value: '인천',
  },
  {
    id: 5,
    value: '강원',
  },
  {
    id: 6,
    value: '제주',
  },
  {
    id: 7,
    value: '대전',
  },
  {
    id: 8,
    value: '충북',
  },
  {
    id: 9,
    value: '충남/세종',
  },
  {
    id: 10,
    value: '부산',
  },
  {
    id: 11,
    value: '울산',
  },
  {
    id: 12,
    value: '경남',
  },
  {
    id: 13,
    value: '대구',
  },
  {
    id: 14,
    value: '경북',
  },
  {
    id: 15,
    value: '광주',
  },
  {
    id: 16,
    value: '전남',
  },
  {
    id: 17,
    value: '전주/전북',
  },
];

const cateMenu = [
  {
    id: 1,
    value: '네일아트',
  },
  {
    id: 2,
    value: '피부관리',
  },
  {
    id: 3,
    value: '속눈썹',
  },
  {
    id: 4,
    value: '태닝',
  },
  {
    id: 5,
    value: '왁싱',
  },
  {
    id: 6,
    value: '아이브로우',
  },
  {
    id: 7,
    value: '발관리',
  },
  {
    id: 8,
    value: '체형관리',
  },
  {
    id: 9,
    value: '마사지',
  },
];

const gradeMenu = [
  {
    id: 1,
    value: '일반',
  },
  {
    id: 2,
    value: '파트너',
  },
  {
    id: 3,
    value: 'FC',
  },
  {
    id: 4,
    value: '직영',
  },
];

const serviceStatusMenu = [
  {
    id: 1,
    value: '승인',
  },
  {
    id: 2,
    value: '대기',
  },
  {
    id: 3,
    value: '심사',
  },
  {
    id: 4,
    value: '취소',
  },
];

const signUpChannelMenu = [
  {
    id: 1,
    value: '카카오톡',
  },
  {
    id: 2,
    value: '네이버',
  },
  {
    id: 3,
    value: '페이스북',
  },
  {
    id: 4,
    value: '애플',
  },
];

const reserveListMenu = [
  {
    id: 1,
    value: '예약이력',
  },
];

const statusMenu = [
  {
    id: 1,
    value: '상태',
  },
];

const listBox = [
  {
    id: 1,
    value: '5개씩',
  },
  {
    id: 2,
    value: '10개씩',
  },
  {
    id: 3,
    value: '15개씩',
  },
  {
    id: 4,
    value: '20개씩',
  },
  {
    id: 5,
    value: '25개씩',
  },
];

const headTabMenu = [
  {
    id: 1,
    value: '샵 회원',
    label: '샵 회원',
  },
  {
    id: 2,
    value: '일반 회원',
    label: '일반 회원',
  },
  {
    id: 3,
    value: '관리자',
    label: '관리자',
  },
];

const Members = () => {
  const classes = useStyles();
  const history = useHistory();

  const [headTabValue, setHeadTabValue] = useState<string>(
    headTabMenu[0].value,
  );

  const onClickListButton = () => {
    history.push('/shopManagement/members/shopmember');
  };

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          회원
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
        <div className={classes.headTabBox}>
          <DefaultTab
            tabmenu={headTabMenu}
            defaultValue={headTabMenu[0].value}
            className={classes.headTab}
            onChange={setHeadTabValue}
          />
        </div>
        {headTabValue === headTabMenu[0].value && (
          <>
            <Grid container alignItems="center">
              <SelectInput
                menuItems={areaMenu}
                className={classes.areaSelect}
                size="small"
                placeholder="지역"
              />
              <SelectInput
                menuItems={gradeMenu}
                className={classes.gradeSelect}
                size="small"
                placeholder="등급"
              />
              <SelectInput
                menuItems={cateMenu}
                className={classes.cateSelect}
                size="small"
                placeholder="카테고리"
              />
              <SelectInput
                menuItems={serviceStatusMenu}
                className={classes.serviceStatusSelect}
                size="small"
                placeholder="서비스상태"
              />
              <TextField
                size="small"
                placeholder="상호/대표자성함"
                className={classes.textField}
              />
              <Button
                variant="contained"
                size="small"
                className={classes.searchBtn}
              >
                검색
              </Button>
            </Grid>
            <Box className={classes.rightBox}>
              <SelectInput
                menuItems={listBox}
                className={classes.listSelect}
                size="small"
                placeholder="25개씩"
              />
            </Box>
            <MembersShopCon />
          </>
        )}
        {headTabValue === headTabMenu[1].value && (
          <>
            <Grid container alignItems="center">
              <SelectInput
                menuItems={signUpChannelMenu}
                className={classes.signUpChannelSelect}
                size="small"
                placeholder="가입채널"
              />
              <SelectInput
                menuItems={reserveListMenu}
                className={classes.reserveListSelect}
                size="small"
                placeholder="예약이력"
              />
              <SelectInput
                menuItems={statusMenu}
                className={classes.statusSelect}
                size="small"
                placeholder="상태"
              />
              <TextField
                size="small"
                placeholder="회원이름"
                className={classes.textField}
              />
              <Button
                variant="contained"
                size="small"
                className={classes.searchBtn}
              >
                검색
              </Button>
            </Grid>
            <Box className={classes.rightBox}>
              <SelectInput
                menuItems={listBox}
                className={classes.listSelect}
                size="small"
                placeholder="25개씩"
              />
            </Box>
            <MembersGeneralCon />
          </>
        )}
        {headTabValue === headTabMenu[2].value && <MembersManagerCon />}
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '19px 30px',
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  headTabBox: {
    marginBottom: 11,
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
  areaSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  gradeSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  cateSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  serviceStatusSelect: {
    '&&': {
      width: 150,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  signUpChannelSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  reserveListSelect: {
    '&&': {
      width: 150,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  statusSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  textField: {
    '&&': {
      height: 30,
      '& input': {
        padding: '5.5px 8px',
      },
    },
  },
  searchBtn: {
    '&.MuiButton-root': {
      minWidth: 58,
      height: 30,
      margin: '0 15px',
    },
  },
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 108,
    },
  },
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
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
}));

export default Members;
