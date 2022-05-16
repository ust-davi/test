import { CSSProperties, useMemo, useState } from 'react';
import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Switch,
  FormControlLabel,
  TextField,
  Grid,
  IconButton,
  Icon,
  Box,
  Button,
  RadioGroup,
  Radio,
  Dialog,
  DialogTitle,
  Checkbox,
  DialogActions,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_30,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_70,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_WHITE,
  COLOR_DARK_GREY,
  COLOR_VIOLET_30,
  COLOR_VIOLET_10,
  COLOR_RED_60,
} from '../../common/styles/Color';
import { GREY_SHADOW_4DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';
import clsx from 'clsx';

import SelectInput from '../../common/components/SelectInput';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
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

interface CustomEventProps extends Object, Event {
  id: string;
  start: Date;
  end: Date;
  isChecked?: boolean;
}

interface DateRange {
  start: Date;
  end: Date;
}

const businessDateItems = [
  {
    id: 1,
    name: '영업시간',
    detail: [
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
      '일요일',
    ],
    time: [
      { id: 1, value: '오전' },
      { id: 2, value: '오후' },
    ],
  },
  { id: 2, name: '공휴일', detail: ['공휴일 휴무'] },
];

const reservationItems = [
  {
    name: '예약제 선택',
    detail: [
      { id: 1, value: '예약승인제' },
      { id: 2, value: '실시간 예약제' },
    ],
  },
  {
    name: '예약 간격',
    detail: [
      { id: 1, value: '5분' },
      { id: 2, value: '10분' },
      { id: 3, value: '15분' },
      { id: 4, value: '20분' },
      { id: 5, value: '30분' },
      { id: 6, value: '60분' },
      { id: 7, value: '90분' },
    ],
  },
  {
    name: '동시 예약 인원',
    detail: [
      { id: 1, value: '1명' },
      { id: 2, value: '2명' },
      { id: 3, value: '3명' },
      { id: 4, value: '4명' },
      { id: 5, value: '5명' },
    ],
  },
];

const paymentRefundItems = [
  {
    name: '결제 옵션',
    detail: [
      { id: 1, value: '현장 결제' },
      { id: 2, value: 'App 결제' },
    ],
  },
  {
    name: '예약금',
  },
  {
    name: '환불 가능 일자',
    detail: [
      { id: 1, value: '전일' },
      { id: 2, value: '당일' },
    ],
    time: [
      { id: 1, value: '3시간' },
      { id: 2, value: '6시간' },
      { id: 3, value: '12시간' },
    ],
  },
];

const CustomEvent = ({ event }: EventProps) => {
  const { isChecked } = event as CustomEventProps;
  const [checked, setChecked] = useState(isChecked);

  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <Checkbox
        color="default"
        checked={checked}
        onChange={(e, _checked) => setChecked(_checked)}
      />
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

const OperationSettingCon = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    start: moment().startOf('month').toDate(),
    end: moment().endOf('month').toDate(),
  });
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onClickButton = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  moment.locale('kr-KO');
  const localizer = momentLocalizer(moment);

  const events = useMemo(() => {
    // 체크되어있을 날짜들
    const checkedDate: number[] = [
      moment('2022-02-05', 'YYYY-MM-DD').toDate().getTime(),
      moment('2022-02-06', 'YYYY-MM-DD').toDate().getTime(),
      moment('2022-02-20', 'YYYY-MM-DD').toDate().getTime(),
    ];

    const from = dateRange.start;
    const to = dateRange.end;
    const tempDate = new Date(from);
    const days: Date[] = [];

    while (tempDate <= to) {
      days.push(new Date(tempDate));
      tempDate.setDate(tempDate.getDate() + 1);
    }

    const event: CustomEventProps[] = days.map((day, index) => ({
      id: (index + 1).toString(),
      start: day,
      end: day,
      isChecked: checkedDate.includes(day.getTime()),
    }));

    return event;
  }, [dateRange]);

  return (
    <>
      <Typography variant="h6">영업일</Typography>
      <Table className={classes.table}>
        <TableBody>
          {businessDateItems.map((item) => (
            <>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  rowSpan={item.detail.length + 1}
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  {item.name}
                </TableCell>
              </TableRow>
              {item.detail.map((detail) => (
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    <Grid container flexWrap="nowrap">
                      <FormControlLabel
                        control={<Switch />}
                        label={detail}
                        labelPlacement="start"
                        className={classes.switchs}
                      />
                      {item.name === '영업시간' ? (
                        <Grid container alignItems="center" spacing={5}>
                          <Grid item>
                            <SelectInput
                              defaultValue="시간"
                              menuItems={item.time}
                              className={classes.timeSelect}
                            />
                          </Grid>
                          <Grid item>
                            <TextField
                              sx={{ width: 80 }}
                              className={classes.textField}
                            />
                          </Grid>
                          <Grid item component="span">
                            ~
                          </Grid>
                          <Grid item>
                            <SelectInput
                              defaultValue="오후"
                              menuItems={item.time}
                              className={classes.timeSelect}
                            />
                          </Grid>
                          <Grid item>
                            <TextField
                              sx={{ width: 80 }}
                              className={classes.textField}
                            />
                          </Grid>
                        </Grid>
                      ) : (
                        <Grid container alignItems="center">
                          <Typography
                            color={COLOR_DARK_GREY}
                            fontWeight={400}
                            mr={5.5}
                          >
                            공휴일 지정
                          </Typography>
                          <IconButton className={classes.calanderIcon}>
                            <FontAwesomeIcon
                              icon={faCalendarAlt}
                              onClick={onClickButton}
                            />
                          </IconButton>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            fullWidth
                            sx={{
                              '&& .MuiDialog-paper': {
                                width: 585,
                                minWidth: 585,
                              },
                            }}
                            maxWidth={undefined}
                          >
                            <DialogTitle>휴무 설정</DialogTitle>
                            <Calendar
                              onRangeChange={(range) => {
                                const typeConvertRange = range as DateRange;
                                setDateRange({
                                  start: moment(typeConvertRange.start)
                                    .add(6, 'd')
                                    .startOf('month')
                                    .toDate(),
                                  end: moment(typeConvertRange.start)
                                    .add(6, 'd')
                                    .endOf('month')
                                    .toDate(),
                                });
                              }}
                              className={classes.calendar}
                              events={events}
                              defaultDate={new Date()}
                              showMultiDayTimes={false}
                              components={{
                                event: CustomEvent,
                                toolbar: CustomToolbar,
                              }}
                              eventPropGetter={() => ({
                                style: {
                                  backgroundColor: 'transparent',
                                  outline: 'none',
                                },
                              })}
                              localizer={localizer}
                              views={['month']}
                              startAccessor="start"
                              endAccessor="end"
                            />
                            <DialogActions sx={{ float: 'right', pb: 7.5 }}>
                              <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: 110 }}
                              >
                                저장
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Grid>
                      )}
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h6">예약</Typography>
      <Table className={classes.table}>
        <TableBody>
          {reservationItems.map((item) => (
            <>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  {item.name}
                </TableCell>

                <TableCell className={classes.tableCell}>
                  {item.name === '동시 예약 인원' ? (
                    <Grid item>
                      <SelectInput
                        defaultValue="인원"
                        menuItems={item.detail}
                        className={classes.reservationSelect}
                      />
                    </Grid>
                  ) : (
                    <RadioGroup
                      name="radio-buttons-group"
                      defaultValue={item.detail[0].value}
                    >
                      <Grid container>
                        {item.detail.map((detail) => (
                          <Grid item key={detail.id}>
                            <FormControlLabel
                              value={detail.value}
                              label={detail.value}
                              control={<Radio color="default" />}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </RadioGroup>
                  )}
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h6">결제 및 환불</Typography>
      <Table className={classes.table}>
        <TableBody>
          {paymentRefundItems.map((item) => (
            <TableRow key={item.name}>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                {item.name}
              </TableCell>

              <TableCell className={classes.tableCell}>
                {item.name === '예약금' ? (
                  <Grid container alignItems="center">
                    <TextField className={classes.textField} />
                    <Typography ml={5} fontWeight={400} color={COLOR_GREY_30}>
                      최소 금액 10,000
                    </Typography>
                  </Grid>
                ) : (
                  <RadioGroup
                    name="radio-buttons-group"
                    defaultValue={
                      item.name === '결제 옵션' ? '현장 결제' : '전일'
                    }
                  >
                    <Grid container alignItems="center">
                      {item.detail?.map((detail) => (
                        <Grid item key={detail.id}>
                          <FormControlLabel
                            value={detail.value}
                            label={detail.value}
                            control={<Radio color="default" />}
                          />
                        </Grid>
                      ))}
                      {item.name === '환불 가능 일자' && (
                        <>
                          <SelectInput
                            defaultValue="시간"
                            menuItems={item.time}
                            className={classes.refundSelect}
                          />
                          <Typography
                            ml={5}
                            fontWeight={400}
                            color={COLOR_DARK_GREY}
                          >
                            까지 100%환불, 이후 환불 불가
                          </Typography>
                        </>
                      )}
                    </Grid>
                  </RadioGroup>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box width="100%" display="flex" justifyContent="center">
        <Button variant="contained" className={classes.submitBtn}>
          저장
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'fixed',
  },
  tableCell: {
    '&.MuiTableCell-root': {
      position: 'relative',
      width: 'calc( 100% - 200px )',
      height: 50,
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      fontWeight: 400,
      padding: theme.spacing(0, 5),
      whiteSpace: 'pre-line',
    },
  },
  tableHead: {
    '&&': {
      width: 200,
      backgroundColor: COLOR_GREY_0,
      fontWeight: 700,
    },
  },
  logTableHead: {
    '&&': {
      backgroundColor: COLOR_GREY_0,
      fontWeight: 700,
    },
  },
  calanderIcon: {
    wdith: '100%',
    padding: '0 !important',
    '& svg': {
      color: COLOR_DARK_GREY,
    },
  },
  areaSelect: {
    '&&': {
      width: 152,
      height: 40,
      marginRight: 20,
      '& .MuiSelect-select': {
        padding: 10,
      },
    },
  },
  accountSelect: {
    '&&': {
      width: 150,
      height: 40,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  timeSelect: {
    '&&': {
      width: 80,
      height: 40,
    },
  },
  reservationSelect: {
    '&&': {
      width: 150,
      height: 40,
    },
  },
  refundSelect: {
    '&&': {
      width: 150,
      height: 40,
    },
  },
  textField: {
    '&&': {
      '& .MuiOutlinedInput-root': {
        height: 40,
      },
      '& input': {
        padding: '10px 12px',
        fontWeight: 400,
      },
    },
  },
  radioGroup: {
    '&&': {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  switchs: {
    '&&': {
      margin: 0,
      whiteSpace: 'nowrap',
      '& .MuiSwitch-track': {
        background: COLOR_VIOLET_10,
      },
      '& .MuiSwitch-thumb': {
        background: COLOR_VIOLET_30,
      },
      '& .Mui-checked .MuiSwitch-thumb': {
        background: COLOR_VIOLET_70,
      },
      '& .Mui-checked .MuiSwitch-track': {
        background: COLOR_VIOLET_70,
      },
    },
    '& .MuiFormControlLabel-label': {
      fontWeight: 400,
      paddingRight: 8,
    },
  },
  linkText: {
    '&&': {
      fontWeight: 700,
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_70,
    },
  },
  shopRegistrationBtn: {
    '&.MuiButton-root': {
      width: 101,
      height: 40,
      fontSize: 14,
      whiteSpace: 'nowrap',
      color: COLOR_VIOLET_40,
      background: COLOR_VIOLET_5,
      boxShadow: VIOLET_SHADOW_2DP,
      '&.MuiButton-root:hover': {
        color: COLOR_VIOLET_40,
        background: COLOR_VIOLET_5,
        boxShadow: VIOLET_SHADOW_2DP,
      },
    },
  },
  rightBtn: {
    '&&': {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translate(0, -50%)',
      '&.Mui-disabled': {
        background: COLOR_VIOLET_5,
        color: COLOR_VIOLET_40,
      },
    },
  },
  violetBold: {
    '&&': {
      fontSize: 17,
      color: COLOR_VIOLET_70,
      fontWeight: 700,
    },
  },
  imageButton: {
    width: 200,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: GREY_SHADOW_4DP,
    backgroundColor: COLOR_WHITE,
    color: COLOR_GREY_60,
    borderRadius: 8,
    cursor: 'pointer',
  },
  submitBtn: {
    '&&': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '10.5px 26px',
      margin: '0 7.5px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
  calendar: {
    width: '100%',
    height: 571,
    padding: 15,
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
    '& .rbc-event': {
      padding: '0 15px',
    },
  },
}));

export default OperationSettingCon;
