import Layout from '../../pages/Layout';
import { useMemo, useState } from 'react';
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
  COLOR_RED_5,
  COLOR_RED_60,
  COLOR_UST_70,
  COLOR_VIOLET_10,
  COLOR_VIOLET_50,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';

import moment from 'moment';
import 'moment/locale/ko';
import DateRangePicker from '../../common/components/DateRangePicker';
import useDateRangePickerDefaultValue from '../../hooks/useDateRangePickerDefaultValue';
import SelectInput from '../../common/components/SelectInput';
import DefaultTab from '../../common/components/DefaultTab';
import ReserveCaseCon from './ReserveCaseCon';
import ReserveShopCon from './ReserveShopCon';

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

const caseTabMenu = [
  {
    id: 1,
    label: '달력',
    value: '달력',
  },
  {
    id: 2,
    label: '건별',
    value: '건별',
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

const Reservation = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState<string>(caseTabMenu[0].value);

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          예약
        </Typography>
        <div>
          {quickMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="contained"
              color="primary"
              className={classes.quickMenuBtn}
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
        <Box className={classes.rightBox}>
          <DefaultTab
            tabmenu={caseTabMenu}
            defaultValue={caseTabMenu[0].value}
            className={classes.caseTab}
            onChange={setTabValue}
          />
          {tabValue === caseTabMenu[1].value && (
            <SelectInput
              menuItems={listBox}
              className={classes.listSelect}
              size="small"
              placeholder="25개씩"
            />
          )}
        </Box>
        {tabValue === caseTabMenu[0].value ? (
          <ReserveCaseCon />
        ) : (
          <>
            <Grid container alignItems="center">
              <DateRangePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
              <SelectInput
                menuItems={cateMenu}
                className={classes.cateSelect}
                size="small"
                placeholder="카테고리"
              />
              <TextField
                size="small"
                placeholder="검색어"
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
            <ReserveShopCon />
          </>
        )}
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '30px 30px',
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  flagSelect: {
    '&&': {
      width: 100,
      height: 30,
      margin: '0 7.5px',
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  paymentSelect: {
    '&&': {
      width: 120,
      height: 30,
      margin: '0 7.5px',
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  cateSelect: {
    '&&': {
      width: 100,
      height: 30,
      margin: '0 7.5px',
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
      top: 30,
    },
  },
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginTop: 10.41,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  caseTab: {
    '&.MuiTabs-root': {
      minHeight: 'inherit',
      background: COLOR_VIOLET_10,
      borderRadius: 4,
      '& .MuiTab-root': {
        width: 'auto',
        minWidth: 40,
        height: 30,
        minHeight: 30,
        padding: 0,
        color: COLOR_VIOLET_70,
      },
      '& .Mui-selected': {
        color: COLOR_WHITE,
        zIndex: 9999,
      },
      '& .MuiTabs-indicator': {
        height: '100%',
        borderRadius: 4,
        background: COLOR_VIOLET_50,
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
  calandar: {
    width: '100%',
    minWidth: 1485,
    height: 1228,
    overflow: 'auto',
    '& .rbc-header': {
      fontSize: 21,
      padding: '14px 11px',
      background: '#F7F7FA',
      '&:first-child': {
        color: COLOR_RED_60,
      },
      '&:last-child': {
        color: COLOR_UST_70,
      },
    },
    '& .rbc-date-cell': {
      fontSize: 16,
      paddingRight: 15,
      '&:first-child': {
        color: COLOR_RED_60,
      },
      '&:last-child': {
        color: COLOR_UST_70,
      },
    },
    '& .rbc-row-content': {
      margin: '10px 0',
    },
    '& .rbc-off-range': {
      color: `${COLOR_WHITE} !Important`,
    },
    '& .rbc-off-range-bg': {
      background: COLOR_WHITE,
    },
    '& .rbc-today': {
      background: COLOR_RED_5,
    },
    '& .rbc-event': {
      padding: '0 15px',
    },
  },
  cateBox: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(26.5),
    '& p': {
      display: 'flex',
      alignItems: 'center',
      fontSize: 16,
      marginRight: theme.spacing(7.5),
      '&:first-child span': {
        fontSize: 24,
      },
    },
    '& span': {
      fontSize: 20,
      marginRight: theme.spacing(3.5),
    },
  },
}));

export default Reservation;
