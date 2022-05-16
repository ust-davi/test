import { useMemo, useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Icon,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_30,
  COLOR_RED_5,
  COLOR_RED_60,
  COLOR_UST_70,
  COLOR_WHITE,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';

import {
  Calendar,
  momentLocalizer,
  Event,
  ToolbarProps,
  EventProps,
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ko';

interface CustomEvent extends Object, Event {
  id: string;
  title: string;
  time: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  circleColor?: string;
  className?: string;
  rightIcon?: any;
  cancel?: boolean;
}

const CustomEvent = ({ event }: EventProps) => {
  const { id, cancel, time, title, circleColor, rightIcon } =
    event as CustomEvent;

  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        color: '#333',
      }}
    >
      <Icon
        sx={{
          width: 20,
          height: 20,
          color: circleColor || '#333',
          marginRight: 10.04,
          fontSize: 20,
        }}
      >
        circle
      </Icon>
      <Typography
        mr={5}
        color={rightIcon ? COLOR_DARK_GREY : COLOR_GREY_30}
        fontWeight={400}
        sx={{
          textDecoration: cancel === true ? 'line-through' : undefined,
        }}
      >
        {time}
      </Typography>
      <Typography
        mr={6}
        color={rightIcon ? COLOR_DARK_GREY : COLOR_GREY_30}
        fontWeight={rightIcon ? 900 : 400}
        sx={{
          textDecoration: cancel === true ? 'line-through' : undefined,
        }}
      >
        {title}
      </Typography>
      {rightIcon}
    </span>
  );
};

const CustomToolbar = ({ date, onNavigate }: ToolbarProps) => {
  const goToBack = () => {
    date.setMonth(date.getMonth() - 1);
    onNavigate('PREV');
  };

  const goToNext = () => {
    date.setMonth(date.getMonth() + 1);
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

const ReserveCaseCon = () => {
  const classes = useStyles();

  moment.locale('kr-KO');
  const localizer = momentLocalizer(moment);

  const events = useMemo(() => {
    const days = new Array(moment().daysInMonth()).fill(0);

    const event: CustomEvent[] = days
      .map((_, index) => [
        {
          id: (index + 1).toString(),
          title: '홍길동',
          time: '09:30',
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
          circleColor: '#97A0D6',
        },
        {
          id: (index + 1000).toString(),
          title: '홍길동',
          time: '10:30',
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
          circleColor: '#733C00',
        },
        {
          id: (index + 2000).toString(),
          title: '홍길동',
          time: '11:30',
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
          circleColor: '#F8877F',
        },
        {
          id: (index + 3000).toString(),
          title: '홍길동',
          time: '12:30',
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
          circleColor: '#97A0D6',
          rightIcon: <Icon sx={{ color: COLOR_RED_60 }}>notifications</Icon>,
        },
        {
          id: (index + 4000).toString(),
          title: '홍길동',
          time: '12:30',
          cancel: true,
          start: moment()
            .set('D', index + 1)
            .toDate(),
          end: moment()
            .set('D', index + 1)
            .toDate(),
          circleColor: '#97A0D6',
        },
      ])
      .flat();

    return event;
  }, []);

  return (
    <>
      <Typography width="100%" fontWeight={400} pt={9.32} pb={14}>
        총{' '}
        <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
          99
        </Typography>
        건{' '}
        <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
          9,699,000
        </Typography>
        원
      </Typography>
      <Calendar
        className={classes.calandar}
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
      <div className={classes.cateBox}>
        <p>
          {events[3].rightIcon}
          예약요청
        </p>
        <p>
          <Icon
            sx={{
              width: 20,
              height: 20,
              color: events[2].circleColor,
              fontSize: 20,
            }}
          >
            circle
          </Icon>
          {events[2].title}
        </p>
        <p>
          <Icon
            sx={{
              width: 20,
              height: 20,
              color: events[0].circleColor,
              fontSize: 20,
            }}
          >
            circle
          </Icon>
          {events[0].title}
        </p>
        <p>
          <Icon
            sx={{
              width: 20,
              height: 20,
              color: events[1].circleColor,
              fontSize: 20,
            }}
          >
            circle
          </Icon>
          {events[1].title}
        </p>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
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

export default ReserveCaseCon;
