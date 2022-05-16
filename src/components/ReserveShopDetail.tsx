import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  TableContainer,
  Container,
  Paper,
  Box,
  Button,
  Icon,
  IconButton,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState, useMemo, CSSProperties } from 'react';
import { ReserveShopDetailData } from '../components/ReserveData';
import clsx from 'clsx';
import SubLayout from '../pages/SubLayout';
import DateRangePicker from '../common/components/DateRangePicker';
import SelectInput from '../common/components/SelectInput';

import { GREY_SHADOW_2DP } from '../common/styles/Shadow';
import {
  COLOR_GREY_5,
  COLOR_GREY_10,
  COLOR_GREY_30,
  COLOR_RED_60,
  COLOR_UST_60,
  COLOR_UST_70,
  COLOR_VIOLET_10,
  COLOR_VIOLET_50,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_WHITE,
  COLOR_RED_5,
  COLOR_DARK_GREY,
} from '../common/styles/Color';
import DefaultTab from '../common/components/DefaultTab';

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
import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';

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
    value: '달력',
    label: '달력',
  },
];

interface CustomEvent extends Object, Event {
  id: string;
  title: string;
  time: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  circleColor?: string;
  className?: string;
  styles?: CSSProperties;
  rightIcon?: any;
  cancel?: boolean;
}

const CustomEvent = ({ event }: EventProps) => {
  const { id, cancel, styles, time, title, circleColor, rightIcon } =
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

const ReserveShopDetail = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState<string>(caseTabMenu[0].value);

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

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
    <SubLayout>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <Box
          bgcolor={COLOR_VIOLET_60}
          display="flex"
          justifyContent="center"
          py={10.25}
          boxShadow={GREY_SHADOW_2DP}
        >
          <Typography variant="h4" color="white">
            예약요청 상세_ 맨들맨들1
          </Typography>
        </Box>
        <Grid container className={classes.content}>
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
          <Typography fontWeight={400} py={10} width="100%">
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
          {tabValue === caseTabMenu[0].value ? (
            <TableContainer className={classes.tableContainer}>
              <Table>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell
                      align="center"
                      className={clsx(classes.tableCell, classes.numberCell)}
                    >
                      번호
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      일자
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      회원이름
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      카테고리
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      항목
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      결제번호
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      결제금액
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      신용카드
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      가상계좌
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      캐시
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      취소
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ReserveShopDetailData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography className={classes.tableCellText}>
                          {row.id}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography className={classes.tableCellText}>
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography
                          className={clsx(
                            classes.tableCellText,
                            classes.linkText,
                          )}
                        >
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography className={classes.tableCellText}>
                          {row.cate}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography className={classes.tableCellText}>
                          {row.item}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography
                          className={clsx(
                            classes.tableCellText,
                            classes.linkText,
                          )}
                        >
                          {row.paymentNum}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography className={classes.tableCellText}>
                          {row.pay}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography className={classes.tableCellText}>
                          {row.credit}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography className={classes.tableCellText}>
                          {row.virtualAccount}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography className={classes.tableCellText}>
                          {row.cash}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCell}>
                        <Typography
                          className={clsx(
                            classes.tableCellText,
                            row.cancelNum < 0 && classes.errorText,
                          )}
                        >
                          {row.cancelNum}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination
                count={10}
                shape="rounded"
                color="primary"
                className={classes.pagination}
              />
            </TableContainer>
          ) : (
            <>
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
          )}
        </Grid>
      </Container>
    </SubLayout>
  );
};

const useStyles = makeStyles((theme: any) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: 0,
      marginTop: 30,
      borderRadius: 8,
      overflowX: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
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
  content: {
    position: 'relative',
    padding: 30,
  },
  tableContainer: {
    margin: '9px 0',
  },
  tableHead: {
    '&&': {
      backgroundColor: COLOR_GREY_5,
    },
    '&& th': {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  tableCell: {
    '&&': {
      wordBreak: 'keep-all',
      padding: '14px 15px',
      border: `1px solid ${COLOR_GREY_10}`,
    },
  },
  tableCellText: {
    '&&': {
      fontSize: 16,
      fontWeight: 400,
      whiteSpace: 'pre-line',
    },
  },
  numberCell: {
    width: 53,
  },
  linkText: {
    '&&': {
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_60,
    },
  },
  errorText: {
    color: COLOR_RED_60,
  },
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
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

export default ReserveShopDetail;
