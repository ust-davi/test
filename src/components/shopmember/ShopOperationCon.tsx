import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TableContainer,
} from '@mui/material';

import {
  COLOR_DARK_GREY,
  COLOR_GREY_0,
  COLOR_GREY_100,
  COLOR_GREY_20,
} from '../../common/styles/Color';
import { makeStyles } from '@mui/styles';

import { ShopMemberData } from '../ShopOperationData';

const ShopOperationCon = () => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table size="small" className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>
              일자
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              예약
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              매출금액
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              신규회원
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              누적회원
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              예약취소
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              리뷰
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              문의
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ShopMemberData.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.date}
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
                  {row.newMember.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.accumulateMember.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.reservationCancel.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.review.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.qna.toLocaleString()}
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
