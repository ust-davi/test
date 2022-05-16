import Layout from '../../pages/Layout';
import { RouteComponentProps } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  TextField,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_70,
  COLOR_VIOLET_10,
  COLOR_VIOLET_50,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';

import DateRangePicker from '../../common/components/DateRangePicker';
import useDateRangePickerDefaultValue from '../../hooks/useDateRangePickerDefaultValue';
import moment from 'moment';
import SelectInput from '../../common/components/SelectInput';

import SalesCon from './SalesCon';

const flagMenu = [
  {
    id: 1,
    value: '일반',
  },
  {
    id: 2,
    value: '이벤트',
  },
];

const paymentMenu = [
  {
    id: 1,
    value: '신용카드',
  },
  {
    id: 2,
    value: '현장결제',
  },
  {
    id: 3,
    value: '금액권',
  },
  {
    id: 4,
    value: '정기권',
  },
];

const statusMenu = [
  {
    id: 1,
    value: '결제완료',
  },
  {
    id: 2,
    value: '결제취소',
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

interface MatchParams {
  id: string;
}

const Sales = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          매출
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
        <Grid container alignItems="center">
          <DateRangePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <SelectInput
            menuItems={flagMenu}
            className={classes.flagSelect}
            size="small"
            placeholder="구분"
          />
          <SelectInput
            menuItems={paymentMenu}
            className={classes.paymentSelect}
            size="small"
            placeholder="결제수단"
          />
          <SelectInput
            menuItems={statusMenu}
            className={classes.statusSelect}
            size="small"
            placeholder="결제상태"
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
        <Box className={classes.rightBox}>
          <SelectInput
            menuItems={listBox}
            className={classes.listSelect}
            size="small"
            placeholder="25개씩"
          />
        </Box>
        <SalesCon />
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: 30,
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
  statusSelect: {
    '&&': {
      width: 120,
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
      position: 'absolute',
      right: 30,
      top: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
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
        fontSize: 14,
        padding: '4.5px 8px',
        color: COLOR_VIOLET_70,
      },
      '& .Mui-selected': {
        fontSize: 14,
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
}));

export default Sales;
