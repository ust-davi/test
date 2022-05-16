import SubLayout from '../../pages/SubLayout';
import { useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  Icon,
  FormControlLabel,
  Radio,
  RadioGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Theme,
} from '@mui/material';

import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_VIOLET_60,
  COLOR_GREY_60,
  COLOR_UST_60,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_VIOLET_70,
  COLOR_GREY_5,
  COLOR_GREY_20,
  COLOR_GREY_30,
  COLOR_UST_70,
  COLOR_GREY_70,
  COLOR_VIOLET_30,
  COLOR_DARK_GREY,
  COLOR_GREY_50,
  COLOR_MINT_80,
  COLOR_UST_0,
  COLOR_GREY_40,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP } from '../../common/styles/Shadow';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import SelectInput from '../../common/components/SelectInput';
import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ko } from 'date-fns/locale';
import Confirm from '../../common/components/Confirm';

const ReserveDialogItems = [
  {
    id: 1,
    value: '예약확정',
  },
  {
    id: 2,
    value: '예약변경',
  },
  {
    id: 3,
    value: '예약취소',
  },
];

const confirmedItems = [
  {
    id: 1,
    label: '1차 요청',
    value: '2021-10-09 (목) 오후 3시 30분',
  },
  {
    id: 2,
    label: '2차 요청',
    value: '2021-10-09 (목) 오후 3시 30분',
  },
  {
    id: 3,
    label: '3차 요청',
    value: '2021-10-09 (목) 오후 3시 30분 ',
  },
];

const timeItems = [
  {
    id: 1,
    value: '09:00',
  },
  {
    id: 2,
    value: '09:30',
  },
  {
    id: 3,
    value: '10:00',
  },
  {
    id: 4,
    value: '10:30',
  },
  {
    id: 5,
    value: '11:00',
  },
  {
    id: 6,
    value: '11:30',
  },
];

const canceledItems = [
  {
    id: 1,
    value: '샵 요청',
  },
  {
    id: 2,
    value: '회원 요청',
  },
];

const rows = [
  {
    id: 1,
    date: 'YYYY.MM.DD HH:MM',
    product: '[왁싱/여성/바디왁싱] 다리하프',
    payment: 100000,
    status: '결제완료',
    owner: '원장님',
    note: '',
  },
  {
    id: 2,
    date: 'YYYY.MM.DD HH:MM',
    product: '[왁싱/여성/바디왁싱] 다리하프',
    payment: 100000,
    status: '결제완료',
    owner: '원장님',
    note: '',
  },
  {
    id: 3,
    date: 'YYYY.MM.DD HH:MM',
    product: '[왁싱/여성/바디왁싱] 다리하프',
    payment: 100000,
    status: '결제완료',
    owner: '원장님',
    note: '',
  },
  {
    id: 4,
    date: 'YYYY.MM.DD HH:MM',
    product: '[왁싱/여성/바디왁싱] 다리하프',
    payment: 100000,
    status: '결제취소',
    owner: '원장님',
    note: '',
  },
];

interface MatchParams {
  id: string;
}

const SalesDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Date | null>(null);
  const [refundAlertOpen, setRefundAlertOpen] = useState<boolean>(false);
  const [pointAlertOpen, setPointAlertOpen] = useState<boolean>(false);
  const [reserveFlag, setReserveFlag] = useState<string>();
  const [reserveCancel, setReserveCancel] = useState<string>(
    canceledItems[0].value,
  );
  const [changeOptionValue, setChangeOptionValue] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    if (reserveFlag === '예약취소') {
      if (reserveCancel === '샵 요청') {
        setRefundAlertOpen(true);
      } else {
        setPointAlertOpen(true);
      }
    }
    handleClose();
  };

  const handleRefundConfirm = () => {
    setRefundAlertOpen(false);
  };

  const handleRefundClose = () => {
    setRefundAlertOpen(false);
  };

  const handlePointConfirm = () => {
    setPointAlertOpen(false);
  };

  const handlePointClose = () => {
    setPointAlertOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setReserveFlag(undefined);
    setReserveCancel(canceledItems[0].value);
  };

  const onClickListButton = () => {
    history.push('/shopManagement/sales/shopmember');
  };

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
            매출 상세
          </Typography>
        </Box>
        <Grid container className={classes.content}>
          <Typography variant="h6">회원정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  회원이름
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.linkText)}
                >
                  홍길동
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  생년월일
                </TableCell>
                <TableCell className={classes.tableCell}>YYYY-MM-DD</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  닉네임
                </TableCell>
                <TableCell className={classes.tableCell}>철수</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  가입일
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  휴대폰번호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  010-1234-5678
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  최근 로그인
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">매출 정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제번호
                </TableCell>
                <TableCell className={classes.tableCell}>1905m0001</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  구분
                </TableCell>
                <TableCell className={classes.tableCell}>일반</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  상품
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.boldText)}
                >
                  [왁싱/여성/바디왁싱] 다리하프
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제수단
                </TableCell>
                <TableCell className={classes.tableCell}>
                  신용카드 : KB국민카드 <br />
                  카드번호 : 557042*********5 <br />
                  승인번호 : 12345678 <br />
                  승인시각 : 202012 07190701
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제상태
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.violetBold)}
                >
                  결제완료 YYYY-MM-DD HH:MM:SS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제금액
                </TableCell>
                <TableCell className={classes.tableCell}>100,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제정보 상세
                </TableCell>
                <TableCell className={classes.tableCell}>
                  쿠폰할인 : -10.000원 (쿠폰명) <br />
                  포인트 사용 : -3,000원 적립
                  <br />
                  포인트 : 200원
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  예약요청시간
                </TableCell>
                <TableCell className={classes.tableCell}>
                  1차 YYYY.MM.DD HH:MM 2차 YYYY.MM.DD HH:MM 3차 YYYY.MM.DD HH:MM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  예약상태
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.violetBold)}
                >
                  예약확정 YYYY-MM-DD HH:MM:SS
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleClickOpen}
                    className={classes.changeBtn}
                  >
                    변경
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    sx={{
                      '&& .MuiDialog-paper': {
                        width: 328,
                        minWidth: 328,
                        p: 8,
                        borderRadius: 4,
                      },
                    }}
                    maxWidth={undefined}
                  >
                    <DialogTitle className={classes.dialogTitle}>
                      <Icon>info</Icon>
                      김태형님 예약요청
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                      <SelectInput
                        size="small"
                        placeholder="---------선택---------"
                        menuItems={ReserveDialogItems}
                        onChange={setReserveFlag}
                        className={classes.rootSelect}
                      />
                      {reserveFlag === '예약변경' && (
                        <>
                          <FormControl component="form">
                            <Accordion
                              elevation={0}
                              classes={{
                                root: classes.MuiAccordionroot,
                              }}
                              expanded={changeOptionValue === 1}
                              onChange={(_, isExpanded) => {
                                if (isExpanded) {
                                  setChangeOptionValue(1);
                                } else {
                                  setChangeOptionValue(0);
                                }
                              }}
                            >
                              <AccordionSummary
                                className={classes.accodionTitle}
                                expandIcon={<Icon>keyboard_arrow_down</Icon>}
                              >
                                <Icon>calendar_today</Icon>
                                <Typography color={COLOR_UST_70}>
                                  2021-10-09 (목)
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails
                                className={classes.accodionDetail}
                              >
                                <LocalizationProvider
                                  locale={ko}
                                  dateAdapter={AdapterDateFns}
                                >
                                  <StaticDatePicker
                                    className={classes.datePicker}
                                    displayStaticWrapperAs="desktop"
                                    openTo="day"
                                    minDate={new Date()}
                                    value={value}
                                    onChange={(newValue) => {
                                      setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                  />
                                </LocalizationProvider>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              elevation={0}
                              classes={{
                                root: classes.MuiAccordionroot,
                              }}
                              expanded={changeOptionValue === 2}
                              onChange={(_, isExpanded) => {
                                if (isExpanded) {
                                  setChangeOptionValue(2);
                                } else {
                                  setChangeOptionValue(0);
                                }
                              }}
                            >
                              <AccordionSummary
                                className={classes.accodionTitle}
                                expandIcon={<Icon>keyboard_arrow_down</Icon>}
                              >
                                <Icon>access_time</Icon>
                                <Typography color={COLOR_UST_70}>
                                  오후 7시45분
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <div>
                                  <Typography py={10}>오전</Typography>
                                  <Box width="100%" m={-1.25}>
                                    {timeItems.map((item) => (
                                      <Button
                                        key={item.id}
                                        color="default"
                                        variant="outlined"
                                        disabled={item.value === '09:30'}
                                        classes={{
                                          disabled: classes.disabledTimesBtn,
                                          root: classes.rootTimesButton,
                                        }}
                                      >
                                        {item.value}
                                      </Button>
                                    ))}
                                  </Box>
                                  <Typography py={10}>오후</Typography>
                                  <Box width="100%" m={-1.25}>
                                    {timeItems.map((item) => (
                                      <Button
                                        key={item.id}
                                        color="default"
                                        variant="outlined"
                                        disabled={item.value === '09:30'}
                                        className={classes.rootTimesButton}
                                      >
                                        {item.value}
                                      </Button>
                                    ))}
                                  </Box>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </FormControl>
                        </>
                      )}
                      {reserveFlag === '예약확정' && (
                        <RadioGroup
                          defaultValue="1차 요청"
                          name="radio-buttons-group"
                          className={classes.radioGroup}
                        >
                          {confirmedItems.map((item) => (
                            <FormControlLabel
                              key={item.id}
                              classes={{ root: classes.rootControlLabel }}
                              control={
                                <Radio
                                  value={item.label}
                                  classes={{
                                    checked: classes.checkedRaido,
                                    root: classes.rootRadio,
                                  }}
                                />
                              }
                              label={
                                <Typography fontSize={14} fontWeight={400}>
                                  {item.label}
                                  <span className={classes.radioDateText}>
                                    {item.value}
                                  </span>
                                </Typography>
                              }
                            />
                          ))}
                        </RadioGroup>
                      )}
                      {reserveFlag === '예약취소' && (
                        <SelectInput
                          size="small"
                          className={clsx(
                            classes.rootSelect,
                            classes.reserveSelect,
                          )}
                          placeholder={canceledItems[0].value}
                          onChange={setReserveCancel}
                          menuItems={canceledItems}
                        />
                      )}
                    </DialogContent>

                    <DialogActions
                      sx={{ padding: 0, justifyContent: 'space-between' }}
                    >
                      <Button
                        size="small"
                        onClick={handleClose}
                        className={classes.cancelBtn}
                      >
                        취소
                      </Button>
                      <Button
                        autoFocus
                        disableElevation
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={handleConfirm}
                        className={classes.confirmBtn}
                      >
                        확인
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Confirm
                    isOpen={refundAlertOpen}
                    message="홍길동 고객님의 예약을 취소하고 환불 절차를 진행하겠습니까?"
                    okFunction={handleRefundConfirm}
                    onClose={handleRefundClose}
                  />
                  <Confirm
                    isOpen={pointAlertOpen}
                    message="홍길동 고객님의 예약을 취소하고 결제 금액을 포인트로 전환하겠습니까?"
                    okFunction={handlePointConfirm}
                    onClose={handlePointClose}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">결제 로그</Typography>
          <Table className={classes.logTable}>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  일시
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  상품
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제금액
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제상태
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  담당자
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(
                    classes.tableHead,
                    classes.tableCell,
                    classes.noteCell,
                  )}
                >
                  비고
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.date}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.product}
                  </TableCell>
                  <TableCell align="right" className={classes.tableCell}>
                    {row.payment}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.status}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.owner}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.note}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box width="100%" display="flex" justifyContent="flex-end" mt={15}>
            <Button
              variant="contained"
              className={classes.listBtn}
              onClick={onClickListButton}
            >
              목록
            </Button>
          </Box>
        </Grid>
      </Container>
    </SubLayout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: 0,
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  content: {
    padding: '30px 60px',
  },
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
      padding: theme.spacing(7.75, 5),
      whiteSpace: 'pre-line',
    },
  },
  tableHead: {
    '&.MuiTableCell-root': {
      width: 200,
      backgroundColor: COLOR_GREY_0,
      fontWeight: 700,
    },
  },
  logTable: {
    marginTop: theme.spacing(14),
    '&& th': {
      width: 'auto',
    },
  },
  noteCell: {
    width: '468px !important',
  },
  listBtn: {
    '&&': {
      minWidth: 83,
      minHeight: 40,
      fontWeight: 700,
      background: COLOR_GREY_60,
      padding: '6px 16px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
  changeBtn: {
    '&.MuiButton-root': {
      width: 50,
      minWidth: 50,
      height: 28,
      marginLeft: 15,
      background: COLOR_VIOLET_60,
    },
  },
  rightBtn: {
    '&&': {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translate(0, -50%)',
      '&.Mui-disabled': {
        background: COLOR_VIOLET_5,
        color: COLOR_VIOLET_40,
      },
    },
  },
  MuiAccordionroot: {
    '&:before': {
      display: 'none',
    },
  },
  datePicker: {
    width: '100%',
    '&&': {
      width: '100%',
      background: 'red',
    },
  },
  accodionDetail: {
    '&& > div, && > div, && > div > div > div': {
      width: '100%',
      minWidth: 'auto',
    },
    '&& .MuiCalendarPicker-root': {
      width: '100%',
      '& > div': {
        padding: 0,
      },
    },
  },
  accodionTitle: {
    '&&': {
      minHeight: '40px !important',
      marginTop: 20,
      padding: '6px 8px',
      borderRadius: 4,
      color: COLOR_UST_70,
      background: COLOR_UST_0,
      '& .MuiIcon-root': {
        marginRight: 7,
        color: COLOR_UST_70,
      },
    },
    '&& .MuiAccordionSummary-content': {
      margin: 0,
    },
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    color: COLOR_DARK_GREY,
    fontSize: '14px !important',
    padding: '0px !important',
    '& .MuiIcon-root': {
      color: COLOR_VIOLET_30,
      marginRight: theme.spacing(6),
    },
  },
  dialogContent: {
    padding: '24px 0 !important',
  },
  radioGroup: {
    margin: '19px 0',
  },
  rootControlLabel: {
    '&&': {
      display: 'flex',
      margin: '8px 0',
      justifyContent: 'center',
    },
  },
  rootRadio: {
    '&&': {
      padding: 0,
      marginRight: 12,
    },
  },
  checkedRaido: {
    '&&.Mui-checked': {
      color: `${COLOR_GREY_50}`,
      '& + p': {
        fontWeight: 700,
      },
    },
  },
  radioDateText: {
    marginLeft: 5,
    color: COLOR_UST_70,
  },
  rootSelect: {
    '& .MuiSelect-select': {
      fontSize: 16,
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px !important',
      borderColor: `${COLOR_GREY_20} !important`,
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  reserveSelect: {
    marginTop: 15,
  },
  timeBox: {
    width: '100%',
    maxWidth: 136,
    padding: 0,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    border: `1px solid ${COLOR_GREY_30}`,
  },
  timeInput: {
    '&& .MuiInputBase-root': {
      width: 40,
      height: 40,
    },
    '&& input': {
      padding: '5px 10px',
    },
    '&& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 0,
    },
  },
  rootTimesButton: {
    '&&': {
      minWidth: 'auto',
      width: 'calc(25% - 5px)',
      height: 35,
      margin: theme.spacing(1.25),
      fontSize: 12,
      borderColor: COLOR_GREY_20,
      '&:focus': {
        background: COLOR_MINT_80,
        color: COLOR_GREY_70,
        borderColor: COLOR_GREY_20,
      },
    },
  },
  disabledTimesBtn: {
    '&&': {
      color: `${COLOR_GREY_40} !important`,
      border: 'transparent !important',
      background: COLOR_GREY_5,
    },
  },
  timeSelect: {
    '&&': {
      width: 84,
      height: 'inherit',
      backgroundColor: COLOR_GREY_5,
      borderRadius: 4,
      overflow: 'hidden',
    },
    '&&::before': {
      borderBottom: 0,
      content: 'none',
    },
    '&&::after': {
      borderBottom: 0,
      content: 'none',
    },
    '&& .MuiSelect-filled': {
      padding: '6px 16px',
    },
  },
  cancelBtn: {
    '&.MuiButton-root': {
      width: 50,
      minWidth: 50,
      height: 28,
      color: COLOR_GREY_60,
      '&:hover': {
        color: COLOR_GREY_60,
      },
    },
  },
  confirmBtn: {
    '&.MuiButton-root': {
      width: 50,
      minWidth: 50,
      height: 28,
      color: COLOR_VIOLET_70,
      background: COLOR_VIOLET_5,
      '&:hover': {
        color: COLOR_VIOLET_70,
        background: COLOR_VIOLET_5,
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
  boldText: {
    '&&': {
      fontWeight: 'bold',
    },
  },
  linkText: {
    '&&': {
      fontWeight: 'bold',
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_60,
    },
  },
}));

export default SalesDetail;
