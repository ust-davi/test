import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TableContainer,
} from '@mui/material';
import { useHistory } from 'react-router-dom';

import {
  COLOR_DARK_GREY,
  COLOR_GREY_0,
  COLOR_GREY_100,
  COLOR_GREY_20,
} from '../common/styles/Color';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { AdminData } from './ShopOperationData';

const ShopOperationCon = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <TableContainer>
      <Table size="small" className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>
              일자
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              입점
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              원복
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              유지
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              예약
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              매출금액
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              신규
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              탈퇴
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              누적
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              DAU
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              가입일
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              MAU
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              AU
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              ARPU
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              ARPDAU
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AdminData.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.date}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.store}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.restore}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.keep}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.reservation}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.payment.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.new}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.resign}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.accumulate.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.dau}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.mau.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.au}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.arpu}%
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.arppu.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.arpdau}%
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles((theme: any) => ({
  table: {
    border: `1px solid ${COLOR_GREY_20}`,
  },
  tableHead: {
    '&&': {
      backgroundColor: COLOR_GREY_0,
      border: `1px solid ${COLOR_GREY_20}`,
      '& th': {
        position: 'relative',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLOR_GREY_100,
        padding: theme.spacing(8),
      },
      '& th:not(:last-child)::after': {
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translate(0, -50%)',
        content: `''`,
        display: 'inline-block',
        width: 2,
        height: 14,
        background: COLOR_GREY_20,
      },
    },
  },
  tableCell: {
    '&&': {
      color: COLOR_DARK_GREY,
      wordBreak: 'keep-all',
      borderBottom: `1px solid ${COLOR_GREY_20}`,
      padding: theme.spacing(7),
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
}));

export default ShopOperationCon;
