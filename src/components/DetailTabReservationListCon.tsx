import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Typography,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_RED_60,
  COLOR_UST_60,
} from '../common/styles/Color';

const reservationListItems = [
  {
    id: 1,
    date: '2021-10-27 18:16',
    shopName: '랑스스킨앤바디',
    paymentNum: '1905m0001',
    type: '일반',
    product: '[왁싱/여성/바디왁싱] 다리하프',
    price: 100000,
    sale: 0,
    payment: 100000,
    method: '가상계좌',
    status: '결제대기',
    reservationDate: 'YYYY-MM-DD HH:MM',
    reservationStatus: '이용완료',
  },
  {
    id: 2,
    date: '2021-10-27 18:16',
    shopName: '랑스스킨앤바디',
    paymentNum: '1905m0001',
    type: '이벤트',
    product: '[왁싱/여성/바디왁싱] 다리하프',
    price: -100000,
    sale: 0,
    payment: 100000,
    method: '신용카드',
    status: '결제취소',
    reservationDate: 'YYYY-MM-DD HH:MM',
    reservationStatus: '이용완료',
  },
  {
    id: 3,
    date: '2021-10-27 18:16',
    shopName: '랑스스킨앤바디',
    paymentNum: '1905m0001',
    type: '일반',
    product: '[왁싱/여성/바디왁싱] 다리하프',
    price: -100000,
    sale: 0,
    payment: 100000,
    method: '금액권',
    status: '결제취소',
    reservationDate: 'YYYY-MM-DD HH:MM',
    reservationStatus: '이용완료',
  },
  {
    id: 4,
    date: '2021-10-27 18:16',
    shopName: '랑스스킨앤바디',
    paymentNum: '1905m0001',
    type: '일반',
    product: '[왁싱/여성/바디왁싱] 다리하프',
    price: 100000,
    sale: 1000,
    payment: 100000,
    method: '정기권',
    status: '결제완료',
    reservationDate: 'YYYY-MM-DD HH:MM',
    reservationStatus: '예약취소',
  },
];

const DetailTabReservationListCon = () => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.logTable}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              예약일자
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              샵 이름
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              결제번호
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              구분
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
              금액
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              할인금액
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
              결제수단
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
              예약확정일시
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              예약상태
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservationListItems.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                {row.date}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.shopName}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.tableCell, classes.linkText)}
              >
                {row.paymentNum}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.type}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.ellipsis, classes.tableCell)}
              >
                <Typography
                  className={clsx(classes.ellipsis, classes.tableCellText)}
                >
                  {row.product}
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                className={clsx(
                  classes.tableCell,
                  row.price < 0 ? classes.errorText : undefined,
                )}
              >
                {row.price.toLocaleString()}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.sale.toLocaleString()}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(
                  classes.tableCell,
                  row.payment < 0 ? classes.errorText : undefined,
                )}
              >
                {row.payment.toLocaleString()}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.method}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(
                  classes.tableCell,
                  row.status === '결제취소' ? classes.errorText : undefined,
                )}
              >
                {row.status}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.reservationDate}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(
                  classes.tableCell,
                  row.reservationStatus === '예약취소'
                    ? classes.errorText
                    : undefined,
                )}
              >
                {row.reservationStatus}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  tableContainer: {
    width: '100%',
  },
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'auto',
  },
  tableCell: {
    '&.MuiTableCell-root': {
      position: 'relative',
      height: 50,
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      padding: 10,
      fontWeight: 400,
      whiteSpace: 'pre-line',
    },
  },
  tableHead: {
    '&.MuiTableCell-root': {
      backgroundColor: COLOR_GREY_0,
      fontWeight: 700,
    },
  },
  logTable: {
    marginTop: theme.spacing(14),
  },
  tableCellText: {
    '&&': {
      fontWeight: 400,
    },
  },
  linkText: {
    '&&': {
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_60,
    },
  },
  errorText: {
    '&&': {
      color: COLOR_RED_60,
      fontWeight: 400,
    },
  },
  ellipsis: {
    maxWidth: 211,
    margin: '0 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default DetailTabReservationListCon;
