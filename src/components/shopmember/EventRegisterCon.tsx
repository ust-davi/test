import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  TableContainer,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
  COLOR_UST_60,
} from '../../common/styles/Color';
import clsx from 'clsx';

import { RegisterData } from '../EventData';

const EventRegisterCon = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>
              등록일시
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              카테고리
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              이벤트
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              가격
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              할인가격
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              기간
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              상태
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              상세
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RegisterData.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.date}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.category}
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.tableCell, classes.eventCell)}
              >
                <Typography textAlign="left" className={classes.tableCellText}>
                  {row.event}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.pay.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.sales.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.term}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.status}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography
                  className={clsx(classes.linkText, classes.tableCellText)}
                >
                  {row.detail}
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
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  tableContainer: {
    width: '100%',
  },
  table: {
    marginTop: theme.spacing(14),
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
  eventCell: {
    minWidth: 721,
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
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
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
    color: COLOR_RED_60,
  },
}));

export default EventRegisterCon;
