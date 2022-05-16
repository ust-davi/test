import SubLayout from '../pages/SubLayout';
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
  TableHead,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_5,
  COLOR_GREY_10,
  COLOR_GREY_20,
  COLOR_GREY_30,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_70,
  COLOR_VIOLET_5,
  COLOR_GREY_70,
  COLOR_VIOLET_30,
  COLOR_DARK_GREY,
  COLOR_GREY_50,
  COLOR_MINT_80,
  COLOR_UST_0,
  COLOR_GREY_40,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../common/styles/Shadow';
import clsx from 'clsx';

import SelectInput from '../common/components/SelectInput';
import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ko } from 'date-fns/locale';
import Confirm from '../common/components/Confirm';

const infoDetailItem = [
  {
    id: 1,
    label: '결제번호',
    value: '1905m0001',
  },
  {
    id: 2,
    label: '구분',
    value: '일반',
  },
  {
    id: 3,
    label: '상품',
    value: '[왁싱/여성/바디왁싱] 다리하프',
  },
  {
    id: 4,
    label: '결제수단',
    value:
      '신용카드 : KB국민카드\n 카드번호 : 557042*********5 \n 승인번호 : 12345678\n 승인시각 : 202012 07190701 \n',
  },
  {
    id: 5,
    label: '결제상태',
    value: '결제완료 YYYY-MM-DD HH:MM:SS',
  },
  {
    id: 6,
    label: '결제금액',
    value: 100000,
  },
  {
    id: 7,
    label: '결제정보 상세',
    value:
      '쿠폰할인  :  -10.000원\n포인트 사용  :  -3,000원\n적립 포인트  :  200원\n지급 스탬프  :  1개',
  },
  {
    id: 8,
    label: '예약요청시간',
    value:
      '1차    YYYY.MM.DD HH:MM       2차    YYYY.MM.DD HH:MM   3차    YYYY.MM.DD HH:MM',
  },
  {
    id: 9,
    label: '예약상태',
    value: '예약요청',
  },
];

const reserveDateItems = [
  {
    id: 1,
    value: '10월 9일',
  },
];

const reserveTimeItems = [
  {
    id: 1,
    value: '오후 3: 30',
  },
];

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
    owner: '김나래',
    type: '예약상태변경',
    requester: '샵',
    detail: '예약요청 > 예약확정 YYYY.MM.DD HH:MM',
  },
  {
    id: 2,
    date: 'YYYY.MM.DD HH:MM',
    owner: '김수정',
    type: '예약상태변경',
    requester: '샵',
    detail: '예약변경 YYYY.MM.DD HH:MM  >  YYYY.MM.DD HH:MM',
  },
  {
    id: 3,
    date: 'YYYY.MM.DD HH:MM',
    owner: '박실',
    type: '예약상태변경',
    requester: '샵',
    detail: '예약변경 YYYY.MM.DD HH:MM  >  YYYY.MM.DD HH:MM',
  },
  {
    id: 4,
    date: 'YYYY.MM.DD HH:MM',
    owner: '염보영',
    type: '예약상태변경',
    requester: '샵',
    detail: '예약변경 YYYY.MM.DD HH:MM  >  YYYY.MM.DD HH:MM',
  },
  {
    id: 5,
    date: 'YYYY.MM.DD HH:MM',
    owner: '지세형',
    type: '예약상태변경',
    requester: '회원',
    detail: '예약취소',
  },
];

const cancledChoiceItems = [
  {
    id: 1,
    label: '포인트로 전환',
  },
  {
    id: 2,
    label: '결제 취소',
  },
];

interface MatchParams {
  id: string;
}

const ReserveCaseDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [refundAlertOpen, setRefundAlertOpen] = useState<boolean>(false);
  const [pointAlertOpen, setPointAlertOpen] = useState<boolean>(false);
  const [reserveFlag, setReserveFlag] = useState<string>();
  const [reserveCancel, setReserveCancel] = useState<string>(
    canceledItems[0].value,
  );

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
    history.push('/shopManagement/reservation');
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
            예약 상세
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

          <Typography variant="h6">샵 정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  상호
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.linkText)}
                >
                  랑스스킨앤바디
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  대표자
                </TableCell>
                <TableCell className={classes.tableCell}>정우성</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  전화번호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  010-1234-5678
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  주소
                </TableCell>
                <TableCell className={classes.tableCell}>
                  강원도 강릉시 분목동 99-1번지
                </TableCell>
              </TableRow>
              <TableRow>
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

          <Typography variant="h6">예약 내역</Typography>
          <Table className={classes.table}>
            <TableBody>
              {infoDetailItem.map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    component="th"
                    align="center"
                    className={clsx(classes.tableHead, classes.tableCell)}
                  >
                    {item.label}
                  </TableCell>
                  <TableCell
                    className={clsx(
                      (item.label === '결제상태' ||
                        item.label === '예약상태') &&
                        classes.violetBold,
                      classes.tableCell,
                    )}
                  >
                    {item.value.toLocaleString()}
                    {item.label === '예약상태' && item.value !== '예약취소' && (
                      <Button
                        variant="contained"
                        sx={{ ml: 15.72 }}
                        onClick={handleClickOpen}
                      >
                        변경
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Typography variant="h6">관리자 로그</Typography>
          <Table className={classes.table} sx={{ tableLayout: 'auto' }}>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell
                  align="center"
                  className={clsx(classes.logTableHead, classes.tableCell)}
                >
                  일시
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.logTableHead, classes.tableCell)}
                >
                  관리자
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.logTableHead, classes.tableCell)}
                >
                  구분
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.logTableHead, classes.tableCell)}
                >
                  요청자
                </TableCell>
                <TableCell
                  className={clsx(classes.logTableHead, classes.tableCell)}
                >
                  상세
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.id}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.owner}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.type}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.requester}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.detail}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box width="100%" display="flex" justifyContent="center">
            <Button
              variant="contained"
              className={classes.listBtn}
              onClick={onClickListButton}
            >
              목록
            </Button>
          </Box>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={undefined}
          className={classes.dialog}
        >
          <DialogTitle className={classes.dialogTitle}>
            <Icon>info</Icon>
            예약상태 변경
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <SelectInput
              size="small"
              placeholder="---------선택---------"
              menuItems={ReserveDialogItems}
              onChange={setReserveFlag}
              className={classes.select}
            />
            {reserveFlag === '예약변경' && (
              <div className={classes.reserveChoice}>
                <Typography
                  fontSize={16}
                  fontWeight={400}
                  color={COLOR_DARK_GREY}
                >
                  변경할 예약 시간을 선택하세요.
                </Typography>
                <div>
                  <SelectInput
                    size="small"
                    className={clsx(classes.select, classes.reserveSelect)}
                    placeholder={reserveDateItems[0].value}
                    menuItems={reserveDateItems}
                  />
                  <SelectInput
                    size="small"
                    className={clsx(classes.select, classes.reserveSelect)}
                    placeholder={reserveTimeItems[0].value}
                    menuItems={reserveTimeItems}
                  />
                </div>
              </div>
            )}
            {reserveFlag === '예약확정' && (
              <RadioGroup
                name="radio-buttons-group"
                defaultValue={confirmedItems[0].label}
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
              <>
                <RadioGroup
                  name="radio-buttons-group"
                  defaultValue={cancledChoiceItems[0].label}
                  className={classes.radioGroup}
                >
                  {cancledChoiceItems.map((item) => (
                    <FormControlLabel
                      key={item.id}
                      sx={{
                        '&.MuiFormControlLabel-root': {
                          justifyContent: 'left',
                        },
                      }}
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
                        <Typography fontSize={16} fontWeight={400}>
                          {item.label}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
                <SelectInput
                  size="small"
                  className={clsx(classes.select, classes.reserveSelect)}
                  placeholder={canceledItems[0].value}
                  onChange={setReserveCancel}
                  menuItems={canceledItems}
                />
              </>
            )}
          </DialogContent>

          <DialogActions
            sx={{
              '&.MuiDialogActions-root': {
                padding: 0,
                justifyContent: 'space-between',
              },
            }}
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
          className={classes.confirm}
        />
        <Confirm
          isOpen={pointAlertOpen}
          message="홍길동 고객님의 예약을 취소하고 결제 금액을 포인트로 전환하겠습니까?"
          okFunction={handlePointConfirm}
          onClose={handlePointClose}
          className={classes.confirm}
        />
      </Container>
    </SubLayout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '0',
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
    '&&': {
      width: 200,
      backgroundColor: COLOR_GREY_5,
      fontWeight: 700,
    },
  },
  logTableHead: {
    '&&': {
      backgroundColor: COLOR_GREY_5,
      fontWeight: 700,
    },
  },
  listBtn: {
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
  dialog: {
    '& .MuiPaper-root': {
      width: 328,
      minWidth: 328,
      padding: theme.spacing(8),
      borderRadius: 16,
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
      color: `${COLOR_GREY_70}`,
      '& + p': {
        fontWeight: 700,
      },
    },
  },
  radioDateText: {
    marginLeft: 5,
    color: COLOR_UST_70,
  },
  select: {
    '& .MuiSelect-select': {
      fontSize: 16,
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px !important',
      borderColor: `${COLOR_GREY_20} !important`,
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  reserveChoice: {
    padding: theme.spacing(15, 0),
    '& > div': {
      display: 'flex',
    },
    '& .MuiOutlinedInput-root': {
      marginRight: 20,
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
  confirm: {
    '& .MuiPaper-root': {
      height: 168,
    },
    '& .MuiDialogTitle-root': {
      padding: theme.spacing(10.5, 8, 8.5, 8),
      fontSize: 14,
    },
    '& .MuiDialogContent-root': {
      padding: theme.spacing(0, 8),
      '& .MuiTypography-root': {
        fontSize: 14,
        color: COLOR_DARK_GREY,
      },
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(0, 8, 8, 8),
      '& .MuiButton-root': {
        width: 50,
        minWidth: 50,
        height: 28,
        padding: 0,
        fontSize: 14,
        fontWeight: 700,
        color: COLOR_GREY_60,
        '&:hover': {
          color: COLOR_GREY_60,
        },
        '&:not(:first-of-type)': {
          color: COLOR_VIOLET_70,
          background: COLOR_VIOLET_5,
          '&:hover': {
            color: COLOR_VIOLET_70,
            background: COLOR_VIOLET_5,
          },
        },
      },
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
  violetBold: {
    '&&': {
      fontSize: 17,
      color: COLOR_VIOLET_70,
      fontWeight: 700,
    },
  },
}));

export default ReserveCaseDetail;
