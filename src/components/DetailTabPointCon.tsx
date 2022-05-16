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

const pointItems = [
  {
    id: 1,
    date: '2021-10-27 18:16',
    payment: 0,
    deduction: 0,
    balance: 0,
    paymentDate: '현장결제',
    detail: '상품구매 시 마일리지 지급',
    manager: '-',
    paymentNum: '1905m0001',
  },
  {
    id: 2,
    date: '2021-10-27 18:16',
    payment: -100000,
    deduction: 0,
    balance: -100000,
    paymentDate: '신용카드',
    detail: '상품구매 시 마일리지 지급',
    manager: '김수정',
    paymentNum: '1905m0001',
  },
  {
    id: 3,
    date: '2021-10-27 18:16',
    payment: -100000,
    deduction: 0,
    balance: -100000,
    paymentDate: '금액권',
    detail: '상품구매 시 마일리지 지급',
    manager: '박동희',
    paymentNum: '1905m0001',
  },
  {
    id: 4,
    date: '2021-10-27 18:16',
    payment: 100000,
    deduction: 1000,
    balance: 99000,
    paymentDate: '정기권',
    detail: '상품구매 시 마일리지 지급',
    manager: '임은영',
    paymentNum: '1905m0001',
  },
];

const DetailTabPointCon = () => {
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
              일자
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              지급액
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              차감액
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              잔액
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              지급/차감일
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              상세내용
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              처리자
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              결제번호
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pointItems.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                {row.date}
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
                {row.deduction.toLocaleString()}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(
                  classes.tableCell,
                  row.balance < 0 ? classes.errorText : undefined,
                )}
              >
                {row.balance.toLocaleString()}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.paymentDate}
              </TableCell>
              <TableCell align="left" className={classes.tableCell}>
                <Typography
                  className={clsx(classes.ellipsis, classes.tableCellText)}
                >
                  {row.detail}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.manager}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.tableCell, classes.linkText)}
              >
                {row.paymentNum}
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
  logTable: {
    marginTop: theme.spacing(14),
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

export default DetailTabPointCon;
