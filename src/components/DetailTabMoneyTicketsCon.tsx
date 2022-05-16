import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_RED_60,
} from '../common/styles/Color';

const moneyTicketItems = [
  {
    id: 1,
    name: '랑스스킨앤바디',
    ticketName: '20만원 금액권',
    date: 'YYYY-MM-DD HH:MM:SS',
    payment: 200000,
    usePayment: '60,000원/200,000원',
    status: '사용',
    useHistory: '1회차 YYYY-MM-DD 2회차 YYYY-MM-DD',
  },
  {
    id: 2,
    name: '랑스스킨앤바디',
    ticketName: '20만원 금액권',
    date: 'YYYY-MM-DD HH:MM:SS',
    payment: 200000,
    usePayment: '60,000원/200,000원',
    status: '사용',
    useHistory: '1회차 YYYY-MM-DD 2회차 YYYY-MM-DD',
  },
  {
    id: 3,
    name: '랑스스킨앤바디',
    ticketName: '20만원 금액권',
    date: 'YYYY-MM-DD HH:MM:SS',
    payment: 200000,
    usePayment: '60,000원/200,000원',
    status: '사용',
    useHistory: '1회차 YYYY-MM-DD 2회차 YYYY-MM-DD',
  },
  {
    id: 4,
    name: '랑스스킨앤바디',
    ticketName: '20만원 금액권',
    date: 'YYYY-MM-DD HH:MM:SS',
    payment: 200000,
    usePayment: '60,000원/200,000원',
    status: '사용',
    useHistory: '1회차 YYYY-MM-DD 2회차 YYYY-MM-DD',
  },
  {
    id: 5,
    name: '랑스스킨앤바디',
    ticketName: '20만원 금액권',
    date: 'YYYY-MM-DD HH:MM:SS',
    payment: 200000,
    usePayment: '0원/200,000원',
    status: '미사용',
  },
];

const DetailTabMoneyTicketsCon = () => {
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
              샵 이름
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              금액권 이름
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              결제일시
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
              사용금액/전체금액
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              사용상태
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              사용이력
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moneyTicketItems.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                {row.name}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.ticketName}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.date}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.payment}원
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.usePayment}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(
                  classes.tableCell,
                  row.status === '미사용' ? classes.errorText : undefined,
                )}
              >
                {row.status}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.useHistory}
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
  errorText: {
    '&&': {
      color: COLOR_RED_60,
      fontWeight: 900,
    },
  },
}));

export default DetailTabMoneyTicketsCon;
