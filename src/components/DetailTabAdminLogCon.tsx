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
import { COLOR_GREY_0, COLOR_GREY_10 } from '../common/styles/Color';
import theme from '../common/theme';

const rows = [
  {
    id: 1,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '김나래',
    type: '샵정보',
    detail: '주소변경',
  },
  {
    id: 2,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '김나래',
    type: '기본정보',
    detail: '서비스취소',
  },
  {
    id: 3,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '김나래',
    type: '기본정보',
    detail: '입점취소',
  },
  {
    id: 4,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '김수정',
    type: '기본정보',
    detail: '서비스 승인',
  },
  {
    id: 5,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '박실',
    type: '가맹점보',
    detail: '입점승인',
  },
  {
    id: 6,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '염보영',
    type: '가맹점보',
    detail: '모바일 예약 활성화',
  },
  {
    id: 7,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '염보영',
    type: '가맹점보',
    detail: '뷰티매니저 무료 기간 제공',
  },
];

const DetailTabAdminLogCon = () => {
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
              일시
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              관리자
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              구분
            </TableCell>
            <TableCell
              className={clsx(classes.tableHead, classes.tableCell)}
              sx={{ width: 900 }}
            >
              상세
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
                {row.owner}
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.type}
              </TableCell>
              <TableCell align="left" className={classes.tableCell}>
                {row.detail}
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
      minWidth: 200,
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
}));

export default DetailTabAdminLogCon;
