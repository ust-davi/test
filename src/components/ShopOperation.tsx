import Layout from '../pages/Layout';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  IconButton,
  Icon,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_0,
  COLOR_GREY_30,
  COLOR_GREY_60,
  COLOR_GREY_70,
  COLOR_INDIGO_0,
  COLOR_INDIGO_60,
  COLOR_PINK_0,
  COLOR_PINK_60,
  COLOR_RED_5,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../common/styles/Shadow';
import clsx from 'clsx';

import DateRangePicker from '../common/components/DateRangePicker';
import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';
import moment from 'moment';
import SelectInput from '../common/components/SelectInput';

import {
  Calendar,
  momentLocalizer,
  Event,
  ToolbarProps,
  EventProps,
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ko';
import ShopOperationCon from './ShopOperationCon';
import BarChart from './BarChart';

const dataItems = [
  {
    id: 1,
    label: '오늘 일정',
    value: 3,
  },
  {
    id: 2,
    label: '매출',
    value: 12568,
  },
  {
    id: 3,
    label: '예약',
    value: 4,
  },
  {
    id: 4,
    label: '취소',
    value: 3,
  },
  {
    id: 5,
    label: '리뷰',
    value: 1,
  },
  {
    id: 6,
    label: '문의',
    value: 0,
  },
];

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

interface CustomEventProps extends Object, Event {
  reservationType?: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  className?: string;
  useCount?: number;
  rightIcon?: object;
}

const CustomEvent = ({ event }: EventProps) => {
  const { reservationType, useCount, rightIcon } = event as CustomEventProps;

  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        color: '#333',
      }}
    >
      <Typography
        fontSize={14}
        fontWeight={
          reservationType === '예약요청' || reservationType === '이용완료'
            ? 900
            : 400
        }
        color={
          reservationType === '예약요청'
            ? COLOR_VIOLET_70
            : reservationType === '이용완료' || reservationType === '예약확정'
            ? COLOR_DARK_GREY
            : COLOR_GREY_30
        }
        mr={reservationType === '예약요청' ? 2.5 : 14}
      >
        {reservationType}
      </Typography>
      <Typography
        fontSize={14}
        fontWeight={
          reservationType === '예약요청' || reservationType === '이용완료'
            ? 900
            : 400
        }
        color={
          reservationType === '예약요청'
            ? COLOR_VIOLET_70
            : reservationType === '이용완료' || reservationType === '예약확정'
            ? COLOR_DARK_GREY
            : COLOR_GREY_30
        }
      >
        {useCount}건
      </Typography>
      {rightIcon}
    </span>
  );
};

const CustomToolbar = ({ date, onNavigate }: ToolbarProps) => {
  const goToBack = () => {
    date.setMonth(date.getMonth());
    onNavigate('PREV');
  };

  const goToNext = () => {
    date.setMonth(date.getMonth());
    onNavigate('NEXT');
  };

  const goToCurrent = () => {
    const now = new Date();
    date.setMonth(now.getMonth());
    date.setFullYear(now.getFullYear());

    onNavigate('TODAY');
  };

  const label = () => {
    const momentDate = moment(date);

    return (
      <Grid
        container
        width="100%"
        alignItems="center"
        justifyContent="center"
        pb={7}
      >
        <IconButton onClick={goToBack}>
          <Icon>arrow_back_ios</Icon>
        </IconButton>
        <Typography variant="h5" px={28}>
          {momentDate.format('YYYY')}년 {momentDate.format('MMMM')}
        </Typography>
        <IconButton onClick={goToNext}>
          <Icon>arrow_forward_ios</Icon>
        </IconButton>
      </Grid>
    );
  };

  return <>{label()}</>;
};

