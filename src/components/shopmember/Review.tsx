import Layout from '../../pages/Layout';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
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
  COLOR_VIOLET_10,
  COLOR_VIOLET_50,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';

import SelectInput from '../../common/components/SelectInput';
import DefaultTab from '../../common/components/DefaultTab';
import ReviewCaseCon from './ReviewCaseCon';
import ReviewShopCon from './ReviewShopCon';
import useReviewRow from '../../hooks/useReviewRow';
import useUrlParam from '../../hooks/useUrlParams';
import useReviewShop from '../../hooks/useReviewShop';
import DateRangePicker from '../../common/components/DateRangePicker';
import useDateRangePickerDefaultValue from '../../hooks/useDateRangePickerDefaultValue';

const gradeMenu = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 4,
  },
  {
    id: 5,
    value: 5,
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

const Review = () => {
  const classes = useStyles();
  const history = useHistory();

  const [tabValue, setTabValue] = useState<string>(caseTabMenu[0].value);

  const tab = useUrlParam('tab');
  const page = Number(useUrlParam('page'));
  const sDate = useUrlParam('startDate');
  const eDate = useUrlParam('endDate');

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({ startDate: sDate, endDate: eDate });

  const { refetch } = useReviewRow({
    page: page - 1,
    size: 25,
    endDate,
    startDate,
  });

  const { refetch: refrechShop } = useReviewShop({
    page: page - 1,
    size: 25,
    endDate,
    startDate,
  });

  useEffect(() => {
    if (tab && page && sDate && eDate) {
      refetch();
      refrechShop();
    }
  }, [tab, page, sDate, eDate]);

  const onClickSearchButton = () => {
    refetch();
  };

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          리뷰
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
        <Grid>
          <Grid container alignItems="center">
            <DateRangePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
            <SelectInput
              size="small"
              placeholder="평점"
              menuItems={gradeMenu}
              className={classes.gradeSelect}
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
              onClick={onClickSearchButton}
            >
              검색
            </Button>
          </Grid>
          <div className={classes.rightBox}>
            <DefaultTab
              tabmenu={caseTabMenu}
              defaultValue={caseTabMenu[0].value}
              className={classes.caseTab}
              onChange={setTabValue}
            />
            <SelectInput
              size="small"
              placeholder="25개씩"
              menuItems={listBox}
              className={classes.listSelect}
            />
          </div>
        </Grid>
        {tabValue === caseTabMenu[0].value ? <ReviewCaseCon /> : undefined}
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
  gradeSelect: {
    '&&': {
      width: 100,
      height: 30,
      margin: theme.spacing(0, 3.75),
      '& .MuiSelect-select': {
        padding: theme.spacing(2.75, 5),
      },
    },
  },
  textField: {
    '&&': {
      width: 150,
      height: 30,
      '& input': {
        padding: theme.spacing(2.75, 5),
      },
    },
  },
  searchBtn: {
    '&.MuiButton-root': {
      minWidth: 58,
      height: 30,
      margin: theme.spacing(0, 7.5),
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
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      top: 20,
      right: 30,
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

export default Review;
