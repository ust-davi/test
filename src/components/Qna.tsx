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

import DateRangePicker from '../common/components/DateRangePicker';
import SelectInput from '../common/components/SelectInput';
import DefaultTab from '../common/components/DefaultTab';

import { makeStyles } from '@mui/styles';
import {
  COLOR_VIOLET_10,
  COLOR_VIOLET_50,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP } from '../common/styles/Shadow';

import QnaCaseCon from './QnaCaseCon';
import QnaShopCon from './QnaShopCon';
import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';
import moment from 'moment';

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
];

const Qna = () => {
  const classes = useStyles();
  const history = useHistory();
  const [tabValue, setTabValue] = useState<string>(caseTabMenu[0].value);

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

  const onClickListButton = () => {
    history.push('/shopManagement/qna/shopmember');
  };

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          1:1문의
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
        <Grid container alignItems="center">
          <DateRangePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <SelectInput
            size="small"
            menuItems={statusMenu}
            className={classes.statusSelect}
            placeholder="상태"
          />
          <TextField
            size="small"
            placeholder="검색어"
            className={classes.textField}
          />
          <Button
            size="small"
            variant="contained"
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
        {tabValue === caseTabMenu[0].value ? <QnaCaseCon /> : <QnaShopCon />}
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: theme.spacing(8.5, 15),
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  statusSelect: {
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
      top: 20,
    },
  },
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginTop: theme.spacing(10),
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
}));

export default Qna;
