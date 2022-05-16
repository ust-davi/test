import Layout from '../pages/Layout';
import { useEffect, useState, useMemo } from 'react';
import {
  Grid,
  Box,
  Paper,
  Container,
  Typography,
  TextField,
  Button,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { COLOR_DARK_GREY, COLOR_GREY_70 } from '../common/styles/Color';
import { GREY_SHADOW_2DP } from '../common/styles/Shadow';

import DefaultTab from '../common/components/DefaultTab';
import ServiceNoticeWrite from './ServiceNoticeWrite';
import ServiceMainBannerCon from './ServiceMainBannerCon';
import ServiceMainBannerWrite from './ServiceMainBannerWrite';
import ServicePointCon from './ServicePointCon';
import ServiceNoticeListCon from './ServiceNoticeListCon';
import ServiceEventCon from './ServiceEventCon';
import ServiceEventWrite from './ServiceEventWrite';
import ServiceCouponCon from './ServiceCouponCon';
import ServiceDeclarationCon from './ServiceDeclarationCon';
import SelectInput from '../common/components/SelectInput';
import DateRangePicker from '../common/components/DateRangePicker';
import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';
import moment from 'moment';
import ServiceDeclarationAdmin from './ServiceDeclarationAdmin';
import ServiceSubBannerWrite from './ServiceSubBannerWrite';
import ServiceSubBannerCon from './ServiceSubBannerCon';

const headTabMenu = [
  {
    id: 1,
    value: '공지사항',
    label: '공지사항',
    disabled: false,
  },
  {
    id: 2,
    value: '메인배너',
    label: '메인배너',
    disabled: false,
  },
  {
    id: 3,
    value: '서브배너',
    label: '서브배너',
    disabled: false,
  },
  {
    id: 4,
    value: '이벤트',
    label: '이벤트',
    disabled: false,
  },
  {
    id: 5,
    value: '포인트',
    label: '포인트',
    disabled: false,
  },
  {
    id: 6,
    value: '쿠폰',
    label: '쿠폰',
    disabled: false,
  },
  {
    id: 7,
    value: '푸시',
    label: '푸시',
    disabled: true,
  },
  {
    id: 8,
    value: 'SMS',
    label: 'SMS',
    disabled: true,
  },
  {
    id: 9,
    value: '신고',
    label: '신고',
    disabled: false,
  },
];

const typeMenu = [
  {
    id: 1,
    value: '일반',
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

const ServiceManagement = () => {
  const classes = useStyles();
  const [visabled, setVisabled] = useState(false);

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

  const [headTabValue, setHeadTabValue] = useState<string>(
    headTabMenu[0].value,
  );

  const changeVisable = () => {
    setVisabled(true);
  };

  const changeInvisable = () => {
    setVisabled(false);
  };

  const renderTab = useMemo(() => {
    switch (headTabValue) {
      case headTabMenu[0].value:
        return visabled ? (
          <ServiceNoticeWrite onClose={changeInvisable} />
        ) : (
          <ServiceNoticeListCon onClickRegister={changeVisable} />
        );
      case headTabMenu[1].value:
        return visabled ? (
          <ServiceMainBannerWrite onClose={changeInvisable} />
        ) : (
          <ServiceMainBannerCon onClickRegister={changeVisable} />
        );
      case headTabMenu[2].value:
        return visabled ? (
          <ServiceSubBannerWrite onClose={changeInvisable} />
        ) : (
          <ServiceSubBannerCon onClickRegister={changeVisable} />
        );
      case headTabMenu[3].value:
        return visabled ? (
          <ServiceEventWrite onClose={changeInvisable} />
        ) : (
          <ServiceEventCon onClickRegister={changeVisable} />
        );

      case headTabMenu[4].value:
        return <ServicePointCon />;
      case headTabMenu[5].value:
        return <ServiceCouponCon />;
      case headTabMenu[8].value:
        return visabled ? (
          <ServiceDeclarationAdmin onClose={changeInvisable} />
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
                size="small"
                placeholder="구분"
                menuItems={typeMenu}
                className={classes.typeSelect}
                menuItmesClassName={classes.typeMenuItem}
              />
              <TextField
                size="small"
                placeholder="사유"
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
                size="small"
                placeholder="25개씩"
                menuItems={listBox}
                className={classes.listSelect}
                menuItmesClassName={classes.listMenuItem}
              />
            </Box>
            <ServiceDeclarationCon onClickButton={changeVisable} />
          </>
        );
      default:
        break;
    }

    return <></>;
  }, [visabled, headTabValue]);

  useEffect(() => {
    changeInvisable();
  }, [headTabValue]);

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          서비스관리
        </Typography>
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
        {renderTab}
      </Container>
    </Layout>
  );
};
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      padding: theme.spacing(10, 15, 25, 15),
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
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      top: 132,
      right: 30,
    },
  },
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
      '& .MuiSelect-select': {
        fontSize: 14,
        fontWeight: 400,
        padding: '5.5px 10px',
      },
      '& .MuiSelect-icon': {
        right: 0,
      },
    },
  },
  listMenuItem: {
    '&.MuiMenuItem-root': {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  typeSelect: {
    '&&': {
      width: 80,
      height: 30,
      marginRight: 7.5,
      '& .MuiSelect-select': {
        fontSize: 14,
        fontWeight: 400,
        padding: '5.5px 10px',
      },
      '& .MuiSelect-icon': {
        right: 0,
      },
    },
  },
  typeMenuItem: {
    '&.MuiMenuItem-root': {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  textField: {
    '&&': {
      '& .MuiOutlinedInput-root': {
        height: 30,
      },
      '& input': {
        fontSize: 14,
        fontWeight: 400,
        padding: '5.5px 8px',
      },
    },
  },
  searchBtn: {
    '&&': {
      minWidth: 60,
      height: 30,
      marginLeft: 15,
      padding: '6px 16px',
    },
  },
}));

export default ServiceManagement;