const ShopOperation = () => {
  const classes = useStyles();
  const history = useHistory();

  moment.locale('kr-KO');
  const localizer = momentLocalizer(moment);

  const events = useMemo(() => {
    const days = new Array(moment().daysInMonth()).fill(0);

    const event: CustomEventProps[] = days
      .map((_, index) => [
        {
          reservationType: '이용완료',
          useCount: 4,
          id: (index + 1).toString(),
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
        },
        {
          reservationType: '예약취소',
          useCount: 1,
          id: (index + 1000).toString(),
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
        },
        {
          reservationType: '예약요청',
          useCount: 2,
          id: (index + 2000).toString(),
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
          rightIcon: <Icon sx={{ color: COLOR_GREY_60 }}>task_alt</Icon>,
        },
        {
          reservationType: '예약확정',
          useCount: 2,
          id: (index + 3000).toString(),
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
        },
      ])
      .flat();

    return event;
  }, []);

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

  const onClickListButton = () => {
    history.push('/shopManagement/shopoperation/shopmember');
  };

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          샵 운영 지표
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
      <div className={classes.rightBox}>
        <DateRangePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <SelectInput
          defaultValue={areaMenu[0].value}
          menuItems={areaMenu}
          className={clsx(classes.select, classes.areaSelect)}
          menuItmesClassName={classes.menuItem}
        />
        <SelectInput
          placeholder="카테고리"
          menuItems={cateMenu}
          className={clsx(classes.select, classes.cateSelect)}
          menuItmesClassName={classes.menuItem}
        />
        <Button variant="contained" size="small" className={classes.searchBtn}>
          검색
        </Button>
      </div>

      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <Grid container columnSpacing={8}>
          {dataItems.map((item) => (
            <Grid item key={item.id} xs={2}>
              <div
                className={clsx(
                  classes.dataBox,
                  item.label === '예약'
                    ? classes.pinkBox
                    : item.label === '문의'
                    ? classes.greyBox
                    : classes.indigoBox,
                )}
              >
                <Typography variant="h6" fontWeight={500}>
                  {item.label}
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  textAlign="right"
                  color={
                    item.label === '예약'
                      ? COLOR_PINK_60
                      : item.label === '문의'
                      ? COLOR_GREY_60
                      : COLOR_INDIGO_60
                  }
                >
                  {item.label === '매출' ? (
                    item.value.toLocaleString()
                  ) : (
                    <>
                      <span
                        className={
                          item.value !== 0 ? classes.linkText : undefined
                        }
                      >
                        {item.value}
                      </span>
                      건
                    </>
                  )}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container flexWrap="nowrap">
        <Container
          maxWidth={false}
          component={Paper}
          className={classes.chartContainer}
        >
          <BarChart />
        </Container>
        <Container
          maxWidth={false}
          component={Paper}
          className={classes.calanderContainer}
        >
          <Calendar
            className={classes.calendar}
            events={events}
            defaultDate={new Date()}
            showMultiDayTimes={false}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
            }}
            eventPropGetter={() => ({
              style: { backgroundColor: 'transparent', outline: 'none' },
            })}
            localizer={localizer}
            views={['month']}
            startAccessor="start"
            endAccessor="end"
          />
        </Container>
      </Grid>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <ShopOperationCon />
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '15px 20.5px',
      marginTop: theme.spacing(7.5),
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  chartContainer: {
    '&&': {
      width: 'calc( 30% - 8px )',
      // minWidth: 514,
      minHeight: 800,
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(7.5),
      marginRight: theme.spacing(8),
      borderRadius: 8,
    },
  },
  calanderContainer: {
    '&&': {
      width: 'calc( 70% - 8px )',
      // minWidth: 1050,
      minHeight: 611,
      padding: '25.5px 17.5px',
      marginTop: theme.spacing(7.5),
      borderRadius: 8,
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
  rightBox: {
    '&&': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  },
  select: {
    '&&': {
      width: 150,
      height: 40,
      background: COLOR_WHITE,
      margin: '0 10px',
    },
  },
  areaSelect: {
    '&&': {
      width: 100,
    },
  },
  cateSelect: {
    '&&': {
      width: 159,
    },
  },
  menuItem: {
    '&.MuiMenuItem-root': {
      fontWeight: 400,
    },
  },
  searchBtn: {
    '&&': {
      minWidth: 58,
      minHeight: 40,
      marginLeft: 15,
      background: COLOR_VIOLET_70,
      '&:hover': {
        background: COLOR_VIOLET_70,
      },
    },
  },
  dataBox: {
    width: '100%',
    borderRadius: 8,
    padding: '12px 16px',
  },
  indigoBox: {
    background: COLOR_INDIGO_0,
  },
  pinkBox: {
    background: COLOR_PINK_0,
  },
  greyBox: {
    background: COLOR_GREY_0,
  },
  linkText: {
    '&&': {
      fontWeight: 700,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  calendar: {
    width: '100%',
    minHeight: 531,
    overflow: 'auto',
    '& .rbc-header': {
      fontSize: 16,
      fontWeight: 400,
      padding: '14px 11px',
      background: '#F7F7FA',
    },
    '& .rbc-date-cell': {
      fontSize: 16,
      paddingRight: 15,
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
    '& .rbc-event-content > span': {
      justifyContent: 'space-between',
    },
    '& .rbc-today': {
      background: COLOR_RED_5,
    },
    '& .rbc-event': {
      padding: '0 15px',
    },
  },
}));

export default ShopOperation;
