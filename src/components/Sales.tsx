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
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_70,
  COLOR_VIOLET_10,
  COLOR_VIOLET_50,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP } from '../common/styles/Shadow';

import SalesMemberCaseCon from './SalesMemberCaseCon';
import SalesMemberShopCon from './SalesMemberShopCon';
import SalesCaseCon from './SalesCaseCon';
import SalesShopCon from './SalesShopCon';
import DateRangePicker from '../common/components/DateRangePicker';
import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';
import SelectInput from '../common/components/SelectInput';
import DefaultTab from '../common/components/DefaultTab';
import moment from 'moment';

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

const headTabMenu = [
  {
    id: 1,
    value: '회원 매출',
    label: '회원 매출',
  },
  {
    id: 2,
    value: '샵 매출',
    label: '샵 매출',
  },
];

const caseTabMenu = [
  {
    id: 1,
    value: '건별',
    label: '건별',
  },
  {
    id: 2,
    value: '샵별',
    label: '샵별',
  },
  {
    id: 3,
    value: '그래프',
    label: '그래프',
    disabled: true,
  },
];

const shopCaseTabMenu = [
  {
    id: 1,
    value: '건별',
    label: '건별',
  },
  {
    id: 2,
    value: '샵별',
    label: '샵별',
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

const Sales = () => {
  const classes = useStyles();
  const history = useHistory();
  const [tabValue, setTabValue] = useState<string>(caseTabMenu[0].value);
  const [shopTabValue, setshopTabValue] = useState<string>(
    shopCaseTabMenu[0].value,
  );
  const [headTabValue, setHeadTabValue] = useState<string>(
    headTabMenu[0].value,
  );

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

  const onClickListButton = () => {
    history.push('/shopManagement/sales/shopmember');
  };

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          매출
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
              <DefaultTab
                tabmenu={caseTabMenu}
                defaultValue={caseTabMenu[0].value}
                className={classes.caseTab}
                onChange={setTabValue}
              />
              <SelectInput
                menuItems={listBox}
                className={classes.listSelect}
                size="small"
                placeholder="25개씩"
              />
            </Box>
            {tabValue === caseTabMenu[0].value && <SalesMemberCaseCon />}
            {tabValue === caseTabMenu[1].value && <SalesMemberShopCon />}
          </>
        )}
        {headTabValue === headTabMenu[1].value && (
          <>
            <Grid container alignItems="center">
              <DateRangePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
              {shopTabValue === shopCaseTabMenu[0].value && (
                <>
                  {' '}
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
                </>
              )}
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
              <DefaultTab
                tabmenu={shopCaseTabMenu}
                defaultValue={shopCaseTabMenu[0].value}
                className={classes.caseTab}
                onChange={setshopTabValue}
              />
              <SelectInput
                menuItems={listBox}
                className={classes.listSelect}
                size="small"
                placeholder="25개씩"
              />
            </Box>
            {shopTabValue === shopCaseTabMenu[0].value && <SalesCaseCon />}
            {shopTabValue === shopCaseTabMenu[1].value && <SalesShopCon />}
          </>
        )}
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme) => ({
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 67,
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
}));

export default Sales;
